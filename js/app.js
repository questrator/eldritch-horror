import {difficultiesBlock, ancientsBlock, ancient, difficulty, start, spread, next} from "./spread.js";

const greetingContinue = document.querySelector(".continue");
greetingContinue.addEventListener("click", loadPathScene);
const statusBar = document.querySelector(".status-bar");
const player = document.querySelector(".player");
const mute = document.querySelector(".mute");
mute.addEventListener("click", muteToggle);
const greeting = document.querySelector(".greeting");
const mainPath = document.querySelector("main.path");
const mainSpread = document.querySelector("main.spread");
difficultiesBlock.addEventListener("click", chooseDifficulty);
const difficultyLevelData = document.querySelector(".difficultyLevelData");
ancientsBlock.addEventListener("click", chooseAncient);
const ancientNameData = document.querySelector(".ancientNameData");
const cardsLeftData = document.querySelector(".cardsLeftData");
next.addEventListener("click", countCards);
[playGroan, countCards, loadSpreadScene].forEach(e => start.addEventListener("click", e));

function muteToggle(event) {
    player.muted = !player.muted;
    mute.classList.toggle("muted");
}

function loadPathScene() {
    player.volume = 0.1;
    player.play();
    let audioFadeIn = setInterval(() => {
        player.volume += 0.01;
        if (player.volume >= 0.4) clearInterval(audioFadeIn);
    }, 50);
    greeting.style.opacity = 0;
    const greetingFadeOut = setTimeout(() => greeting.style.display = "none", 1100);
    mainPath.style.display = "flex";
    const mainFadeIn = setTimeout(() => mainPath.style.opacity = 1, 1100);
    statusBar.style.top = 0;
    statusBar.style.opacity = 1;
}

function chooseDifficulty(event) {    
    difficultyLevelData.textContent = difficulty.name;
    if (ancient) start.disabled = false;
}
function chooseAncient(event) {    
    ancientNameData.textContent = ancient.name;
    if (difficulty) start.disabled = false;
}

function playGroan() {
    const groan = new Audio();
    groan.src = "./assets/audio/ancient-groan.mp3";
    groan.volume = 1;
    groan.play();
}

function countCards() {
    cardsLeftData.textContent = spread.stageCards.reduce((r, e) => r + e, 0);
}

function loadSpreadScene() {
    mainPath.style.opacity = 0;
    const mainPathFadeOut = setTimeout(() => mainPath.style.display = "none", 1100);
    mainSpread.style.display = "flex";
    const mainSpreadFadeIn = setTimeout(() => mainSpread.style.opacity = 1, 1100);
}