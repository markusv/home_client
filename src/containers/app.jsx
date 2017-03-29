import Inferno from 'inferno';
import { connect } from 'inferno-redux';
import Component from 'inferno-component';
import Header from '../components/header/header.jsx';
import Button from '../components/button/button.jsx';
import { turnOnLights, turnOffLights, turnOffEverything, listenToMusic, watchAppleTv } from '../actions/actions.js';
import './style.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.turnOnLights = this.turnOnLights.bind(this);
    this.turnOffLights = this.turnOffLights.bind(this);
    this.turnOffEverything = this.turnOffEverything.bind(this);
    this.startListenToMusic = this.startListenToMusic.bind(this);
    this.starWatchAppleTv = this.starWatchAppleTv.bind(this);
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

  startListenToMusic() {
    this.props.dispatch(listenToMusic());
  }

  starWatchAppleTv() {
    this.props.dispatch(watchAppleTv());
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

  renderHarmonyButtons() {
    const { listenToMusic, watchAppleTv } = this.props;
    return (
      <ul className="buttonList clearfix">
        <li>
          <Button
            label="Hør på musikk"
            loading={listenToMusic}
            onClick={this.startListenToMusic}
          />
        </li>
        <li>
          <Button
            label="Se på Apple-tv"
            loading={watchAppleTv}
            onClick={this.starWatchAppleTv}
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
        { this.renderHarmonyButtons() }
      </div>
    );
  }
}

const select = (state) => {
  return {
    turnOnLightsActive: state.turnOnLightsActive,
    turnOffLigthsActive: state.turnOffLigthsActive,
    turnOffEverythingActive: state.turnOffEverythingActive,
    listenToMusic: state.listenToMusic,
    watchAppleTv: state.watchAppleTv
  };
};

export default connect(select)(App);
