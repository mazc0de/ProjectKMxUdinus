const error = (error, req, res, next) => {
  if (error) {
    res.json({
      status: "FAIL",
      data: {
        message: "Oops! server error.",
      },
    });
  }
};
module.exports = error;
