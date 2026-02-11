import { useState, useRef, useEffect, useMemo } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import { fetchCoordinates } from './api/geo'
import { fetchWeatherByCoords } from './api/weather'
import { getColorByWeatherId } from './data/byColor'

function App() {
  const [city, setCity] = useState('seoul')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const bg = useMemo(() => {
    const weatherId = weather?.weather?.[0].id

    return getColorByWeatherId(weatherId)
  }, [weather])

  const handleSearch = async() => {
    const q = city.trim()
    if(!q) return

    try {
      setLoading(true)
      setErr('')
      const {lat, lon, name, country} = await fetchCoordinates(q)
      console.log(lat, lon, name, country)
      
      const data = await fetchWeatherByCoords(lat, lon)
      console.log(data)
      setWeather(data)
      setCity('')
      
    } catch (error) {
      setLoading(error)
      setErr(error)
    } finally {
      setLoading(false)
    }
  }
  const onChangeInput = (e) => setCity(e.target.value)
  const onKeyup = (e) => {
    if (e.key==='Enter') handleSearch()
  }

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h1>홍석란의 날씨 앱</h1>
        <div className="input-wrap">
          <input
            ref={inputRef}
            type="text"
            value={city}
            onChange={onChangeInput}
            onKeyUp={onKeyup}
            placeholder='도시 이름을 입력하세요' />
          <button
            onClick={handleSearch}
            >검색</button>
        </div>
        {err && <p>{err}</p>}
        {loading && <p>불러오는 중 ....</p>}
        <WeatherCard weather={weather}/>
      </div>
    </div>
  )
}

export default App
