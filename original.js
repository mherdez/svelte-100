// const answers = [
//   {
//     answer: 'pepitas',
//     points: 38
//   },
//   {
//     answer: 'elotes',
//     points: 25
//   },
//   {
//     answer: 'cacahuates',
//     points: 20
//   },
//   {
//     answer: 'jicama',
//     points: 15
//   },
// ]




// const showAnswer = ( answerNum ) => {
//   if( answerNum <= 0 || answerNum > 4 ) return

//   const {answer, points} = answers[answerNum-1]
//   const _answer = _(`#answer${answerNum}`)
//   const _points = _(`#points${answerNum}`)

//   _answer.textContent = answer;
//   _points.classList.add('answer-points');
//   _points.textContent = points;
// }

// const hiddenAnswer = ( answerNum ) => {
//   if( answerNum <= 0 || answerNum > 4 ) return

//   const _answer = _(`#answer${answerNum}`)
//   const _points = _(`#points${answerNum}`)

//   _answer.textContent = null;
//   _points.classList.remove('answer-points');
//   _points.textContent = null;
// }

// const _ = selector => document.querySelector(selector)


// const _scoreGame  = _('#score-game')
// const _scoreTeam1 = _('#score-team1')
// const _scoreTeam2 = _('#score-team2')

// const _equis1 = _('#equis1')
// const _equis2 = _('#equis2')
// const _equis3 = _('#equis3')


// const _answers = document.querySelectorAll('.answer')


// _answers.forEach((answer, i) => {
//   answer.addEventListener('click', () => {
//     showAnswer(i+1);
//   })
// });

// _answers.forEach((answer, i) => {
//   answer.addEventListener('dblclick', () => {
//     hiddenAnswer(i+1);
//   })
// });

// // PRENDE Y APAGA EL MARCO VERDE DEL TURNO DEL EQUIPO
// // PRENDE
// const turnTeam2Text = _('.team2 > h2')
// turnTeam2Text.addEventListener('click', () => {
//   const turnTeam2 = _('.team2 > .box')
//   turnTeam2.classList.add('turn')
// })
// turnTeam2Text.addEventListener('dblclick', () => {
//   const turnTeam2 = _('.team2 > .box')
//   turnTeam2.classList.remove('turn')
// })

// // APAGA
// const turnTeam1Text = _('.team1 > h2')
// turnTeam1Text.addEventListener('click', () => {
//   const turnTeam1 = _('.team1 > .box')
//   turnTeam1.classList.add('turn')
// })
// turnTeam1Text.addEventListener('dblclick', () => {
//   const turnTeam1 = _('.team1 > .box')
//   turnTeam1.classList.remove('turn')
// })
// ------------------------------------------------------