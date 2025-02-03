function StudentScores(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum;
  }
  
  let studentScores = [10, 20, 30];
  let totalScore = StudentScores(studentScores);
  console.log("ผลรวมคะแนนนักศึกษา:", totalScore);