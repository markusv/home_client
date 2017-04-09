import Inferno from 'inferno';
import Component from 'inferno-component';
import Spinner from '../spinner/spinner.jsx';
import './style.scss';

export default class Temperature extends Component {
  render() {
    const { loading, temperature } = this.props;
    return (
      <div className="temperature">
        {loading ?
          <Spinner />
          :
          `${temperature} °C`
        }
      </div>
    );
  }
}
