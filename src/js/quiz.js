let currentQuestion = 0;
let score =0;

// クイズのデータを取得する
async function fetchQuizData(){ // asyncとは？
  const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
  const data = await response.json();
  return data.result;
}

// クイズの表示
function displayQuiz(quetions) {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");

  // 問題文の設定
  questionElement.textContent = questions[currentQuestion].question;

  // 回答選択肢の設定
  const answers = [...quetions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];

  // 選択肢をシャッフル
  answers.sort(()=>Math.random() - 0.5);

  answersElement.innerHTML = "";
  answers.forEach(answers =>{
    const li = document.getElementById("li");
    li.textContent = answer;
    answersElement.appendChild(li);

    li.addEventListener('click',() =>{
      if(answer === questions[currentQuestion].correct_answer){
        score++;
      }
      currentQuestion++;
      if(currentQuestion < questions.length){
        displayQuiz(questions);
      } else{
        // クイズ終了時のスコア表示
        questionElement.textContent = "クイズ終了！";
        document.getElementById("score").textContent = `スコア: ${score} / ${questions.length}`;
        document.getElementById("next").style.display = 'none';
      }
    });
  });
}


// 最初にクイズのデータを取得し、表示
fetchQuizData().then(question =>{
  displayQuiz(question);
});