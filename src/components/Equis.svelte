<script>
  export let text = false;

  const toggleClick = () => (text = !text);
</script>

<div class="equis" on:click={toggleClick} on:keydown={toggleClick}>
  {text ? 'x' : ''}
</div>
