import Inferno from 'inferno';
import { connect } from 'inferno-redux';
import Component from 'inferno-component';
import Header from '../components/header/header.jsx';
import Button from '../components/button/button.jsx';
import { turnOnLights, turnOffLights, turnOffEverything } from '../actions/actions.js';
import './style.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.turnOnLights = this.turnOnLights.bind(this);
    this.turnOffLights = this.turnOffLights.bind(this);
    this.turnOffEverything = this.turnOffEverything.bind(this);
  }

  turnOffEverything() {
    this.props.dispatch(turnOffEverything());
  }

  turnOnLights() {
    this.props.dispatch(turnOnLights());
  }

  turnOffLights() {
    this.props.dispatch(turnOffLights());
  }

  renderLightsButtons() {
    const { turnOnLightsActive, turnOffLigthsActive } = this.props;
    return (
      <ul className="buttonList clearfix">
        <li>
          <Button
            label="Slå på lyset"
            iconUrl="lightbulb.png"
            loading={turnOnLightsActive}
            onClick={this.turnOnLights}
          />
        </li>
        <li>
          <Button
            label="Slå av lyset"
            iconUrl="lightbulb_off.png"
            loading={turnOffLigthsActive}
            onClick={this.turnOffLights}
          />
        </li>
      </ul>
    );
  }

  render() {
    const { turnOffEverythingActive } = this.props;
    return (
      <div>
        <Header />
        <ul className="buttonList clearfix turnOffList">
          <li>
            <Button
              label="Slå av alt"
              iconUrl="off.png"
              loading={turnOffEverythingActive}
              onClick={this.turnOffEverything}
            />
          </li>
        </ul>
        { this.renderLightsButtons() }
      </div>
    );
  }
}

const select = (state) => {
  return {
    turnOnLightsActive: state.turnOnLightsActive,
    turnOffLigthsActive: state.turnOffLigthsActive,
    turnOffEverythingActive: state.turnOffEverythingActive
  };
};

export default connect(select)(App);
