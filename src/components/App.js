import React from 'react';
// new stuff
import PeopleComing from './peopleComing';
import Dishes from './dishes';

class App extends React.Component {

  constructor(){
    super() //needed for binding
    this.state = {
      peopleComing: [],
      dishes: []
    } // i add the peopleComing as a property of the state object, it will initialize as an empty array
  }


  submitPeople(inputText){

    this.state.peopleComing.push(inputText)
    var arrayOfPeople = this.state.peopleComing

    this.setState({
      peopleComing: arrayOfPeople
    });

    // i get whatever the user type there and i pass it and store it to the state

  }

  submitDishes(inputDish, inputPrice, inputPeoplePaying){

    console.log("-----------")
    console.log("the people on the app.js", inputPeoplePaying)
    console.log("-----------")

    var newFood = {
      name: inputDish,
      price:inputPrice,
      people: inputPeoplePaying
    };

    var newDish = this.state.dishes
    this.state.dishes.push(newFood)

    this.setState({
      dishes: newDish
    });


  }


  render() {
    return (
      <div className="main-container">
        <h2> This is the main APP page </h2>
        <h3>Here it is the people component:</h3>
        <PeopleComing {...this.state} submit={this.submitPeople.bind(this)}/>
        <br />
        <hr />
        <Dishes {...this.state} submit={this.submitDishes.bind(this)}/>
      </div>
    )
  }
}


export default App;
