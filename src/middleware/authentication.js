import db from '@/database';
import { tokenHelper, permissionHelper } from '@/helpers';

export default async function authenticate(req, res, next) {

  // Get authorization header from request
  const authorization = req.headers.authorization || '';
  const refreshToken = req.headers.refreshtoken || '';

  // Firstly, set request user to null
  req.user = null;

  // Check for empty Authorization header
  if (!authorization) {
    return next();
  }

  // Make sure the token is bearer token
  if (!authorization.startsWith('Bearer ')) {
    return next();
  }

  // Extract token from header
  const token = authorization.substring(7);

  let tokenData;
  // Verify token
  try {
    tokenData = tokenHelper.verifyToken(token);
  } catch (error) {
    console.error('Token verification failed:', error);

    return next({ status: 401, message: 'Token has expired' });
    // Handle the error appropriately here, e.g., by sending a response to the client
    // return;
  }
  // const tokenData = tokenHelper.verifyToken(token);
  // Find user from database
  console.log("the tokeeen dataaaaa : ", tokenData)
  // const user = await db.models.user.findByPk(tokenData.id);

  let user;

  if (tokenData.role === 'admin') {

    user = await db.models.user.findByPk(tokenData.id);
  } else {

    const modeler = permissionHelper.normalizeModel(tokenData.role)
    user = await db.models.user.findByPk(tokenData.id, { include: { model: modeler } });
  }

  // Check if user exists
  if (!user) {
    return next({ status: 401, message: 'There is no user' });
  }
  // console.log("the all table data associated with user : ", user.toJSON())
  // Set request user
  req.user = user;

  // Check if the token renewal time is coming
  const now = new Date();
  const exp = new Date(tokenData.exp * 1000);
  const difference = exp.getTime() - now.getTime();
  const minutes = Math.round(difference / 60000);

  // Check for refresh token and time left
  if (refreshToken && minutes < 15) {
    // Verify refresh token and get refresh token data
    const refreshTokenData = await tokenHelper.verifyToken(refreshToken);

    // Check the user of refresh token
    if (refreshTokenData.id === tokenData.id) {
      // Generate new tokens
      const newToken = user.generateToken();
      const newRefreshToken = user.generateToken('2h');

      // Set response headers
      res.setHeader('Token', newToken);
      res.setHeader('RefreshToken', newRefreshToken);
    }
  }

  // Go to next middleware
  return next();
}
