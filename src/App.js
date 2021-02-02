import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
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

class App extends Component {

  constructor() {
    super()
    this.state = {
      isFinished: false,
      question: "Pick a class for 5e?",
      one: "Sure",
      two: "Nah",
      oneValue: 14,
      twoValue: 0,
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
      //If it's a question it sets the data as it should.
      this.setState({
        isFinished: false
      });
    }
    else{
      //If it's a finish it'll set the data differently
      this.setState({
        isFinished: true
      });
    }
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

    //Booleans for icon logic. Yes this is a little janky, and no one should have to explain their logic this much... But it works... 
    // first value equaling 14 means it's the start point
    // first value equaling or greater then 15 is checking if they have decided for full casting or not. 
    let artificerValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let barbarianValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let bardValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let clericValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let druidValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let fighterValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let monkValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let paladinValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let rangerValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let rogueValid = this.state.oneValue == 14 || this.state.oneValue >= 15 ;
    let sorcererValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let warlockValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;
    let wizardValid = this.state.oneValue == 14 || this.state.oneValue == 15 || this.state.oneValue > 20;

    //Checks the isFinished boolean, which is set depending on data passed from the json
    return(
      <main>
        <header>
          <img src={artificerValid ? artificerx : artificer} alt="d20 image" className="D20"/>
          <img src={barbarianValid ? barbarianx : barbarian} alt="d20 image" className="D20"/>
          <img src={bardValid ? bardx : bard} alt="d20 image" className="D20"/>
          <img src={clericValid ? clericx : cleric} alt="d20 image" className="D20"/>
          <img src={druidValid ? druidx : druid} alt="d20 image" className="D20"/> 
          <img src={fighterValid ? fighterx : fighter} alt="d20 image" className="D20"/> 
          <img src={monkValid ? monkx : monk} alt="d20 image" className="D20"/> 
          <img src={paladinValid ? paladinx : paladin} alt="d20 image" className="D20"/> 
          <img src={rangerValid ? rangerx : ranger} alt="d20 image" className="D20"/> 
          <img src={rogueValid ? roguex : rogue} alt="d20 image" className="D20"/> 
          <img src={sorcererValid ? sorcererx : sorcerer} alt="d20 image" className="D20"/> 
          <img src={warlockValid ? warlockx : warlock} alt="d20 image" className="D20"/> 
          <img src={wizardValid ? wizardx : wizard} alt="d20 image" className="D20"/> 
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
          
        <a href="https://www.paypal.com/donate?business=X3UK3AGW8U2VW&currency_code=CAD" target="_blank" className="coffeeMaker"><img src={coffee} className="coffee"/>Buy me a coffee?</a>
      </main>
    )
  }
}

export default App;
