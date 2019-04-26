import jwt from 'jsonwebtoken';

import config from '../config';

const authenticate = async (ctx, next) => {
  const { authorization } = ctx.request.headers;

  if (!authorization) {
    ctx.throw(401, 'Missing Authorization Header');
  }

  const [schema, token] = authorization.split(' ');

  if (!schema || !token) {
    ctx.throw(401, 'Invalid Authorization Header');
  }

  if (schema !== 'Bearer') {
    ctx.throw(401, 'Invalid schema');
  }

  try {
    const decoded = await jwt.verify(token, config.JWT_SECRET);

    ctx.state.userId = decoded.id;

    await next();
  } catch (error) {
    ctx.throw(401, 'Invalid token');
  }
};

export default authenticate;
