import Inferno from 'inferno';
import Component from 'inferno-component';

export default class MovieList extends Component {

  renderMovies() {
    return this.props.movies.map((m) => <li />);
  }

  render() {
    return (
      <div>
        <h1 className="movieListHeader">James Bond movies</h1>
        <ul className="movieList">
          {this.renderMovies()}
        </ul>
      </div>
    );
  }
}
