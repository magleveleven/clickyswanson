import React from 'react';
import './App.css';
import CardImages from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageArea from './components/ImageArea';
import Scoring from './components/Scoring';



//Make list of image cards
const cards = [
  {
    id: 1,
    name: "annoyed",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron1.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 2,
    name: "apologetic",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron2.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 3,
    name: "aroused",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron3.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 4,
    name: "casual",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron4.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 5,
    name: "cautious",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron5.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 6,
    name: "condescending",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron6.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 7,
    name: "confused",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron7.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 8,
    name: "disapproving",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron8.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 9,
    name: "enthusiastic",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron9.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 10,
    name: "exasperated",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron10.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 11,
    name: "exhausted",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron11.jpg?raw=true",
    isClicked: false,
  },
  {
    id: 12,
    name: "furious",
    image: "https://github.com/magleveleven/clickyswanson/blob/master/clickyApp/src/styles/images/ron12.jpg?raw=true",
    isClicked: false,
  }]

console.log(cards);
//Make a starting state with the following: game and top scores, and inventory of selected cards, and 
//default a boolean variable to false for storing wrong selection

//Create a starting state/class
class App extends React.Component {
  state = {
    score: 0,
    topscore: 0, 
    cardsGuessed: [],
    wrongAnswer: false,
    alert: "Let's play!",
    cards
  }

//Logic if card is selected, check if previously selected
handleCardClick = (id) => {
  if(this.state.cardsGuessed.includes(id)){
    this.setState ({
      score: 0,
      wrongAnswer: true,
      cardsGuessed: [],
      alert: "Oops, try again!",
    });

  } else {
    this.setState ({
      //Add point to current score for correct click
      score: this.state.score +=1,
      wrongAnswer: false,
      alert: "Woot, keep going",
      //Randomize arrangement of cards in array, take 50% chance that number will be positive, if  so, sort
      cards: this.state.cards.sort(() => Math.random() -0.5)
    });
    //Update top score if current score is greater
    if(this.state.topscore<this.state.score){
      this.setState({
        topscore: this.state.score})}
    this.setState({
      //Make list of cards clicked to check if previoulsy clicked
      cardsGuessed: [...this.state.cardsGuessed, id]
    })
  }
  }
//Display the scores
render() {
  return (
      <div>
      <Header />

      <Scoring
        score={this.state.score}
        topscore={this.state.topscore}/>

      <ImageArea />
          <div className="msg">{this.state.alert}</div>
          <div className="container">
          <section className="grid">{cards.map(character => {
            return (
              <CardImages
                key = {character.id}
                image = {character.image}
                id = {character.id}
                clicked = {character.clicked}
                cardClick={this.handleCardClick}
              />
            )
          })
          }
          </section>
          </div>
          
      <Footer />
      </div>)
}
}



export default App;
