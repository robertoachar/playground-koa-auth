import KoaRouter from 'koa-router';

const router = KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

export default router;
