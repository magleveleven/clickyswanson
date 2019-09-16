import React from 'react';
import './App.css';
import Scoring from './components/Scoring';
import Card from './components/Card';

//Make list of image cards
const cards = [
  {
    id: "ron1",
    name: "annoyed",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron1.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron2",
    name: "apologetic",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron2.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron3",
    name: "aroused",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron3.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron4",
    name: "casual",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron4.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron5",
    name: "cautious",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron5.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron6",
    name: "condescending",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron6.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron7",
    name: "confused",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron7.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron8",
    name: "disapproving",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron8.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron9",
    name: "enthusiastic",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron9.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron10",
    name: "exasperated",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron10.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron11",
    name: "exhausted",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron11.jpg?raw=true",
    isClicked: false,
  },
  {
    id: "ron12",
    name: "furious",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron12.jpg?raw=true",
    isClicked: false,
  }]

console.log(cards);
//Make a starting state with the following: game and top scores, and inventory of selected cards, and 
//default a boolean variable to false for storing wrong selection

class App extends React.Component {

  state = {
    score: 0,
    topscore: 0, 
    cardsGuessed: [],
    wrongAnswer: false,
    arrCards: cards
    
  }
//Logic if card is selected, check if previously selected
//If not previously, selected, increment 1 point to score and randomize arrangement of cards

handleCardGuessed = (id) =>  {
  if(this.state.cardsGuessed.includes(id)) {
    // We always use the setState method to update a component's state
    this.setState({
      score: 0,
      cardsGuessed: [],
      wrongAnswer: true,
    })
  }
  else 
    {
    this.setState({
    score: this.setState.score +=1,
    //MATH RANDOM SORT???
    });
    this.setState({
      cardsGuessed: [
        ...this.state.cardsGuessed, 
        id
      ]
    })
    }
}
//Display the scores
render() {
  return (
    <div>
        <p1>
          Play and earn points by clicking each image once, careful not to repeat any selection. 
          Or don't play, I don't care.  
        </p1>
      <Scoring 
      score={this.state.score}
      topscore={this.state.topscore}/>
      

      {cards.map(face => {
        return (
          <Card 
            key = {face.id}
            image = {face.image}
            id = {face.id}
            clicked = {face.clicked}
            guessedCard = {this.handleCardGuessed}
          />
        )
      })
      }
    </div>
  );
}

}

export default App;
