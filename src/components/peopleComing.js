import React from 'react';

import './peopleComing.css'


class PeopleComing extends React.Component {


  componentDidMount(){ //before the component is mounted, i assign the input to the ref input
    this.input = this.refs.input
    console.log(this.refs)
  }

  componentDidUpdate(){ // every time i render new information, the component is re-rendered so i use component did update to assign the value to empty string
    this.refs.input.value = ""
  }


  render() {
    return (

            <div className="input-group custom-group">
             <input name="people" ref="input" type="text" className="form-control people-input"  id="add-people" placeholder="Type everybody's name here..." />
             <span className="input-group-btn">
                  <button name="people" onClick={function(){this.props.submit(this.input.value)}.bind(this)} id="people" className="btn btn-primary add-people-btn" type="button">ADD</button>
             </span>
            </div>

    )
  }
}

export default PeopleComing;
