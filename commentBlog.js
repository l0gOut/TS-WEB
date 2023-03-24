class CommentBlog {
    constructor(comment) {
        this.comment = {
            text: "",
            feature: false,
            rating: 0,
        };
        this.comment.text = comment;
    }
    addRating() {
        this.comment.rating++;
    }
    removeRating() {
        this.comment.rating--;
    }
    featureChange() {
        this.comment.feature = !this.comment.feature;
    }
    toString() {
        return `${this.comment.text}`;
    }
}
export default CommentBlog;
