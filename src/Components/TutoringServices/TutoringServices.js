import React from 'react';
import '../TutoringServices/TutoringServices.css';
import TrustPilot from '../../Assets/TrustPilot.png';
import Google from '../../Assets/Google.png';

function TutoringServices() {
  return (
    <div className='Content'>
      <div className='mb-5 w-100'>
        <h3 className='mt-4'>Our Tutoring Services</h3>
        <div className='list p-3 row mx-auto'>
        <li className='listed-Content col-sm-3'>
            {/* <button className='list-btn'> */}
              ACT
              {/* </button> */}
        </li>
        <li className='listed-Content col-sm-3'>
           AP
            {/* <button className='list-btn'></button> */}
        </li>
        <li className='listed-Content col-sm-3'>
        DEGITAL SAT
            {/* <button className='list-btn'></button> */}
        </li>
        <li className='listed-Content col-sm-3'>
        PSAT
            {/* <button className='list-btn'></button> */}
        </li>
        </div>
        <div className='TutoringServices-Img'>
            <img className='Ratings-img' src={TrustPilot} alt='TrustPilotRatings' />
            <img className='Ratings-img' src={Google} alt='GoogleRatings' />
        </div>
      </div>
    </div>
  )
}

export default TutoringServices
