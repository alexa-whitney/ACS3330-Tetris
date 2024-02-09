import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from '../utils';

export const gameSlice = createSlice({
    name: 'game',
    initialState: defaultState(),
    reducers: {
        pause: () => {},
        resume: () => {},
        moveLeft: () => {},
        moveRight: () => {},
        moveDown: () => {},
        rotate: () => {},
        gameOver: () => {},
        restart: () => {}
    },
})

// Test 1 ScoreBoard.js
// export const gameSlice = createSlice({
//   name: 'game',
//   initialState: {
//     score: 23000,
//     isRunning: true,
//     gameOver: false,
//   },
//   reducers: {
//     pause: (state) => {
//       state.isRunning = false;
//     },
//     resume: (state) => {
//       state.isRunning = true;
//     },
//     restart: (state) => {
//       // Reset the state to its initial values
//       state.score = 0;
//       state.isRunning = true;
//       state.gameOver = false;
//     },

//   },
// });

// Test 2 ScoreBoard.js
// export const gameSlice = createSlice({
//   name: 'game',
//   initialState: {
//     score: 560000,
//     isRunning: false,
//     gameOver: false,
//   },
//   reducers: {
//     pause: (state) => {
//       state.isRunning = false;
//     },
//     resume: (state) => {
//       state.isRunning = true;
//     },
//     restart: (state) => {
//       // Reset the state to its initial values
//       state.score = 0;
//       state.isRunning = true;
//       state.gameOver = false;
//     },

//   },
// });

// Test 3 ScoreBoard.js
// export const gameSlice = createSlice({
//   name: 'game',
//   initialState: {
//     score: 420,
//     isRunning: false,
//     gameOver: true,
//   },
//   reducers: {
//     pause: (state) => {
//       state.isRunning = false;
//     },
//     resume: (state) => {
//       state.isRunning = true;
//     },
//     restart: (state) => {
//       // Reset the state to its initial values
//       state.score = 0;
//       state.isRunning = true;
//       state.gameOver = false;
//     },

//   },
// });


// Action creators are generated for each case reducer function
export const {
	moveLeft,
	moveRight,
	moveDown,
	rotate,
	pause,
	resume,
	gameOver,
	restart } = gameSlice.actions

export default gameSlice.reducer