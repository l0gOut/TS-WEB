class User {
    constructor(user, avatarUrl) {
        this.features = [];
        this.user = user;
        this.avatarUrl = avatarUrl;
    }
    addFeature(feature) {
        this.features.push(feature);
        return this.features;
    }
    getAvatar() {
        return this.avatarUrl;
    }
    toString() {
        return this.user;
    }
}
export default User;
