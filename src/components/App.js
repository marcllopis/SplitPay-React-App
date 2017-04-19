import React from 'react';
// new stuff
import PeopleComing from './peopleComing';
import Dishes from './dishes';
import PostIt from './postIt';



class App extends React.Component {

  constructor(){
    super() //needed for binding
    this.state = {
      peopleComing: [],
      dishes: [],
      showResume : false,
      showSplitBtn: false,
      split: []
    } // i add the peopleComing as a property of the state object, it will initialize as an empty array
  }


  submitPeople(inputText){

    this.state.peopleComing.push(inputText)
    var arrayOfPeople = this.state.peopleComing

    this.setState({
      peopleComing: arrayOfPeople,
      showResume: false
    });

    this.refs.show.className = "show"


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
      dishes: newDish,
      showResume: true,
      showSplitBtn: true

    });


  }

  submitSplit(){

console.log("final step", this.state.peopleComing)
console.log("final step", this.state.dishes)
var peoplee = this.state.peopleComing;
var dishess = this.state.dishes;

    var listUsers = [];
        peoplee.forEach(function(name){
          console.log("inside of the 1 foreach")
          var newObject = {name: name, total: []};
          var listOfPrices = dishess.forEach(function(food){
            console.log("inside of the 2 foreach")

            if(food.people.includes(name)){
              newObject.total.push(food.price / food.people.length);
            }
          });
          console.log("THE OBJECT",newObject);
          newObject.total = newObject.total.reduce(function(a,b){return a+b;});
          listUsers.push(newObject);
        });
        console.log("FINAALS",listUsers)

    this.state.split.push(listUsers)
    var listUsers = this.state.split

    this.setState({
      split: listUsers

    });


  }




  render() {
    return (
      <div className="main-container">
        <br /><br /><br />
        <div className="container people-container">

          <div className="row">
            <div className="col-md-7">
              <h2> People coming today </h2>
              <br/>
              <PeopleComing {...this.state} submit={this.submitPeople.bind(this)}/>
            </div>

            <div className="col-md-5">
              <PostIt {...this.state} submit={this.submitSplit.bind(this)} / >
            </div>
          </div>
          <div className="hide" ref="show">
            <Dishes {...this.state} submit={this.submitDishes.bind(this)}/>
          </div>

        </div>
      </div>

      )
    }
  }


  export default App;
