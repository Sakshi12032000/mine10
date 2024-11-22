import React from 'react';
import '../WhyShouldYou/WhyShouldYou.css';
import graduate_img from '../../Assets/graduate-img.svg';
import Tutor_img from '../../Assets/tutor.png';
import Students_img from '../../Assets/Students.svg';
import live_img from '../../Assets/live.svg';
import img_left from '../../Assets/img-left.png';
import img_right from '../../Assets/img-right.png';

function WhyShouldYou() {
  return (
    <div className=''>
      <div className='WhyShouldYou-Container'>
        <div className='Container-dIV'>
        <img className='dIV-left' src={img_left} alt='' />
        <div className='WhyShouldYou-heading'>
            <h3>Why should you consider us?</h3>
            <div className='WhyShouldYou-subHeading'>Our stats speak for itself</div>
        </div>
        <img className='dIV-right' src={img_right} alt='' />
        </div>
        <div className='WhyShouldYou-Content row col-12'>
            <div className='Content1 col-2'>
                <div className='Content1-heading'>10K+</div>
                <div className=''>Happy Learners</div>
                <div className=''>
                <img className='live-img' src={graduate_img} alt='' />
                </div>
            </div>
            <div className='Content1 col-2'>
                <div className='Content1-heading'>500+</div>
                <div>Expert Tutors</div>
                <div className=''>
                <img className='live-img' src={Tutor_img} alt='' />
                </div>
            </div>
            <div className='Content1 col-2'>
                <div className='Content1-heading'>400k+</div>
                <div className=''>Hours of Live Tutoring</div>
                <div className=''>
                    <img className='live-img' src={live_img} alt='' />
                </div>
            </div>
            <div className='Content1 col-2'>
                <div className='Content1-heading'>97%</div>
                <div className=''>Of the students improved their grades</div>
                <div className='loader'></div>
            </div>
            <div className='Content1 col-2'>
                <div className='Content1-heading'>4/5</div>
                <div className=''>Students get admit from tier 1 universities</div>
                <div className=''>
                <img className='live-img' src={Students_img} alt='' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyShouldYou
