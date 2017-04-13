import Inferno from 'inferno';
import './style.scss';

export default function Header(props) {
  return (
    <header>
      <img src="assets/home.png" alt="Home" />
      {props.children}
    </header>
  );
}
