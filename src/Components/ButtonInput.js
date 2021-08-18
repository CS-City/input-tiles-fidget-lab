import React, {Component} from 'react';

class ButtonInput extends Component {
constructor(props) {
    super(props);
    this.state = {
      button: "false"
    }
  };

  // The event will be passed in automatically.
  handleChange = (event) => {
    if(this.state.button==="false"){
      this.setState({button:"true"})
    } else{
      this.setState({button:"false"})
    }
  }
  render() {
    return(
      <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" value="Click me!" className="btn" onClick={this.handleChange}/>
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: {this.state.button}</label>
                    <span name="buttonOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    )};
    }
export default ButtonInput;


