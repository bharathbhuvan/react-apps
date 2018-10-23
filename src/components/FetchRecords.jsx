import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../common.css";
class FetchRecords extends Component {
  //handleChange = this.handleChange.bind(this);

  handleChange = event => {
    this.props.onHandleChange(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <h1>List Of Posts</h1>
        <form className="form" name="search">
          <label>Filter data: </label>
          <input
            type="text"
            name="search"
            value={this.props.inputval}
            onChange={this.handleChange.bind(this)}
            placeholder="Search by userId"
          />
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>NO</th>
              <th>User Id</th>
              <th>Title </th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Records.map(({ id, userId, title, body }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FetchRecords;
