import Inferno from 'inferno';
import './style.scss';

export default function MovieListItem(props) {
  return (
    <button
      type="button"
      className="homeButton"
      onClick={props.onClick}
    >
      <div>
        <img src={props.iconUrl} alt={props.label} />
      </div>
      {props.label}
    </button>
  );
}
