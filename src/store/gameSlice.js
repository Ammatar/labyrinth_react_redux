import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['', '', '', '', '', '', '', '', ''],
  start: 0,
  end: 0,
  steps: [],
};

const generateStep = (prev) => {
  let possibleSteps;
  switch (prev) {
    case 0:
      possibleSteps = [
        { mod: 3, direction: 'down' },
        { mod: 1, direction: 'right' },
      ];
      break;
    case 1:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: 3, direction: 'down' },
        { mod: 1, direction: 'right' },
      ];
      break;
    case 2:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: 3, direction: 'down' },
      ];
      break;
    case 3:
      possibleSteps = [
        { mod: -3, direction: 'top' },
        { mod: 1, direction: 'right' },
        { mod: 3, direction: 'down' },
      ];
      break;
    case 4:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: -3, direction: 'top' },
        { mod: 1, direction: 'right' },
        { mod: 3, direction: 'down' },
      ];
      break;
    case 5:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: -3, direction: 'top' },
        { mod: 3, direction: 'down' },
      ];
      break;
    case 6:
      possibleSteps = [
        { mod: 1, direction: 'right' },
        { mod: -3, direction: 'top' },
      ];
      break;
    case 7:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: -3, direction: 'top' },
        { mod: 1, direction: 'right' },
      ];
      break;
    case 8:
      possibleSteps = [
        { mod: -1, direction: 'left' },
        { mod: -3, direction: 'top' },
      ];
      break;
    default:
      break;
  }
  let step = possibleSteps[Math.floor(Math.random() * possibleSteps.length)];
  step.mod = prev + step.mod;
  return step;
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    init: (state) => {
      state.start = Math.floor(Math.random() * 9);
    },
    steps: (state) => {
      state.steps = [];
      state.end = state.start;
      for (let i = 0; i < 10; i++) {
        let step = generateStep(state.end);
        state.end = step.mod;
        state.steps.push(step.direction);
      }
    },
  },
});

export const { init, steps } = gameSlice.actions;

export default gameSlice.reducer;
