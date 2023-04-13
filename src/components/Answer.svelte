<script>
  export let answer, points;

  let viewAnswer = false;
  const showAnswer = () => (viewAnswer = !viewAnswer);
</script>

<div class="answer" on:click={showAnswer} on:keydown={showAnswer}>
  <div class="answer-text">
    {viewAnswer ? answer : ''}
  </div>
  <div class={viewAnswer ? 'answer-points' : ''}>
    {viewAnswer ? points : ''}
  </div>
</div>
