import { useEffect, useState } from 'react'
import { IoMdCloudy, IoMdRainy, IoMdSnow, IoMdSunny, IoMdThunderstorm } from 'react-icons/io'
import { BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye } from 'react-icons/bs'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { ImSpinner8 } from 'react-icons/im'
import axios from 'axios'

const APIkey = '43af416031555d2d65dd1a3ecf91e888'

const App = () => {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState('Vietnam')

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`

    axios.get(url).then((res) => {
      setData(res.data)
    })
  }, [location])

  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className='text-5xl animate-spin' />
        </div>
      </div>
    )
  }

  let icon

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />
      break
    case 'Haze':
      icon = <BsCloudHaze2Fill />
      break
    case 'Rain':
      icon = <IoMdRainy />
      break
    case 'Clear':
      icon = <IoMdSunny />
      break
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />
      break
    case 'Snow':
      icon = <IoMdSnow />
      break
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />
      break
    default:
      break
  }

  const date = new Date()

  return (
    <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover flex flex-col 
      items-center justify-center px-4 lg:px-0'>
      <form>form</form>
      <div className='w-full max-w-[450px] bg-black/20 min-h-[584px] text-white 
      backdrop-blur-[32px] rounded-[32px] py-12 px-6'>
        <div>
          <div className='flex items-center gap-x-5'>
            <div className='text-[87px]'>{icon}</div>
            <div>
              <div className='text-2xl font-semibold'>
                {data.name}, {data.sys.country}
              </div>
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1} / {date.getUTCFullYear()}
              </div>
            </div>
          </div>
          <div className='my-20'>
            <div className='flex justify-center'>
              <div className='text-[144px] leading-none font-light'>
                {parseInt(data.main.temp)}
              </div>
              <div className='text-4xl'>
                <TbTemperatureCelsius />
              </div>
            </div>
            <div className='capitalize text-center'>
              {data.weather[0].description}
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-2'>
                <div className='text-[20px]'>
                  <BsEye />
                </div>
                <div>
                  Visibility {' '}
                  <span className='ml-2'>{data.visibility / 1000} km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App