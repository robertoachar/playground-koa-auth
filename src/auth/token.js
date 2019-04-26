import jwt from 'jsonwebtoken';

import config from '../config';
import User from '../user/user.model';

const token = async (ctx) => {
  const user = await User.findById(ctx.state.userId);

  const payload = {
    id: user.id
  };

  const authToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1h' });

  ctx.body = { token: authToken };
};

export default token;
