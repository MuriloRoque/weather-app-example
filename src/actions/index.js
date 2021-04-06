const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
})

const fetchData = (city) => (
  (dispatch) => (
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=787b617f19647c87dbce494822b4c8d1`)
      .then((response) => response.json())
      .then((data) => dispatch(setData(data)))
      .catch((error) => console.log(error))
  )
)

export default fetchData;
