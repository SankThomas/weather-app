import React from "react"
import SearchForm from "./SearchForm"

const App = () => {
  const [text, setText] = React.useState("Nairobi")
  const [states, setStates] = React.useState([])

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_API_KEY}`
      )
      const data = await res.json()
      console.log(data)
      setStates(data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [text])

  return (
    <>
      <section className="text-center text-white bg-indigo-600 py-20 px-5">
        <h1 className="font-bold text-4xl">ReactJs Weather App</h1>
        <small>Powered by OpenWeather API</small>
        <SearchForm setText={(text) => setText(text)} />
      </section>

      <section className="p-5">
        <h2 className="text-center mb-5">
          Currently viewing weather information for{" "}
          <span className="font-bold text-lg">
            {states.country}, {states.sys.country}{" "}
            <span className="block font-light text-base">
              Latitude: {states.coord.lat}, Longitude: {states.coord.lon}
            </span>
          </span>
        </h2>

        <div>
          <h3 className="font-bold text-xl text-center">Weather Forecast</h3>
          {states.weather.map(({ description, id, main }) => {
            return (
              <article key={id}>
                <p className="capitalize text-center">Current: {description}</p>
                <h4 className="text-center">Main Forecast: {main}</h4>
                <small className="block mt-5 text-center">
                  More information
                </small>
                <ul className="grid grid-cols-3">
                  <li className="w-20 bg-indigo-600 m-2 p-2 text-sm rounded-sm shadow-lg text-white">
                    Humidity: {states.main.humidity}
                  </li>
                  <li className="w-20 bg-indigo-600 m-2 p-2 text-sm rounded-sm shadow-lg text-white">
                    Pressure: {states.main.pressure}{" "}
                  </li>
                  <li className="w-20 bg-indigo-600 m-2 p-2 text-sm rounded-sm shadow-lg text-white">
                    Temp: {states.main.temp}{" "}
                  </li>
                  <li className="w-20 bg-indigo-600 m-2 p-2 text-sm rounded-sm shadow-lg text-white">
                    Wind: {states.wind.deg} degrees
                  </li>
                  <li className="w-20 bg-indigo-600 m-2 p-2 text-sm rounded-sm shadow-lg text-white">
                    Speed: {states.wind.speed} km/h
                  </li>
                </ul>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
