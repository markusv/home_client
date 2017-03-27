import Inferno from 'inferno';
import Spinner from '../spinner/spinner.jsx';
import './style.scss';

export default function MovieListItem(props) {
  return (
    <button
      type="button"
      className="homeButton"
      onClick={props.onClick}
    >
      <div>
        {props.loading ?
          <Spinner />
          :
          <img src={props.iconUrl} alt={props.label} />
        }
      </div>
      {props.label}
    </button>
  );
}
