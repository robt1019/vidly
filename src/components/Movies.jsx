import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    movies: Array.from(getMovies())
  };

  handleDelete(id) {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  }

  render() {
    return (
      <div>
        {this.state.movies.length ? (
          <h3>Showing {this.state.movies.length} movies in the database</h3>
        ) : (
          <h3>There are no movies in the database</h3>
        )}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <Movie
                key={movie._id}
                movie={movie}
                onDelete={() => this.handleDelete(movie._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
