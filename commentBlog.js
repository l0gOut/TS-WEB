class CommentBlog {
    // private rating: number = 0;
    constructor(user, comment) {
        this.date = new Date();
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
    getDate() {
        return this.date;
    }
    toString() {
        return `${this.text}`;
    }
}
export default CommentBlog;
