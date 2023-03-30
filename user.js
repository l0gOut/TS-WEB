// import CommentBlog from "./commentBlog.js";
class User {
    //   private features: CommentBlog[] = [];
    constructor(user) {
        this.user = user;
    }
    //   public addFeature(feature: CommentBlog): CommentBlog[] {
    //     this.features.push(feature);
    //     return this.features;
    //   }
    toString() {
        return this.user;
    }
}
export default User;
