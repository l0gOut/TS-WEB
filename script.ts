import CommentBlog from "./commentBlog.js";

const comment: HTMLInputElement | null =
  document.querySelector(".comment-block");
const successComment: HTMLElement | null =
  document.querySelector(".success-comment");
const commentContainer: HTMLElement | null =
  document.querySelector(".comment-container");

successComment?.addEventListener("click", createComment);

comment?.addEventListener("input", e => {
  const commentText: HTMLInputElement = <HTMLInputElement>e.target;

  if (commentText.value.trim() && successComment) {
    successComment.classList.add("active");
  } else if (successComment) {
    successComment.classList.remove("active");
  }
});

function createComment(): void {
  if (comment?.value.trim()) {
    const CommentBlock: CommentBlog = new CommentBlog(comment.value.trim());
    const newComment: HTMLElement = document.createElement("div");

    newComment.innerHTML = CommentBlock.toString();

    commentContainer?.appendChild(newComment);
    comment.value = "";
  }
}
