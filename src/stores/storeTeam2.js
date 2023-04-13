import { writable } from 'svelte/store'

const createScoreTeam2 = () => {
  const { subscribe, update } = writable(0)

  return {
    subscribe,
    setScore: (score) => {
      update(points => points + score)
    }

  }
}

export const scoreTeam2 = createScoreTeam2()
