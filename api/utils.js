
import jwt from 'jsonwebtoken';

export const generateToken = (data) => {
  return jwt.sign(
    {
      _id: data._id,
      name: data.name,
      email: data.email,
      message: data.message,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};