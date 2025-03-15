import { Role, User } from "../../models/RootModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { promisify } from "util";

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.Roles.length && user.Roles.map((role) => role.role_name),
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

const verifyJwt = promisify(jwt.verify);

const emailPasswordMissMatch = () => {
  const error = new Error("Invalid email or password");
  error.statusCode = 401;
  throw error;
};

const getUserToken = async (userData) => {
  const { email, password } = userData;
  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Role,
        attributes: ["id", "role_name"],
        through: { attributes: [] },
      },
    ],
  });
  if (!user) emailPasswordMissMatch();

  const comparedPassword = await bcrypt.compare(password, user.password);

  if (!comparedPassword) emailPasswordMissMatch();

  const tokens = generateTokens(user.toJSON());
  return { user, tokens };
};

const getRefreshToken = async (data) => {
  const { token } = data;

  const decode = await verifyJwt(token, process.env.JWT_REFRESH_TOKEN);
  return jwt.sign(
    {
      id: decode.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  /*return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN, (err, decode) => {
      if (err) {
        const error = new Error("Invalid refresh token");
        error.statusCode = 401;
        return reject(error);
      }
      const accessToken = jwt.sign(
        {
          id: decode.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      resolve(accessToken);
    });
  });*/
};

export { getUserToken, getRefreshToken };
