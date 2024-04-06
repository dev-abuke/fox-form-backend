import authRouter from '@/routes/auth';
import indexRouter from '@/routes/index';
import formRouter from '@/routes/forms';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);
  app.use('/forms', formRouter);
}
