import './style.css'
//score counter elements
const counterElement=document.getElementById("score-counter");
const scorePerSecondElement=document.getElementById('score-per-second');
const scorePerClickElement = document.getElementById('score-per-click');
//upgrade elements
const clickerButton = document.getElementById('button-clicker');
const upgradeOneButton=document.getElementById('upgrade-1-button');
const upgradeTwoButton=document.getElementById('upgrade-2-button');
const upgradeThreeButton=document.getElementById('upgrade-3-button');
const upgradeFourButton=document.getElementById('upgrade-4-button');
const upgradeFiveButton = document.getElementById("upgrade-5-button");
const upgradeOneLevelElement= document.getElementById('upgrade-1-level');
const upgradeTwoLevelElement= document.getElementById('upgrade-2-level');
const upgradeThreeLevelElement= document.getElementById('upgrade-3-level');
const upgradeFourLevelElement= document.getElementById('upgrade-4-level');
const upgradeFiveLevelElement = document.getElementById('upgrade-5-level');
//score state:
let counter=0;
let scorePerSecond=0;
let scorePerClick = 0;
let upgradeOneLevel=0;
let upgradeOneCost=15;
let upgradeOneValue=1;
let upgradeTwoLevel=0;
let upgradeTwoCost=50;
let upgradeTwoValue = 5;
let upgradeThreeLevel = 0;
let upgradeThreeCost=150;
let upgradeThreeValue=10;
let upgradeFourLevel=0;
let upgradeFourCost=300;
let upgradeFourValue =20;
let upgradeFiveLevel=0;
let upgradeFiveCost=1000;
let upgradeFiveValue=30;
//EventListeners
clickerButton.addEventListener('click', ()=> {
    counter==1;
    updateGame();
});
upgradeOneButton.addEventListener('click', ()=> {
    counter -= upgradeOneCost;
    upgradeOneLevel+=1;
    updateGame();
})
upgradeTwoButton.addEventListener('click', ()=> {
    counter -= upgradeTwoCost;
    upgradeTwoLevel+=1;
    updateGame();
})
upgradeThreeButton.addEventListener('click', ()=>{
    counter-=upgradeThreeCost;
    upgradeThreeLevel+=1;
    updateGame();
})
upgradeFourButton.addEventListener('click', ()=> {
    counter -= upgradeFourCost;
    upgradeFourLevel+=1;
    updateGame();
})
upgradeFiveButton.addEventListener('click', ()=> {
    counter-=upgradeFiveCost;
    upgradeFiveLevel+=1;
    updateGame();
})

function enableButton(button) {
    button.removeAtribute('disabled');
}

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
//
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))
