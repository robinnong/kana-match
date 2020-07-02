const grade = document.querySelector(".grade");
const message = document.querySelector(".finalMessage");

const assignGrade = (finalScore) => {
    if (finalScore === 0) {
        grade.innerText = "F";
        message.innerText = "Keep Studying! 😢";
    } else if (finalScore > 0 && finalScore < 15) {
        message.innerText = "Keep Studying! 😢";
        grade.innerText = "D";
    } else if (finalScore > 15 && finalScore < 21) {
        message.innerText = "Keep Studying! 😁";
        grade.innerText = "C";
    } else if (finalScore > 21 && finalScore < 24) {
        message.innerText = "Good Job! 😄";
        grade.innerText = "B";
    } else if (finalScore > 24 && finalScore < 30) {
        message.innerText = "Excellent! 😄";
        grade.innerText = "A";
    } else if (finalScore === 100) {
        message.innerText = "Perfect! 🎉";
        grade.innerText = "A+";
    }
}

export default assignGrade;