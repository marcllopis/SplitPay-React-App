import React from 'react';
import './peopleComing.css'


class PeopleComing extends React.Component {


  componentDidMount(){ //before the component is mounted, i assign the input to the ref input
    this.input = this.refs.input
  }

  componentDidUpdate(){ // every time i render new information, the component is re-rendered so i use component did update to assign the value to empty string
    this.refs.input.value = ""
    this.refs.visible.className = "white-note show"

  }


  render() {
    return (
      <div className="container people-container">

        <div className="row">
          <div className="col-md-7">
            <h2> People coming today </h2>
            <br/>

            <div className="input-group custom-group">
             <input ref="input" type="text" className="form-control people-input"  id="add-people" placeholder="Type everybody's name here..." />
             <span className="input-group-btn">
                  <button onClick={function(){this.props.submit(this.input.value)}.bind(this)} id="people" className="btn btn-primary add-people-btn" type="button">ADD</button>
             </span>
            </div>
          </div>
          <div className="col-md-5">
            <div ref="visible" className="white-note hide">
              <h3>Look who we have around...</h3>
              <div id="list-of-people">

                {
                  this.props.peopleComing.map(function(name, index) {
                     return (
                         <div key={index} className="col-md-4"><span className="names-on-list"> -{name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}</span></div>
                     )
                  })
                }

              </div>
            </div>
          </div>
        </div>



      </div>

    )
  }
}

export default PeopleComing;
