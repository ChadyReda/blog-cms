import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generateToken = (user: { id: string; role: string }) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h'
  })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string)
}

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10)
}

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}
