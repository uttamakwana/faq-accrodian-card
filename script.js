const questions = document.querySelectorAll(".question-text");

function showAnswer(e) {
  if (e.target.nodeName === "SPAN" || e.target.nodeName === "IMG") {
    e.target.parentElement.classList.add("active");
  } else {
    e.target.classList.toggle("active");
  }
}

questions.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
