import {
  getRefreshToken,
  getUserToken,
} from "../../services/auth/authService.js";

const loginUser = async (req, res, next) => {
  try {
    const { user, tokens } = await getUserToken(req.body);
    res.status(200).json({ user, ...tokens });
  } catch (err) {
    next(err);
  }
};

const refreshToken = (req, res, next) => {
  try {
    const accessToken = getRefreshToken(req.body);
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

export { loginUser, refreshToken };
