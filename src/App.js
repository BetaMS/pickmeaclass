import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import theData from './5e.json';

//All images used below are copyrighted by Wizards of the Coast
import artificer from './images/Artificer.png';
import barbarian from './images/Barbarian.png';
import bard from './images/Bard.png';
import cleric from './images/Cleric.png';
import druid from './images/Druid.png';
import fighter from './images/Fighter.png';
import monk from './images/Monk.png';
import paladin from './images/Paladin.png';
import ranger from './images/Ranger.png';
import rogue from './images/Rogue.png';
import sorcerer from './images/Sorcerer.png';
import warlock from './images/Warlock.png';
import wizard from './images/Wizard.png';
import restart from './images/restart.png';

import artificerx from './images/Artificerx.png';
import barbarianx from './images/Barbarianx.png';
import bardx from './images/Bardx.png';
import clericx from './images/Clericx.png';
import druidx from './images/Druidx.png';
import fighterx from './images/Fighterx.png';
import monkx from './images/Monkx.png';
import paladinx from './images/Paladinx.png';
import rangerx from './images/Rangerx.png';
import roguex from './images/Roguex.png';
import sorcererx from './images/Sorcererx.png';
import warlockx from './images/Warlockx.png';
import wizardx from './images/Wizardx.png';

//This coffee icon is copyright of AomAm on Sotckio.
import coffee from './images/coffee.png';

//These icons belong to github and twitter
import github from './images/github-icon.png'

class App extends Component {

