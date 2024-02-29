import createError from 'http-errors';

export default async function (req, res, next) {
  if (req.user.id !== req.params.id && !req.user.appRole === 'tutor') {
    const error = createError(401, 'Not Authorized!');
    return next(error);
  }
  return next();
}
