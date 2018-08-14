import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <tr key={this.props.movie._id}>
        <td>{this.props.movie.title} </td>
        <td>{this.props.movie.genre.name} </td>
        <td>{this.props.movie.numberInStock} </td>
        <td>{this.props.movie.dailyRentalRate}</td>
        <td>
          <button onClick={this.props.onDelete} className="btn btn-danger">
            delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
