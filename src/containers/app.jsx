import Inferno from 'inferno';
import { connect } from 'inferno-redux';
import Component from 'inferno-component';
import Header from '../components/header/header.jsx';
import Button from '../components/button/button.jsx';
import { turnOnLights, turnOffLights } from '../actions/actions.js';
import './style.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.turnOnLights = this.turnOnLights.bind(this);
    this.turnOffLights = this.turnOffLights.bind(this);
  }

  turnOnLights() {
    this.props.dispatch(turnOnLights());
  }

  turnOffLights() {
    this.props.dispatch(turnOffLights());
  }

  render() {
    return (
      <div>
        <Header />
        <ul className="buttonList">
          <li>
            <Button
              label="Slå på lyset"
              onClick={this.turnOnLights}
            />
          </li>
          <li>
            <Button
              label="Slå av lyset"
              onClick={this.turnOffLights}
            />
          </li>
        </ul>
      </div>
    );
  }
}

const select = () => {
  return {};
};

export default connect(select)(App);
