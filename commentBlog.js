class CommentBlog {
    constructor(user, comment) {
        this.id = new Date().getTime();
        this.date = new Date();
        this.rating = 0;
        this.user = user;
        this.text = comment;
    }
    addRating() {
        this.rating++;
    }
    removeRating() {
        this.rating--;
    }
    getId() {
        return this.id;
    }
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
