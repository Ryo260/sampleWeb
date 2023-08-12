let currentQuestion = 0;
let score = 0;
let questions = [];

// クイズのデータを取得する
async function fetchQuizData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const data = await response.json();
    return data.results;
}

// クイズの表示
function displayQuiz() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    // 問題文の設定
    questionElement.textContent = questions[currentQuestion].question;

    // 回答選択肢の設定
    const answers = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
    // 選択肢をシャッフル
    answers.sort(() => Math.random() - 0.5);

    answersElement.innerHTML = "";
    answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        answersElement.appendChild(li);

        li.addEventListener('click', () => {
            if (answer === questions[currentQuestion].correct_answer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuiz();
            } else {
                // クイズ終了時のスコア表示
                questionElement.textContent = "クイズ終了！";
                document.getElementById('score').textContent = `スコア: ${score} / ${questions.length}`;
                document.getElementById('next').style.display = 'none';
            }
        });
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuiz();
    } else {
        // クイズ終了時のスコア表示
        document.getElementById('question').textContent = "クイズ終了！";
        document.getElementById('score').textContent = `スコア: ${score} / ${questions.length}`;
        document.getElementById('next').style.display = 'none';
    }
});

// 最初にクイズのデータを取得し、表示
fetchQuizData().then(fetchedQuestions => {
    questions = fetchedQuestions;
    displayQuiz();
});
