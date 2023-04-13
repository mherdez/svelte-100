import { writable } from 'svelte/store'

const createScoreGame = () => {
  const { subscribe, update } = writable(0)

  return {
    subscribe,
    addPointsScore: (points) => {
      update(score => score + points)
    },
    subtractPointsScore: (points) => {
      update(score => score - points)
    }

  }
}

export const scoreGame = createScoreGame()
