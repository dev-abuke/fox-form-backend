export default {
  origin: process.env.CORS_ALLOWED_ORIGIN,
  // origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'RefreshToken'],
  exposedHeaders: ['Content-Length', 'Content-Type', 'RefreshToken', 'Token'],
};
