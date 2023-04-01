import CommentBlog from "./commentBlog.js";

class User {
  private user: string;
  private avatarUrl: string;
  private features: CommentBlog[] = [];

  constructor(user: string, avatarUrl: string ) {
    this.user = user;
    this.avatarUrl = avatarUrl;
  }

  public addFeature(feature: CommentBlog): CommentBlog[] {
    this.features.push(feature);
    return this.features;
  }

  public getAvatar(): string {
    return this.avatarUrl;
  }

  public toString(): string {
    return this.user;
  }
}

export default User;
