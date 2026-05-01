const questionInput = document.getElementById("questionInput");
const drawButton = document.getElementById("drawButton");
const savedQuestion = document.getElementById("savedQuestion");
const jar = document.getElementById("jar");
const fortuneSlip = document.getElementById("fortuneSlip");
const fortuneLevel = document.getElementById("fortuneLevel");
const fortuneMessage = document.getElementById("fortuneMessage");

const fortunes = [
  {
    level: "大吉",
    message: "Today is a good day to trust yourself. The answer may come sooner than you think."
  },
  {
    level: "大吉",
    message: "A bright path is opening. Move forward with confidence."
  },
  {
    level: "中吉",
    message: "Things are not fully clear yet, but you are moving in the right direction."
  },
  {
    level: "中吉",
    message: "Be patient. A small choice today may matter more than you expect."
  },
  {
    level: "中吉",
    message: "The result depends on how calmly you handle the next step."
  },
  {
    level: "小吉",
    message: "Go slowly. This is not a bad sign, but it asks you to be careful."
  },
  {
    level: "小吉",
    message: "Do not rush the answer. Some things need more time."
  }
];

drawButton.addEventListener("click", function () {
  const question = questionInput.value;

  if (question.trim() === "") {
    savedQuestion.textContent = "Please enter a question first.";
    return;
  }

  savedQuestion.textContent = "Your question: " + question;

  fortuneSlip.classList.add("hidden");
  jar.classList.remove("hidden");
  jar.classList.add("shake");

  drawButton.disabled = true;

  setTimeout(function () {
    jar.classList.remove("shake");
    jar.classList.add("hidden");

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    fortuneLevel.textContent = selectedFortune.level;
    fortuneMessage.textContent = selectedFortune.message;

    fortuneSlip.classList.remove("hidden");
    drawButton.disabled = false;
  }, 1500);
});