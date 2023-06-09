import User from "./user.js"

class CommentBlog {
  private id: number = new Date().getTime();
  private user: User;
  private text: string;
  private date: Date = new Date();
  private rating: number = 0;

  constructor(user: User, comment: string) {
    this.user = user;
    this.text = comment;
  }

  public addRating(): void {
    this.rating++;
  }

  public removeRating(): void {
    this.rating--;
  }

  public getId(): number {
    return this.id;
  }

  public getUser(): User {
    return this.user;
  }

  public getDate(): Date {
    return this.date;
  }

  public toString(): string {
    return `${this.text}`;
  }
}

export default CommentBlog;
