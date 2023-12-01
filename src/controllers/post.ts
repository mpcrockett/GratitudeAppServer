import prisma from "../connectors/db";
import { iPost } from "../types";

export default class Post {
  static async createPost(post: iPost) {
    const { userId, promptId, text, photoUrl } = post;
    const addPost = await prisma.post.create({
      data: {
        userId,
        promptId,
        text,
        photoUrl
      }
    })
    return addPost;
  };
}