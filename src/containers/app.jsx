import Inferno from 'inferno';
import { connect } from 'inferno-redux';
import Component from 'inferno-component';
import Header from '../components/header/header.jsx';
import Button from '../components/button/button.jsx';
import {
  turnOnLights,
  turnOffLights,
  turnOffEverything,
  listenToMusic,
  watchAppleTv,
  loadInitialState
} from '../actions/actions.js';
import Temperature from '../components/temperature/temperature.jsx';
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

  componentWillMount() {
    this.loadInitialState();
//    this.props.dispatch(openWebSocket());
  }

  loadInitialState() {
    this.props.dispatch(loadInitialState());
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
            iconUrl="assets/lightbulb.png"
            loading={turnOnLightsActive}
            onClick={this.turnOnLights}
          />
        </li>
        <li>
          <Button
            label="Slå av lyset"
            iconUrl="assets/lightbulb_off.png"
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

  renderTemperature() {
    const { temperature, loadTemperature } = this.props;
    let temperatureToDisplay = temperature;
    if (temperature === -1) { temperatureToDisplay = ''; }
    return (
      <Temperature temperature={temperatureToDisplay} loading={loadTemperature} />
    );
  }

  render() {
    const { turnOffEverythingActive } = this.props;
    return (
      <div>
        <Header>
          {this.renderTemperature()}
        </Header>
        <ul className="buttonList clearfix turnOffList">
          <li>
            <Button
              iconUrl="assets/off.png"
              loading={turnOffEverythingActive}
              onClick={this.turnOffEverything}
            />
          </li>
        </ul>
        { this.renderLightsButtons() }
        { this.renderHarmonyButtons() }
        <div id="log" />
      </div>
    );
  }
}

const select = (state) => {
  return {
    turnOnLightsActive: state.lights.turnOnLightsActive,
    turnOffLigthsActive: state.lights.turnOffLigthsActive,
    lightsOn: state.lights.lightsOn,
    turnOffEverythingActive: state.activities.turnOffEverythingActive,
    listenToMusic: state.activities.listenToMusic,
    watchAppleTv: state.activities.watchAppleTv,
    loadTemperature: state.temperature.loadTemperature,
    temperature: state.temperature.temperature
  };
};

export default connect(select)(App);
