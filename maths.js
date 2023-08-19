var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
  const n1 = Math.round(Math.random() * 4);
  document.getElementById("n1").innerHTML = n1;

  const n2 = Math.round(Math.random() * 4);
  document.getElementById("n2").innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer() {
  const prediction = predictImage();

  if (prediction == answer) {
    score++;
    if (score <= 6) {
      backgroundImages.push(`url('images/background${score}.svg')`);
    } else {
      alert("The limit of correct answer has been reached!");
      score = 0;
      backgroundImages = [];
    }

    document.body.style.backgroundImage = backgroundImages;
  } else {
    if (score != 0) {
      score--;
    }
    alert(
      "OOPS! Check your calculation and try writing the number neater next time."
    );
    setTimeout(function () {
      backgroundImages.pop();
      document.body.style.backgroundImage = backgroundImages;
    }, 1000);
  }
}
