const INITIAL_STATE = {
  image: '',
  temperature: 0,
}

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        image: `http://openweathermap.org/img/wn/${action.payload.weather[0].icon}@2x.png`,
        temperature: action.payload.main.temp,
      };
    default:
      return state;
  }
}

export default weather;
