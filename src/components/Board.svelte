<script>
  import Answer from './Answer.svelte';
  import Equis from './Equis.svelte';
  import { preguntas } from '../helpers/preguntas';

  const showX = [false, false, false];
  const randomQuestion = () => preguntas[Math.floor(Math.random() * 3)]

  let { question, answers } = randomQuestion()

  const changeQuestion = () => {
    const newQuestion = randomQuestion()
    question = newQuestion.question;
    answers = newQuestion.answers;
  };
</script>

<p class="pregunta" on:click={changeQuestion} on:keydown={changeQuestion}>
  {question}
</p>
<div class="board">
  {#each answers as { answer, points }}
    <Answer answer={answer} points={points} />
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
