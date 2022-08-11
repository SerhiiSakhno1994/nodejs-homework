const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateUserSubscription = require("./updateUserSubscription");
const setAvatar = require("./setAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateUserSubscription,
  setAvatar,
  verifyEmail,
  resendVerifyEmail,
};
