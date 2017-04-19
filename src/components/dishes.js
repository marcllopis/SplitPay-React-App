import React from 'react';
import './dishes.css'

class Dishes extends React.Component {

  componentDidMount(){ //before the component is mounted, i assign the input to the ref input
    console.log(this.refs)
    this.inputDish = this.refs.inputDish
    this.inputPrice = this.refs.inputPrice
    this.inputPeoplePaying = this.refs.inputPeoplePaying
    console.log(this.inputPeoplePaying)
    console.log(this.refs.inputPeoplePaying)
    this.grabSelect = this.grabSelect.bind(this)


  }

  componentDidUpdate(){ // every time i render new information, the component is re-rendered so i use component did update to assign the value to empty string
    this.refs.inputDish.value = ""
    this.refs.inputPrice.value = ""


  }


  grabSelect(){
    var values = [].filter.call(this.refs.inputPeoplePaying.options, function(option){
      return option.selected
    }).map(function (optionSelected){ return optionSelected.value})
     return values
  }

    render() {
      return (
        <div>

          <h2>What did you order?</h2>

          <div className="form-inline">

            <select multiple onChange={this.grabSelect} ref="inputPeoplePaying" className="form-control dishes-input-people" id="people-paying">
              {
                this.props.peopleComing.map(function(name, index) {
                   return (
                       <option  key={index} value={name}>{name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}</option>
                   )
                })
              }
            </select>

            <input ref="inputDish" type="text" className="form-control dishes-input" id="dish" placeholder="Dish" />
            <input ref="inputPrice" type="number" className="form-control dishes-input" id="price" placeholder="Price" />


            <buttton onClick={function(){this.props.submit(this.inputDish.value, this.inputPrice.value, this.grabSelect())}.bind(this)} className="btn btn-primary add-dish-btn" id="add-food" type="button">ADD IT</buttton>

          </div>

        </div>
      )
    }
}

export default Dishes;
