import CommentBlog from "./commentBlog.js";
import User from "./user.js";
const comment = document.querySelector(".comment-block");
const successComment = document.querySelector(".success-comment");
const commentContainer = document.querySelector(".comment-container");
const signUser = document.querySelector(".sign-user");
const signButton = document.querySelector(".sign-button");
const userName = document.querySelector(".user-name");
let user;
signButton === null || signButton === void 0 ? void 0 : signButton.addEventListener("click", signOrExit);
successComment === null || successComment === void 0 ? void 0 : successComment.addEventListener("click", createComment);
// Изменение состояния кнопки при вводе текста
comment === null || comment === void 0 ? void 0 : comment.addEventListener("input", e => {
    const commentText = e.target;
    // Если есть текст в поле, то можно оставить комментарий, иначе кнопка заблокируется
    if (commentText.value.trim() && successComment) {
        successComment.classList.add("active-button");
    }
    else if (successComment) {
        successComment.classList.remove("active-button");
    }
});
// Заход и выход пользователя через меню сверху
function signOrExit() {
    if ((userName === null || userName === void 0 ? void 0 : userName.classList.contains("active")) && signButton && signUser) {
        userName.classList.remove("active");
        signUser.classList.remove("hide");
        signButton.textContent = "Войти";
    }
    else if (userName && signButton && (signUser === null || signUser === void 0 ? void 0 : signUser.value.trim()) && comment) {
        userName.textContent = signUser.value.trim();
        user = new User(signUser.value.trim());
        userName.classList.add("active");
        signUser.classList.add("hide");
        signButton.textContent = "Выйти";
        signUser.value = "";
    }
}
// Создание комментария через text-area
function createComment() {
    if (comment === null || comment === void 0 ? void 0 : comment.value.trim()) {
        const CommentBlock = new CommentBlog(user, comment.value.trim());
        const newComment = document.createElement("div");
        newComment.innerHTML = `${CommentBlock.getUser().toString()}, оставил комментарий \n ${CommentBlock.toString()}`;
        commentContainer === null || commentContainer === void 0 ? void 0 : commentContainer.appendChild(newComment);
        successComment === null || successComment === void 0 ? void 0 : successComment.classList.remove("active");
        comment.value = ""; // Стирания прошлого текста
    }
}
