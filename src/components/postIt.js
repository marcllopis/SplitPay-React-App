import React from 'react';
import './postIt.css'

class PostIt extends React.Component {

  componentDidUpdate(){ // every time i render new information, the component is re-rendered so i use component did update to assign the value to empty string
    this.refs.visible.className = "white-note show"
    if(this.props.showSplitBtn === true){
      this.refs.splitBtn.className = "btn btn-info show"
    }
  }

    render() {

      if(this.props.showResume === false){
        var pplcoming = this.props.peopleComing.map(function(name, index) {
           return (
                   <div key={index} className="col-md-4"><span className="names-on-list"> -{name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}</span></div>
           )
        })
      } else if (this.props.showResume === true){
          var pplcoming =   this.props.dishes.map(function(dish, index) {
              return (
                <div key={index}>
                  <span className="names-on-list"> -{dish.people.toString().replace(/,/g , " and ")} ordered {dish.name}, it's {dish.price} €</span>
                </div>
              )
          })
      }

      return (
        <div>
          <div ref="visible" className="white-note hide">
            <h3>Look who we have around...</h3>
            <div id="list-of-people">
              {pplcoming}
            </div>
          </div>
          <button ref="splitBtn" className="btn btn-info hide" onClick={function(){this.props.submit()}.bind(this)}>Split it</button>
        </div>
      )
    }
}

export default PostIt;
