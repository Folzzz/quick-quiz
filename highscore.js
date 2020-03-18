const user = document.getElementById("user");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innertext = mostRecentScore;

user.addEventListener('keyup', () => {
    console.log(user.value);
});