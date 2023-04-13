<script>
  import { scoreGame } from '../stores/store'
  import { scoreTeam2 } from '../stores/storeTeam2';

  let viewGreenBox = false;

  const turno = () => {
    viewGreenBox = !viewGreenBox;
    if( viewGreenBox ) scoreTeam2.setScore($scoreGame)
    // if( !viewGreenBox ) scoreTeam2.setScore(0)
  };
</script>

<div class="team2">
  <h2>Team 2</h2>
  <div
    class={viewGreenBox ? 'box turn cursor' : 'box cursor'}
    on:click={turno}
    on:keydown={turno}
  >
    <h3 id="score-team2" class="score-points">{$scoreTeam2}</h3>
  </div>
</div>

<style>
  .team2,
  h2 {
    cursor: auto;
  }
</style>
