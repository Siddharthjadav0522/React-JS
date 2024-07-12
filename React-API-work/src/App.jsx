import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import DogApi from './component/DogApi'
import WeatherApi from './component/WeatherApi'
import CoronaApi from './component/CoronaApi'


function App() {


  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
    <DogApi/> <br /><br />
    <WeatherApi/><br /><br />
    <CoronaApi/>
    </div>
  )
}

export default App
