<script>
  let viewGreenBox = false;
  const turno = () => {
    viewGreenBox = !viewGreenBox;
  };
</script>

<div class="team2">
  <h2 on:click={turno} on:keydown={turno}>Team 2</h2>
  <div class={viewGreenBox ? 'box turn' : 'box'}>
    <h3 id="score-team2" class="score-points">0</h3>
  </div>
</div>
