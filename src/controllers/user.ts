import prisma from "../connectors/db";
import { iUser } from "../types";

export default class User {
  static async createUser(user: iUser) {
    const { username, password } = user;
    const newUser = await prisma.user.create({
      data: {
        username,
        password
      }
    });
    return newUser;
  }
  
  static async getUserById(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }
}