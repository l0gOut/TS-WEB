import CommentBlog from "./commentBlog.js";
import User from "./user.js";
const comment = document.querySelector(".comment-block");
const successComment = document.querySelector(".success-comment");
const commentContainer = document.querySelector(".comment-container");
const preAvatar = document.querySelector(".comment-avatar");
const symbolsChanged = document.querySelector(".max-symbols");
const nickname = document.querySelector(".nickname");
let user;
successComment === null || successComment === void 0 ? void 0 : successComment.addEventListener("click", createComment);
comment === null || comment === void 0 ? void 0 : comment.addEventListener("input", () => {
    if (comment.value.length >= 1 &&
        comment.value.length <= 1000 &&
        symbolsChanged) {
        symbolsChanged.textContent = `${comment.value.length}/1000`;
        symbolsChanged.classList.remove("symbols-red");
    }
    else if (comment.value.length > 1000 && symbolsChanged) {
        symbolsChanged.textContent = `${comment.value.length}/1000 Слишком длинное сообщение`;
        symbolsChanged.classList.add("symbols-red");
    }
    else if (comment.value.length === 0 && symbolsChanged) {
        symbolsChanged.textContent = "Макс. 1000 символов";
    }
    activateButton();
});
nickname === null || nickname === void 0 ? void 0 : nickname.addEventListener("input", activateButton);
// Изменение состояния кнопки при вводе комментария и никнейма
function activateButton() {
    const commentText = comment;
    const nicknameText = nickname;
    // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
    if (commentText.value.length >= 1 &&
        commentText.value.length <= 1000 &&
        nicknameText.value.trim().length >= 4 &&
        successComment &&
        preAvatar) {
        fetch(`https://picsum.photos/seed/${nicknameText.value.trim()}/200`).then(response => {
            if (preAvatar)
                preAvatar.src = response.url;
        });
        successComment.classList.add("active-button");
        user = new User(nicknameText.value.trim(), preAvatar.src);
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
      <img class="comment-avatar" src="${CommentBlock.getUser().getAvatar()}" alt="Avatar"/>
    </div>
    <div class="comment-card">
      <div class="comment-nickname-date">
        <p class="comment-nickname">${CommentBlock.getUser().toString()}</p>
        <p class="comment-date">${currentDate.getDate() < 10
            ? "0" + currentDate.getDate()
            : currentDate.getDate()}.${currentDate.getMonth() < 10
            ? "0" + currentDate.getMonth()
            : currentDate.getMonth()} ${currentDate.getHours()}:${currentDate.getMinutes()}</p>
      </div>
      <div class="comment-text">
      ${CommentBlock.toString()}
      </div>
      <div class="comment-reaction">
        <button class="reaction-reply"><img class="reply-pic" src="./image/reply.png">Ответить</button>
        <button class="reaction-feature">&#10084; В избранное</button>
        <div class="reaction-rating">
          <button class="rating-down rating-down-${CommentBlock.getId()}">&#8722;</button>
          <p class="current-rating current-rating-${CommentBlock.getId()}">0</p>
          <button class="rating-up rating-up-${CommentBlock.getId()}">+</button>
        </div>
      </div>
    </div>
    `;
        commentContainer === null || commentContainer === void 0 ? void 0 : commentContainer.appendChild(newComment);
        successComment === null || successComment === void 0 ? void 0 : successComment.classList.remove("active-button");
        comment.value = ""; // Стирания прошлого текста
        if (symbolsChanged)
            symbolsChanged.textContent = "Макс. 1000 символов";
        const currentRating = document.querySelector(`.current-rating-${CommentBlock.getId()}`);
        const ratingMinus = document.querySelector(`.rating-down-${CommentBlock.getId()}`);
        const ratingPlus = document.querySelector(`.rating-up-${CommentBlock.getId()}`);
        ratingMinus === null || ratingMinus === void 0 ? void 0 : ratingMinus.addEventListener("click", () => {
            if (currentRating)
                currentRating.textContent = `${currentRating.textContent - 1}`;
        });
        ratingPlus === null || ratingPlus === void 0 ? void 0 : ratingPlus.addEventListener("click", () => {
            if (currentRating) {
                currentRating.textContent = Number(currentRating.textContent) + 1 + "";
            }
        });
    }
}
