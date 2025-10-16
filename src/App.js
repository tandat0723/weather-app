import { useEffect, useState } from 'react'
import { IoMdSearch, } from 'react-icons/io'
import { BsCloudHaze2Fill, } from 'react-icons/bs'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { ImSpinner8 } from 'react-icons/im'
import axios from 'axios'

const APIkey = '43af416031555d2d65dd1a3ecf91e888'

const App = () => {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState('Vietnam')

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`

    axios.get(url).then((res) => {
      setData(res.data)
    })
  }, [location])

  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className='text-5xl' />
        </div>
      </div>
    )
  }

  return (
    <div>App</div>
  )
}

export default App