import CommentBlog from "./commentBlog.js";
import User from "./user.js";

const comment: HTMLInputElement | null =
  document.querySelector(".comment-block");
const successComment: HTMLElement | null =
  document.querySelector(".success-comment");
const commentContainer: HTMLElement | null =
  document.querySelector(".comment-container");
const preAvatar: HTMLImageElement | null =
  document.querySelector(".comment-avatar");
const symbolsChanged: HTMLElement | null =
  document.querySelector(".max-symbols");
const nickname: HTMLInputElement | null = document.querySelector(".nickname");

let user: User;

successComment?.addEventListener("click", createComment);

comment?.addEventListener("input", () => {
  if (
    comment.value.length >= 1 &&
    comment.value.length <= 1000 &&
    symbolsChanged
  ) {
    symbolsChanged.textContent = `${comment.value.length}/1000`;
    symbolsChanged.classList.remove("symbols-red");
  } else if (comment.value.length > 1000 && symbolsChanged) {
    symbolsChanged.textContent = `${comment.value.length}/1000 Слишком длинное сообщение`;
    symbolsChanged.classList.add("symbols-red");
  } else if (comment.value.length === 0 && symbolsChanged) {
    symbolsChanged.textContent = "Макс. 1000 символов";
  }

  activateButton();
});

nickname?.addEventListener("input", activateButton);

// Изменение состояния кнопки при вводе комментария и никнейма
function activateButton() {
  const commentText: HTMLInputElement = <HTMLInputElement>comment;
  const nicknameText: HTMLInputElement = <HTMLInputElement>nickname;

  // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
  if (
    commentText.value.length >= 1 &&
    commentText.value.length <= 1000 &&
    nicknameText.value.trim().length >= 4 &&
    successComment &&
    preAvatar
  ) {
    fetch(`https://picsum.photos/seed/${nicknameText.value.trim()}/200`).then(
      response => {
        if (preAvatar) preAvatar.src = response.url;
      }
    );
    successComment.classList.add("active-button");
    user = new User(nicknameText.value.trim(), preAvatar.src);
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
      <img class="comment-avatar" src="${CommentBlock.getUser().getAvatar()}" alt="Avatar"/>
    </div>
    <div class="comment-card">
      <div class="comment-nickname-date">
        <p class="comment-nickname">${CommentBlock.getUser().toString()}</p>
        <p class="comment-date">${
          currentDate.getDate() < 10
            ? "0" + currentDate.getDate()
            : currentDate.getDate()
        }.${
      currentDate.getMonth() < 10
        ? "0" + currentDate.getMonth()
        : currentDate.getMonth()
    } ${currentDate.getHours()}:${currentDate.getMinutes()}</p>
      </div>
      <div class="comment-text">
      ${CommentBlock.toString()}
      </div>
      <div class="comment-reaction">
        <button class="reaction-reply"><img class="reply-pic" src="./image/reply.png">Ответить</button>
        <button class="reaction-feature">&#10084; В избранное</button>
        <button class="reaction-rating">0</button>
      </div>
    </div>
    `;

    commentContainer?.appendChild(newComment);
    successComment?.classList.remove("active-button");
    comment.value = ""; // Стирания прошлого текста
  }
}
