import { connect } from 'react-redux';
import fetchData from './actions';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { getWeatherData, image, temperature } = this.props;
    const { city } = this.state;
    return (
      <div>
        <h1>Clima Trybe</h1>
        <label htmlFor="city">Informe a cidade:
          <input name="city" onChange={ this.handleChange } id="city" type="text"/>
        </label>
        <button onClick={ () => getWeatherData(city) }>Enviar</button>
        <img src={ image } alt="clima"/>
        <strong>{ temperature }</strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.weather.image,
  temperature: state.weather.temperature,
})

const mapDispatchToProps = (dispatch) => ({
  getWeatherData: (city) => dispatch(fetchData(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
