import Inferno from 'inferno';
import './style.scss';

export default function MovieListItem(props) {
  let image = null;
  if (props.iconUrl) { image = (<img src={props.iconUrl} alt={props.label} />); }
  return (
    <button
      type="button"
      className="homeButton"
      onClick={props.onClick}
    >
      <div>
        {image}
      </div>
      {props.label ? props.label : null}
    </button>
  );
}
