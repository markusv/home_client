import Inferno from 'inferno';
import Component from 'inferno-component';
import Header from '../components/header/header.jsx';
import Button from '../components/button/button.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button />
      </div>
    );
  }
}
