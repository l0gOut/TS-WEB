import CommentBlog from "./commentBlog.js";
import User from "./user.js";

const comment: HTMLInputElement | null =
  document.querySelector(".comment-block");
const successComment: HTMLElement | null =
  document.querySelector(".success-comment");
const commentContainer: HTMLElement | null =
  document.querySelector(".comment-container");
const nickname: HTMLInputElement | null = document.querySelector(".nickname");

let user: User;

successComment?.addEventListener("click", createComment);

comment?.addEventListener("input", activateButton);
nickname?.addEventListener("input", activateButton);

// Изменение состояния кнопки при вводе комментария и никнейма
function activateButton() {
  const commentText: HTMLInputElement = <HTMLInputElement>comment;
  const nicknameText: HTMLInputElement = <HTMLInputElement>nickname;

  // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
  if (
    commentText.value.trim() &&
    nicknameText.value.trim().length >= 4 &&
    successComment
  ) {
    successComment.classList.add("active-button");
    user = new User(nicknameText.value.trim());
  } else if (successComment) {
    successComment.classList.remove("active-button");
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

    newComment.classList.add("comment");

    const currentDate = CommentBlock.getDate();

    newComment.innerHTML = `
    <div class="avatar">
      <img src="" alt="Avatar"/>
    </div>
    <div class="comment-card">
      <div class="comment-nickname-date">
        <p class="comment-nickname">${CommentBlock.getUser().toString()}</p>
        <p class="comment-date">${currentDate.getDate()}.${currentDate.getMonth()} ${currentDate.getHours()}:${currentDate.getMinutes()}</p>
      </div>
      <div class="comment-text">
      ${CommentBlock.toString()}
      </div>
      <div class="comment-reaction">
        <p>Ответить</p>
        <p>В избранное</p>
        <p>Рейтинг</p>
      </div>
    </div>
    `;

    commentContainer?.appendChild(newComment);
    successComment?.classList.remove("active-button");
    comment.value = ""; // Стирания прошлого текста
  }
}
