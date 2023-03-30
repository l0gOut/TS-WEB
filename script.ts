import CommentBlog from "./commentBlog.js";
import User from "./user.js";

const comment: HTMLInputElement | null =
  document.querySelector(".comment-block");
const successComment: HTMLElement | null =
  document.querySelector(".success-comment");
const commentContainer: HTMLElement | null =
  document.querySelector(".comment-container");
const signUser: HTMLInputElement | null = document.querySelector(".sign-user");
const signButton: HTMLElement | null = document.querySelector(".sign-button");
const userName: HTMLElement | null = document.querySelector(".user-name");

let user: User;

signButton?.addEventListener("click", signOrExit);

successComment?.addEventListener("click", createComment);

// Изменение состояния кнопки при вводе текста
comment?.addEventListener("input", e => {
  const commentText: HTMLInputElement = <HTMLInputElement>e.target;

  // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
  if (commentText.value.trim() && successComment) {
    successComment.classList.add("active-button");
  } else if (successComment) {
    successComment.classList.remove("active-button");
  }
});

// Заход и выход пользователя через меню сверху
function signOrExit(): void {
  if (userName?.classList.contains("active") && signButton && signUser) {
    userName.classList.remove("active");
    signUser.classList.remove("hide");
    signButton.textContent = "Войти";
  } else if (userName && signButton && signUser?.value.trim() && comment) {
    userName.textContent = signUser.value.trim();
    user = new User(signUser.value.trim());
    userName.classList.add("active");
    signUser.classList.add("hide");
    signButton.textContent = "Выйти";
    signUser.value = "";
  }
}

// Создание комментария через text-area
function createComment(): void {
  if (comment?.value.trim()) {
    const CommentBlock: CommentBlog = new CommentBlog(
      user,
      comment.value.trim()
    );
    const newComment: HTMLElement = document.createElement("div");

    newComment.innerHTML = `${CommentBlock.getUser().toString()}, оставил комментарий \n ${CommentBlock.toString()}`;

    commentContainer?.appendChild(newComment);
    successComment?.classList.remove("active");
    comment.value = ""; // Стирания прошлого текста
  }
}
