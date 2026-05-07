const questionInput = document.getElementById("questionInput");
const drawButton = document.getElementById("drawButton");
const savedQuestion = document.getElementById("savedQuestion");
const jar = document.getElementById("jar");
const fortuneSlip = document.getElementById("fortuneSlip");
const fortuneLevel = document.getElementById("fortuneLevel");
const fortuneMessage = document.getElementById("fortuneMessage");

let fortunes = [];

// Load JSON data
fetch("fortunes.json")
  .then(response => response.json())
  .then(data => {
    fortunes = data;
    console.log("Fortunes loaded!");
  })
  .catch(error => {
    console.error("Error loading fortunes:", error);
  });

drawButton.addEventListener("click", function () {
  const question = questionInput.value;

  if (question.trim() === "") {
    savedQuestion.textContent = "Please enter a question first.";
    return;
  }

  savedQuestion.textContent = "Your question: " + question;

  // Reset display
  fortuneSlip.classList.add("hidden");

  jar.classList.remove("hidden");
  jar.classList.add("shake");

  drawButton.disabled = true;

  // Shake animation time
  setTimeout(function () {

    jar.classList.remove("shake");
    jar.classList.add("hidden");

    // Random fortune
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    // Show fortune
    fortuneLevel.textContent = selectedFortune.level;
    fortuneMessage.textContent = selectedFortune.message;

    fortuneSlip.classList.remove("hidden");

    drawButton.disabled = false;

  }, 1500);
});