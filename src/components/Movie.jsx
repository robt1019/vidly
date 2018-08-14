import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div key={this.props.movie._id}>
        <span>{this.props.movie.title} </span>
        <span>{this.props.movie.genre.name} </span>
        <span>{this.props.movie.numberInStock} </span>
        <span>{this.props.movie.dailyRentalRate}</span>
        <button onClick={this.props.onDelete}>delete</button>
      </div>
    );
  }
}

export default Movie;
