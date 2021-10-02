const yup = require('yup');

module.exports.validateMessage = async (req, res, next) => {
  const { body } = req;

  const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    message: yup
      .string()
      .trim()
      .min(5, 'Your message is too short!')
      .max(1000, 'Your message is too long!')
      .required(),
    author: yup
      .string()
      .email()
      .required(),
    // createdAt: yup
    //   .date()
    //   .required()
    //   .default(() => new Date())
    //   .max(() => new Date(), 'Date must be before today'),
  });

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body);

    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
