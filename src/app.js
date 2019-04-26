import Koa from 'koa';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import error from './error';
import router from './router';

const app = new Koa();
app.use(helmet());
app.use(bodyParser());
app.use(error);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
