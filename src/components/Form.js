import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }

  onchangeHandler = (event) => {
    this.setState(
      {
        userName: event.target.value,
      },
      () => console.log(this.state.userName)
    );
  };

  onCommentChangeHandler = (event) => {
    this.setState(
      {
        comment: event.target.value,
      },
      () => console.log(this.state.comment)
    );
  };

  onSelectHandler = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      () => console.log(this.state.topic)
    );
  };

  onSubmitHandler = (event) => {
    alert(`${this.state.userName} ${this.state.comment}  ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic } = this.state;

    return (
      <form onSubmit={this.onSubmitHandler}>
        {/* noraml box */}
        <div>
          <label>userName </label>
          <input value={userName} onChange={this.onchangeHandler}></input>
        </div>
        <br></br>

        {/* textarea */}
        <div>
          <label>comments </label>
          <textarea
            value={comment}
            onChange={this.onCommentChangeHandler}
          ></textarea>
        </div>
        <br></br>

        {/* selection box */}
        <div>
          <label>topic </label>
          <select value={topic} onChange={this.onSelectHandler}>
            <option value="react">React</option>
            <option value="vue">vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        {/* submit buttom */}
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    );
  }
}
