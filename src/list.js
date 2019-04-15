import React, { Component } from "react";
export class List extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.tasks.map((task, i) => {
          return (
            <li key={i} className="list-group-item">
              task
              <button
                type="button"
                className="btn btn-primary float-right ml-2"
                onClick={this.props.delete(i)}
              >
                Delete
              </button>
              <button type="button" className="btn btn-primary float-right ">
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
