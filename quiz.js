document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = ["a", "a", "b", "a", "a", "b", "a", "a", "a", "b", "a", "a", "a", "a", "b"];
    const quizForm = document.querySelector("#quizForm");
    const resultDisplay = document.q
    ("#resultDisplay");
    const solutionDisplay = document.createElement("div");

    solutionDisplay.style.display = "none";
    solutionDisplay.style.marginTop = "20px";
    quizForm.parentNode.appendChild(solutionDisplay);

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let score = 0;
        const userAnswers = new FormData(quizForm);
        const solutions = [];

        correctAnswers.forEach((correct, index) => {
            const userAnswer = userAnswers.get(`q${index + 1}`);
            if (userAnswer === correct) {
                score++;
                solutions.push(`Question ${index + 1}: ✅ Correct (Réponse: ${correct.toUpperCase()})`);
            } else {
                solutions.push(`Question ${index + 1}: ❌ Incorrect (Votre réponse: ${userAnswer ? userAnswer.toUpperCase() : "aucune"}, Correcte: ${correct.toUpperCase()})`);
            }
        });

        // Afficher une alerte avec le score
        alert(`Votre score est de ${score}/${correctAnswers.length}. ${score > 10 ? "Bravo ! 🎉" : "Vous pouvez faire mieux. 💪"}`);

        resultDisplay.textContent = `Votre score est de ${score}/${correctAnswers.length}.`;
        resultDisplay.style.display = "block";

        solutionDisplay.innerHTML = `<h3>Solutions :</h3><ul>${solutions.map(sol => `<li>${sol}</li>`).join('')}</ul>`;
        solutionDisplay.style.display = "block";
    });
});


