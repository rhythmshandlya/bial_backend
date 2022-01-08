exports.isLoggedIn = (req, res) => {
  res.status(201).json({
    status: true
  });
};

exports.login = (req, res) => {
  res.status(201).json({
    status: true,
    user: {
      email: 'test@bial.app'
    }
  });
};
