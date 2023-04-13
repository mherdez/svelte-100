<script>
  let viewGreenBox = false;
  const turno = () => {
    viewGreenBox = !viewGreenBox;
  };
</script>

<div class="team1">
  <h2>Team 1</h2>
  <div
    on:click={turno}
    on:keydown={turno}
    class={viewGreenBox ? 'box turn cursor' : 'box cursor'}
  >
    <h3 id="score-team2" class="score-points">0</h3>
  </div>
</div>

<style>
  .team1,
  h2 {
    cursor: auto;
  }
</style>
