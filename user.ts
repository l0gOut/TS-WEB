// import CommentBlog from "./commentBlog.js";

class User {
  private user: string;
//   private features: CommentBlog[] = [];

  constructor(user: string) {
    this.user = user;
  }

//   public addFeature(feature: CommentBlog): CommentBlog[] {
//     this.features.push(feature);
//     return this.features;
//   }

  public toString(): string {
    return this.user;
  }
}

export default User;
