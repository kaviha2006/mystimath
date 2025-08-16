let currentPuzzle = 0;
let wrongAttempts = 0;

function startGame() {
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  loadPuzzle();
}

function loadPuzzle() {
  const puzzle = puzzles[currentPuzzle];
  document.getElementById("puzzle-title").textContent = `Puzzle #${puzzle.id}`;
  document.getElementById("equations").innerHTML = "";
  document.getElementById("inputs").innerHTML = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("show-answer-btn").style.display = "none";
  wrongAttempts = 0;

  // Display all equations
  puzzle.equations.forEach((eq, index) => {
    const resultDisplay = eq.result === null ? "❓" : eq.result;
    document.getElementById("equations").innerHTML += `
      <div>${eq.left.join(" + ")} = ${resultDisplay}</div>
    `;

    // Only create input for the unknown equation
    if (eq.result === null) {
      const input = document.createElement("input");
      input.type = "number";
      input.id = `unknown-${index}`;
      input.placeholder = "?";
      input.style.marginTop = "10px";
      document.getElementById("inputs").appendChild(input);
    }
  });
}

function checkAnswer() {
  const puzzle = puzzles[currentPuzzle];
  const unknownEqIndex = puzzle.equations.findIndex(eq => eq.result === null);
  const userValue = parseInt(document.getElementById(`unknown-${unknownEqIndex}`).value);

  // Calculate expected sum from solution
  const expected = puzzle.equations[unknownEqIndex].left
    .reduce((sum, emoji) => sum + puzzle.solution[emoji], 0);

  const feedback = document.getElementById("feedback");

  if (userValue === expected) {
    feedback.textContent = `✅ Correct! Final result: ${expected}`;
    document.getElementById("next-btn").style.display = "inline-block";
  } else {
    wrongAttempts++;
    feedback.textContent = `❌ Try again.`;
    if (wrongAttempts >= 2) {
      document.getElementById("show-answer-btn").style.display = "inline-block";
    }
  }
}

function showAnswer() {
  const puzzle = puzzles[currentPuzzle];
  const unknownEqIndex = puzzle.equations.findIndex(eq => eq.result === null);
  const solutionSum = puzzle.equations[unknownEqIndex].left
    .reduce((sum, emoji) => sum + puzzle.solution[emoji], 0);

  document.getElementById(`unknown-${unknownEqIndex}`).value = solutionSum;
  document.getElementById("feedback").textContent = `🧠 Answer: ${solutionSum}`;
  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("show-answer-btn").style.display = "none";
}

function nextPuzzle() {
  currentPuzzle++;
  if (currentPuzzle >= puzzles.length) {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
  } else {
    loadPuzzle();
  }
}

function retryGame() {
  currentPuzzle = 0;
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
}
