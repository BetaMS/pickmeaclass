import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import theData from './5e.json';

class App extends Component {

  constructor() {
    super()
    this.state = {
      needsData: false,
      question: "Pick a class for 5e?",
      one: "Sure",
      two: "Nah",
      oneValue: 1,
      twoValue: 2,
      whichEdition: 5,
      data: []
    }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(val, edition){

    var currentQuestion = this.state.data[val];

    //Checks to see if the data is a finish or a question
    if(currentQuestion[0] === 0){
      //If it's a question it sets the data as it should.
      this.setState({
        question: currentQuestion[1],
        one: currentQuestion[2],
        two: currentQuestion[3],
        oneValue: currentQuestion[4],
        twoValue: currentQuestion[5]
      });
    }
    else{
      //If it's a finish it'll set the data differently
    }
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

    //Checks if the isFinished boolean, which can be set depending on data passed from the json
    if(!this.state.isFinished){
      return(
        <div>
          <h4>{this.state.question}</h4>
          <Button variant="dark" onClick={ () => this.onButtonClick(this.state.oneValue, 1)}>{this.state.one}</Button>
          <Button variant="dark" onClick={ () => this.onButtonClick(this.state.twoValue, 0)}>{this.state.two}</Button>
        </div>
      )
    }
    else{
      return(
        <div>
          
        </div>
      )
    }
  }


}



export default App;
