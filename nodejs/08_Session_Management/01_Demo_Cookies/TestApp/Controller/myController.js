exports.user1 = async (req, res) => {
  res.cookie('name', req.params.name);
  res.send('<p>Cookie set:<a href="/user"> View here </a>');
};

exports.user2 = async (req, res) => {
  res.send(req.cookies.name);
};
