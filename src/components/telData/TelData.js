import telData from '../../assets/images/Telematics-data.png'
import telData2 from '../../assets/images/Telematics-data-2.png'

import './tel-data.css'

const TelData = () => {
  return (
    <>
      <img className='tel-data_img' src={telData} alt='telematics data' />
      <div className='data-wrapper'>
        <div className='res_data'>
          <p>
            Start time: <span>06:30</span>
          </p>
          <p>
            End time: <span>13:30</span>
          </p>
          <p>
            Odometer: <span>12679 meters</span>
          </p>
          <p>
            Driver: <span>Spiro Kufojanakis</span>
          </p>
          <p>
            Fuel: <span>34 gal</span>
          </p>
        </div>
        <img src={telData2} alt='telematics data' />
      </div>
    </>
  )
}

export default TelData
