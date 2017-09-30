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
  loadInitialState,
  fetchTemperature,
  turnOnLightsABit,
  watchMovie
} from '../actions/actions.js';
import Temperature from '../components/temperature/temperature.jsx';
import './style.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.turnOnLights = this.turnOnLights.bind(this);
    this.turnOnLightsABit = this.turnOnLightsABit.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.turnOffLights = this.turnOffLights.bind(this);
    this.turnOffEverything = this.turnOffEverything.bind(this);
    this.startListenToMusic = this.startListenToMusic.bind(this);
    this.starWatchAppleTv = this.starWatchAppleTv.bind(this);
    this.starWatchMovie = this.starWatchMovie.bind(this);
  }

  componentWillMount() {
    this.loadInitialState();
    window.addEventListener('focus', this.onFocusHandler, false);
//    this.props.dispatch(openWebSocket());
  }

  componentWillUnmount() {
    window.removeEventListener('focus', this.onFocusHandler);
  }

  onFocusHandler() {
    this.props.dispatch(fetchTemperature());
  }

  loadInitialState() {
    this.props.dispatch(loadInitialState());
  }

  turnOffEverything() {
    this.props.dispatch(turnOffEverything());
  }

  turnOnLightsABit() {
    this.props.dispatch(turnOnLightsABit());
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

  starWatchMovie() {
    this.props.dispatch(watchMovie());
  }

  renderLightsButtons() {
    const { turnOnLightsActive, turnOffLigthsActive, turnOnLightsABitActive } = this.props;
    return (
      <ul className="buttonList clearfix">
        <li>
          <Button
            label="Litt lys"
            iconUrl="assets/lightbulb.png"
            loading={turnOnLightsABitActive}
            onClick={this.turnOnLightsABit}
          />
        </li>
        <li>
          <Button
            label="Lys"
            iconUrl="assets/lightbulb.png"
            loading={turnOnLightsActive}
            onClick={this.turnOnLights}
          />
        </li>
        <li>
          <Button
            label="Ikke noe lys"
            iconUrl="assets/lightbulb_off.png"
            loading={turnOffLigthsActive}
            onClick={this.turnOffLights}
          />
        </li>
      </ul>
    );
  }

  renderHarmonyButtons() {
    const { listenToMusic, watchAppleTv, watchMovie } = this.props;
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
        <li>
          <Button
            label="Film"
            loading={watchMovie}
            onClick={this.starWatchMovie}
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
    turnOnLightsABitActive: state.lights.turnOnLightsABitActive,
    turnOffLigthsActive: state.lights.turnOffLigthsActive,
    lightsOn: state.lights.lightsOn,
    turnOffEverythingActive: state.activities.turnOffEverythingActive,
    listenToMusic: state.activities.listenToMusic,
    watchAppleTv: state.activities.watchAppleTv,
    watchMovie: state.activities.watchMovie,
    loadTemperature: state.temperature.loadTemperature,
    temperature: state.temperature.temperature
  };
};

export default connect(select)(App);
