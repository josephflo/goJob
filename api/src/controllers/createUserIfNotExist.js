const User = require('./models/user');

async function createUserIfNotExist(email) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        email: email
      }
    });

    if (created) {
      console.log('Nuevo usuario creado:', user.toJSON());
    } else {
      console.log('Usuario existente:', user.toJSON());
    }

    return user;
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {
  createUserIfNotExist
};
