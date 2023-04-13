<script>
    import {scoreGame} from '../stores/store';

  export let answer, points;

  let viewAnswer = false;
  const showAnswer = () => {
    viewAnswer = !viewAnswer
    if( viewAnswer ) scoreGame.addPointsScore( points )
    if( !viewAnswer ) scoreGame.subtractPointsScore( points )
  };
</script>

<div class="answer" on:click={showAnswer} on:keydown={showAnswer}>
  <div class="answer-text">
    {viewAnswer ? answer : ''}
  </div>
  <div class={viewAnswer ? 'answer-points' : ''}>
    {viewAnswer ? points : ''}
  </div>
</div>
