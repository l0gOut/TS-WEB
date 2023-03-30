import CommentBlog from "./commentBlog.js";
import User from "./user.js";
const comment = document.querySelector(".comment-block");
const successComment = document.querySelector(".success-comment");
const commentContainer = document.querySelector(".comment-container");
const nickname = document.querySelector(".nickname");
let user;
successComment === null || successComment === void 0 ? void 0 : successComment.addEventListener("click", createComment);
comment === null || comment === void 0 ? void 0 : comment.addEventListener("input", activateButton);
nickname === null || nickname === void 0 ? void 0 : nickname.addEventListener("input", activateButton);
// Изменение состояния кнопки при вводе комментария и никнейма
function activateButton() {
    const commentText = comment;
    const nicknameText = nickname;
    // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
    if (commentText.value.trim() &&
        nicknameText.value.trim().length >= 4 &&
        successComment) {
        successComment.classList.add("active-button");
        user = new User(nicknameText.value.trim());
    }
    else if (successComment) {
        successComment.classList.remove("active-button");
    }
}
// Создание комментария через text-area
function createComment() {
    if (comment === null || comment === void 0 ? void 0 : comment.value.trim()) {
        const CommentBlock = new CommentBlog(user, comment.value.trim());
        const newComment = document.createElement("div");
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
        commentContainer === null || commentContainer === void 0 ? void 0 : commentContainer.appendChild(newComment);
        successComment === null || successComment === void 0 ? void 0 : successComment.classList.remove("active-button");
        comment.value = ""; // Стирания прошлого текста
    }
}
