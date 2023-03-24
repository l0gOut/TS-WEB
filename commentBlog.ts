type TemplateComment = {
  text: string;
  feature: boolean;
  rating: number;
};

class CommentBlog {
  private comment: TemplateComment = {
    text: "",
    feature: false,
    rating: 0,
  };

  constructor(comment: string) {
    this.comment.text = comment;
  }

  public addRating(): void {
    this.comment.rating++;
  }

  public removeRating(): void {
    this.comment.rating--;
  }

  public featureChange(): void {
    this.comment.feature = !this.comment.feature;
  }

  public toString(): string {
    return `${this.comment.text}`;
  }
}

export default CommentBlog;
