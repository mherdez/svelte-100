<script>
  import Answer from './Answer.svelte';
  import Equis from './Equis.svelte';
  import { preguntas } from '../helpers/preguntas';

  const showX = [false, false, false];
  const arrLength = preguntas.length;
  const randomQuestion = () => preguntas[Math.floor(Math.random() * arrLength)];
  const pelo = 1;

  const changeQuestion = () => {
    const newQuestion = randomQuestion();
    question = newQuestion.question;
    answers = newQuestion.answers;
  };

  let { question, answers } = randomQuestion();
</script>

<p class="pregunta" on:click={changeQuestion} on:keydown={changeQuestion}>
  {question}
</p>
<div class="board">
  {#each answers as { answer, points }}
    <Answer {answer} {points} />
  {/each}
</div>
<div class="equis-container">
  {#each showX as item}
    <Equis text={item} />
  {/each}
</div>

<style>
  .pregunta {
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
  }
</style>
