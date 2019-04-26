import KoaRouter from 'koa-router';

import authenticate from './authenticate';
import login from './login';
import profile from './profile';
import signup from './signup';
import token from './token';

const router = KoaRouter({
  prefix: '/auth'
});

router.post('/login', login, token);
router.post('/signup', signup, token);
router.get('/profile', authenticate, profile);

export default router;
