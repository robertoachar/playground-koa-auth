import bcrypt from 'bcrypt';

import User from '../user/user.model';
import { checkString } from '../util';

const signup = async (ctx, next) => {
  const { name, email, password } = ctx.request.body;

  checkString(name, 'Enter a name');
  checkString(email, 'Enter an email');
  checkString(password, 'Enter a password');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });

  await user.save();

  ctx.state.userId = user.id;

  await next();
};

export default signup;
