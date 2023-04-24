import sudokuTimer from "./components/sudokuTimer.js";
import sudokuControls from "./components/sudokuControls.js";
import sudokuGameGrid from "./components/sudokuGameGrid.js";

const app = document.getElementById("app");

// game wraper
const sudokuWraper = document.createElement("div");
sudokuWraper.classList.add("sudoku-wraper");
app.appendChild(sudokuWraper);

// loading screen
const loadingScreen = document.createElement("div");
loadingScreen.classList.add("loading-screen");
loadingScreen.id = "loading-screen";
sudokuWraper.appendChild(loadingScreen);


// info section
sudokuWraper.appendChild(sudokuTimer);

// sudoku game wraper
const sudokuGameWraper = document.createElement("div");
sudokuGameWraper.classList.add("sudoku-game-wraper");
sudokuGameWraper.id = "sudoku-game-wraper";
sudokuWraper.appendChild(sudokuGameWraper);

// sudoku game
sudokuGameWraper.appendChild(sudokuGameGrid);


// controlls
sudokuGameWraper.appendChild(sudokuControls)

// create a funtion to call all creates funtions


// create a funtion to generate the layout
// create function that takes an arr with the append order