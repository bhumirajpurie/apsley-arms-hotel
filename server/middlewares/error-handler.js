module.exports = (errorMessage, statusCode) => {
  const error = new Error(errorMessage);
  error.statusCode = statusCode;
  throw error;
};
