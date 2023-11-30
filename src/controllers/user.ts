import prisma from "../connectors/db";

export default class User {
  static async getUserById(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }
}