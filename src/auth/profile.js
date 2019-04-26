import User from '../user/user.model';

const profile = async (ctx) => {
  const id = ctx.state.userId;

  const user = await User.findById(id);

  ctx.body = user;
};

export default profile;
