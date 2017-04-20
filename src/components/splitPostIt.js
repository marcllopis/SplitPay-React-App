import React from 'react';
import './splitPostIt.css'

class SplitPostIt extends React.Component {

  componentDidUpdate(){ // every time i render new information, the component is re-rendered so i use component did update to assign the value to empty string
    if(this.props.showFinalNote === true){
        this.refs.visible.className = "white-note-split show"
      } else if(this.props.showFinalNote === false){
        this.refs.visible.className = "white-note-split hide"
      }

  }



    render() {
      var splitted = this.props.split.map(function(name, index) {
         return (
             <h3  key={index}>- <strong>{name.name}</strong> will pay {name.total.toFixed(2)} €</h3>
         )
      })
      return (
          <div ref="visible" className="white-note-split hide">
            <h1>Don't fight! Here you have what everybody should pay:</h1>
            <div id="list-of-people">
              {splitted}
              <button className="btn btn-info btn-note-custom" onClick={function(){this.props.submit()}.bind(this)}>Go Back</button>
            </div>
          </div>
      )
    }
}

export default SplitPostIt;
