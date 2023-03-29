import CommentBlog from "./commentBlog.js";
const comment = document.querySelector(".comment-block");
const successComment = document.querySelector(".success-comment");
const commentContainer = document.querySelector(".comment-container");
successComment === null || successComment === void 0 ? void 0 : successComment.addEventListener("click", createComment);
comment === null || comment === void 0 ? void 0 : comment.addEventListener("input", e => {
    const commentText = e.target;
    if (commentText.value.trim() && successComment) {
        successComment.classList.add("active");
    }
    else if (successComment) {
        successComment.classList.remove("active");
    }
});
function createComment() {
    if (comment === null || comment === void 0 ? void 0 : comment.value.trim()) {
        const CommentBlock = new CommentBlog(comment.value.trim());
        const newComment = document.createElement("div");
        newComment.innerHTML = CommentBlock.toString();
        commentContainer === null || commentContainer === void 0 ? void 0 : commentContainer.appendChild(newComment);
        comment.value = "";
    }
}
