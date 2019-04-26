import bcrypt from 'bcrypt';

import User from '../user/user.model';
import { checkString } from '../util';

const login = async (ctx, next) => {
  const { email, password } = ctx.request.body;

  checkString(email, 'Enter an email');
  checkString(password, 'Enter a password');

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new Error('User not found');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Invalid password');
  }

  ctx.state.userId = user.id;

  await next();
};

export default login;
