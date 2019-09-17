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


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    score: 0,
    topscore: 0, 
    cardsGuessed: [],
    wrongAnswer: false,
    cards
    }
  }


//Randomize arrangement of cards
shuffleCards = (arr) =>{
  for (let i=0; i<arr.length; i++) {
    let j = Math.floor(Math.random() *( i+1) );
    [arr[i], arr[j]]  =  [arr[j], arr[i]];
  }
  return arr;
  }


//Have a starting place for cards
cardStart = () => {
  this.state.cards.map((cards) => {
    cards.isClicked=false;
    return cards;
  })
}

//Logic if card is selected, check if previously selected
handleCardClick = (id) => {
  if(this.state.cardsGuessed.includes(id)){
    if(this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score});
    }
      this.setState({score: 0})
      this.setState({wrongAnswer: true})
      let newCardShuffle = this.shuffleCards(this.state.cards);
      this.setState( {cards: [...newCardShuffle]});
      this.cardStart();
  } else {
      this.setState ({
        wrongAnswer: false,
    })
      //Make variable to hold cards during gameplay 
      let gameCards = [...this.state.cards]
      gameCards[id].isClicked = true;
      this.setState({cards: [...gameCards] })
      let newCardShuffle = this.shuffleCards(gameCards);
      this.setState( {cards: [...newCardShuffle] });
      //If not previously, selected, increment 1 point to score and randomize arrangement of cards
      this.setState((state) => ({score: state.score +=1}));
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
          <div className="arrange">{cards.map(character => {
          return (
            <div className="container">{
              this.state.cards.map( (id) => (
              <img src={props.image} onClick={ () => {props.handleCardClick(props.id)} } alt={props.id} className="image"/>
              )
              )
            }
            <div>
            <CardImages
              key = {character.id}
              image = {character.image}
              id = {character.id}
              clicked = {character.clicked}
              cardClick={this.handleCardClick}
            />
            </div>
          </div>
          )
        })}
          </div>
          }
      <Footer />
      </div>)
}}



export default App;
