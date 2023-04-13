<script>
  import Answer from './Answer.svelte';
  import Equis from './Equis.svelte';

  import { pregunta } from '../helpers/preguntas';

  const { question, answers } = pregunta;
  const showX = [false, false, false]

</script>

<p class="pregunta">{question}</p>
<div class="board">
  {#each answers as answer}
    <Answer props={answer} />
  {/each}
</div>
<div class="equis-container">
  {#each showX as item}
     <Equis text={item}/>
  {/each}
</div>

<style>
  .pregunta {
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
  }
</style>