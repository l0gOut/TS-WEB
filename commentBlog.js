class CommentBlog {
    // private rating: number = 0;
    constructor(user, comment) {
        this.user = user;
        this.text = comment;
    }
    // public addRating(): void {
    //   this.rating++;
    // }
    // public removeRating(): void {
    //   this.rating--;
    // }
    getUser() {
        return this.user;
    }
    toString() {
        return `${this.text}`;
    }
}
export default CommentBlog;