  constructor() {
    super()
    this.state = {
      isFinished: false,
      question: "Pick a class for DnD 5e?",
      one: "Sure",
      two: "Nah",
      oneValue: 14,
      twoValue: 35,
      whichEdition: 5,
      data: []
    }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  /*
    This method changes the data on the screen depending on the value passed when a button is clicked.
  */
  onButtonClick(val){

    var currentQuestion = this.state.data[val];

    //Checks to see if the data is a finish or a question
    if(currentQuestion[0] === 0){
      this.setState({
        isFinished: false
      });
    }
    else{
      this.setState({
        isFinished: true
      });
    }
    //Sets the data
    this.setState({
      question: currentQuestion[1],
      one: currentQuestion[2],
      two: currentQuestion[3],
      oneValue: currentQuestion[4],
      twoValue: currentQuestion[5]
    });
  }

  //Fills the data state with the data from the 5e json
  fillData(){
    var newData = theData;

    this.setState({data: newData});
  }

  //Runs when component is mounted and runs fillData
  componentDidMount(){
    this.fillData();
  }

  render(){

    //Booleans for icon logic. Yes this is a little janky and no one should have to explain their logic this much... But it works...  
    let nextValue = this.state.oneValue;

    //This is the boolean that tells us if we're on a class description or on a question.
    let isFinished = this.state.isFinished;

    //This covers the logic for making sure the icons are on for the first two questions
    let base = ((nextValue === 14 && this.state.twoValue < 36) || nextValue === 25);
    let noMagic = nextValue === 16;
    let magic = nextValue === 26;
    let outOfRange = nextValue === 0;
    

    //These are the logic to make sure that the individual icons stay on when they neeed to be on.
    let paladinRange = (nextValue > 13 && nextValue <= 18 && this.state.twoValue < 36) || nextValue === 25;
    let rangerRange = (nextValue > 13 && nextValue <= 18 && this.state.twoValue < 36) || nextValue === 25;
    let monkRange = (nextValue > 18 && nextValue <= 20) || nextValue === 25;
    let barbarianRange = nextValue > 18 && nextValue <= 21;
    let rogueRange = nextValue > 18 && nextValue <= 22;
    let fighterRange = nextValue > 18 && nextValue <= 25;

    //These are the logic for checking if an individual class is next.
    let artificerNext = nextValue === 1;
    let barbarianNext = nextValue === 2;
    let bardNext = nextValue === 3;
    let clericNext = nextValue === 4;
    let druidNext = nextValue === 5;
    let fighterNext = nextValue === 6;
    let monkNext = nextValue === 7;
    let paladinNext = nextValue === 8;
    let rangerNext = nextValue === 9;
    let rogueNext = nextValue === 10;
    let sorcererNext = nextValue === 11;
    let warlockNext = nextValue === 12;
    let wizardNext = nextValue === 13;

    //These are the logic for making sure icons stay on for classes that come after others. This isn't needed for classes that come last.
    let paladinOn = (paladinNext && !isFinished);
    let monkOn = (monkNext && !isFinished);
    let barbarianOn = (barbarianNext && !isFinished);
    let rogueOn = (rogueNext && !isFinished);
    let clericOn = (clericNext && !isFinished);
    let artificerOn = (artificerNext && !isFinished);
    let druidOn = (druidNext && !isFinished);
    let druidOn2 = druidOn && this.state.twoValue !== 32;
    let bardOn = (bardNext && !isFinished);
    let warlockOn = (warlockNext && !isFinished);
    let sorcererOn = (sorcererNext && !isFinished);
    

    //This is where all the logic from above comes together to make sure that the icons are on or off when they need too be.
    let artificerValid = base || magic || druidOn2 || clericOn || artificerNext;
    let barbarianValid = base || noMagic || barbarianRange || (monkNext && !isFinished) || barbarianNext;
    let bardValid = base || magic || druidOn2 || clericOn || artificerOn || bardNext;
    let clericValid = base || magic || druidOn2 || clericNext;
    let druidValid = base || magic || druidNext || clericOn || artificerOn || bardOn;
    let fighterValid = base || noMagic || fighterRange || monkOn || rogueOn || barbarianOn || fighterNext;
    let monkValid = base || noMagic || monkRange || monkNext;
    let paladinValid = (paladinRange || paladinNext) || outOfRange;
    let rangerValid = rangerRange || paladinOn || rangerNext;
    let rogueValid = base || noMagic || rogueRange || monkOn || barbarianOn || rogueNext;
    let sorcererValid = base || magic || druidOn || clericOn || artificerOn || bardOn || warlockOn || sorcererNext;
    let warlockValid = base || magic || druidOn || clericOn || artificerOn || bardOn || warlockNext;
    let wizardValid = base || magic || druidOn || clericOn || artificerOn || bardOn || warlockOn || sorcererOn || wizardNext;

    document.title = "Pick Me A Class" 

    //Checks the isFinished boolean, which is set depending on data passed from the json
    return(
      <main>
        <header>
          <img src={artificerValid ? artificerx : artificer} alt="artificer" className="D20"/>
          <img src={barbarianValid ? barbarianx : barbarian} alt="barbarian" className="D20"/>
          <img src={bardValid ? bardx : bard} alt="bard" className="D20"/>
          <img src={clericValid ? clericx : cleric} alt="cleric" className="D20"/>
          <img src={druidValid ? druidx : druid} alt="druid" className="D20"/> 
          <img src={fighterValid ? fighterx : fighter} alt="fighter" className="D20"/> 
          <img src={monkValid ? monkx : monk} alt="monk" className="D20"/> 
          <img src={paladinValid ? paladinx : paladin} alt="paladin" className="D20"/> 
          <img src={rangerValid ? rangerx : ranger} alt="ranger" className="D20"/> 
          <img src={rogueValid ? roguex : rogue} alt="rogue" className="D20"/> 
          <img src={sorcererValid ? sorcererx : sorcerer} alt="sorcerer" className="D20"/> 
          <img src={warlockValid ? warlockx : warlock} alt="warlock" className="D20"/> 
          <img src={wizardValid ? wizardx : wizard} alt="wizard" className="D20"/> 
        </header>

        <section className="Container">
          <div className="title">
            { !this.state.isFinished ? <h2>{this.state.question}</h2> : <h2><a href={this.state.two} target="_blank">{this.state.question}</a></h2>}
          </div>
          { !this.state.isFinished ?
            <div className="buttonGroup"> 
              <button className="qBut" onClick={ () => this.onButtonClick(this.state.oneValue)}>{this.state.one}</button> 
              <button className="qBut" onClick={ () => this.onButtonClick(this.state.twoValue)}>{this.state.two}</button>
            </div>
            : <div className="paragraph">
                <p>{this.state.one}</p>
                <button onClick={ () => this.onButtonClick(this.state.twoValue)} className="restartButton"><img src={restart} alt="d20 image" className="restartImage"/></button>
              </div>
          }
        </section> 
          
        <div className="coffeeMaker"><a href="https://github.com/BetaMS/pickmeaclass" target="_blank"><img src={github} className="icon"/></a><a href="https://www.paypal.com/donate?business=X3UK3AGW8U2VW&currency_code=CAD" target="_blank" className="coffeeButton">Buy me a coffee?</a></div>
      </main>
    )
  }
}

export default App;
