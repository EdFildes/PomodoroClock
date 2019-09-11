import React from 'react';
import './css/App.css';
import './css/bulma.css';

function App() {
  return (
    <div id="container" class="container">

      <div id="secondaryContainerA" class="secondaryContainerA">

        <div id="studyTimerContainer" class="timerContainer">
          <h1 class="timerTitle content is-large">Study</h1>
          <input id="studyTimer" type="time" class="input is-primary is-large" value="10:00"></input>
          <div id="buttonContainer" class="buttonContainer">
            <button id="incStudyTimer" class="button is-primary">+5 mins</button>
            <button id="decStudyTimer" class="button is-primary">-5 mins</button>
          </div>
        </div>
      

        <div id="studyTimerContainer" class="timerContainer">
          <h1 class="timerTitle content is-large">Break</h1>
          <input id="breakTimer" type="time" class="input is-primary is-large" value="05:00"></input>
          <div id="buttonContainer" class="buttonContainer">
            <button id="incBreakTimer" class="button is-primary">+5 mins</button>
            <button id="decBreakTimer" class="button is-primary">-5 mins</button>
          </div>
        </div>
      </div>

      <div id="secondaryContainerB" class="secondaryContainerB">
        <time id="timer" datetime="15:00" class="output content is-large">15:00</time>

        <div class="radioContainer">
          <input id="isStudyTimer" type="radio" checked="true" name="timerType"></input>
          <input id="isBreakTimer" type="radio" name="timerType"></input>
        </div>
      </div>

    </div>
  );
}

export default App;
