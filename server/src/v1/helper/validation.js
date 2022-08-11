const joi = require("joi");

const userValidate = (data) => {
  const userSchema = joi.object({
    userId: joi.number().required(),
    email: joi.string().lowercase().required(),
    password: joi.string().min(12).max(32).required(),
    username: joi.string().lowercase().max(30).required(),
  });
  return userSchema.validate(data);
};

module.exports = {
  userValidate,
};
