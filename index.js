function highestScore() {
    let score = [];
    for(let i=0;i<5;i++){
        score[i] = parseInt(prompt("Enter a number: "));
    }

        let max = score[0];
  for (let i = 1; i < 5; i++) {
    if (max < score[i]) {
      max = score[i];
    }
  }
  return max;
}
console.log(highestScore()); 
