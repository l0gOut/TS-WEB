import User from "./user.js"

class CommentBlog {
  private user: User;
  private text: string;
  // private rating: number = 0;

  constructor(user: User, comment: string) {
    this.user = user;
    this.text = comment;
  }

  // public addRating(): void {
  //   this.rating++;
  // }

  // public removeRating(): void {
  //   this.rating--;
  // }

  public getUser(): User {
    return this.user;
  }

  public toString(): string {
    return `${this.text}`;
  }
}

export default CommentBlog;
