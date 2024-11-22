import React, { useEffect, useState } from 'react';
import '../StudentsReview/StudentsReview.css';

function StudentsReview() {
    const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(()=>{
    if(selectedIndex===-1){
      setSelectedIndex(StudentsReviewData?.length-1)
    }
    else if(selectedIndex===StudentsReviewData?.length){
      setSelectedIndex(0)
    }
  },[selectedIndex])
  const StudentsReviewData = [
    {
      heading:"Thank you Aniketh",
      para:"Thank you for such a excellent Mathematics Teacher. Thank you supervising my son's work and helped him improved & give your honest opininon, you showed confidence in my child snd helped him thrive in particular subject. Thanks a lot for helping realising his potential",
      name:"Hema Chaudhari",
      date:"June, 07 2024",
    },
    {
        heading:"Teachers are great for our children",
        para:"Thank you for such a excellent Mathematics Teacher. Thank you supervising my son's work and helped him improved & give your honest opininon, you showed confidence in my child snd helped him thrive in particular subject. Thanks a lot for helping realising his potential",
        name:"Hema Chaudhari",
        date:"June, 07 2024",
      },
      {
        heading:"Good service and staff",
        para:"Thank you for such a excellent Mathematics Teacher. Thank you supervising my son's work and helped him improved & give your honest opininon, you showed confidence in my child snd helped him thrive in particular subject. Thanks a lot for helping realising his potential",
        name:"Hema Chaudhari",
        date:"June, 07 2024",
      },
      {
        heading:"I started this year with Lurnigo…",
        para:"Thank you for such a excellent Mathematics Teacher. Thank you supervising my son's work and helped him improved & give your honest opininon, you showed confidence in my child snd helped him thrive in particular subject. Thanks a lot for helping realising his potential",
        name:"Hema Chaudhari",
        date:"June, 07 2024",
      },
  ];
  return (
    <div>
      <div className='SR-Contains'>
        <div className='StudentsReview-ContentBox'>
            <h3 className='m-2'>Our students Reviews</h3>
            <div className='StudentsReview-subHeading'>Begin your learning journey with a Lurnigo tutor in just three easy steps.</div>
           {/* { StudentsReviewData ? 
           <div className='StudentsReview-Container'>
               <div className=''>
                <div className='star-icon'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
               <h1 className='Card-heading'>{StudentsReviewData[selectedIndex]?.heading}</h1>
                <p className='Card-para'>{StudentsReviewData[selectedIndex]?.para}</p>
                <div className='mb-2'>
                <a className='Link-link' target='_blank' rel='noopener noreferrer' href="https://www.trustpilot.com/reviews/660809aa2e6142f00ad8ac48">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style={{color: "#3cdc3c"}}>
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Trustpilot</a>
                </div>
                <span className='Card-name'>{StudentsReviewData[selectedIndex]?.name}</span> <br/>
                <span className='Card-date'>{StudentsReviewData[selectedIndex]?.date}</span>
               </div>
               <div className='d-flex justify-content-between align-items-center'>
            <button className='Btn' onClick={() => setSelectedIndex(selectedIndex - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 20">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
            </button>
            <button className='Btn' onClick={() => setSelectedIndex(selectedIndex + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 20">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                   </svg>
            </button>
            </div>
            </div>
            : null} */}


        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-inner">
             <div class="carousel-item active">
               <div className='w-100'>
               <div className='StudentsReview-Container'>
               <div className=''>
                <div className='star-icon'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
               <h1 className='Card-heading'>{StudentsReviewData[selectedIndex]?.heading}</h1>
                <p className='Card-para'>{StudentsReviewData[selectedIndex]?.para}</p>
                <div className='mb-2'>
                <a className='Link-link' target='_blank' rel='noopener noreferrer' href="https://www.trustpilot.com/reviews/660809aa2e6142f00ad8ac48">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style={{color: "#3cdc3c"}}>
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Trustpilot</a>
                </div>
                <span className='Card-name'>{StudentsReviewData[selectedIndex]?.name}</span> <br/>
                <span className='Card-date'>{StudentsReviewData[selectedIndex]?.date}</span>
               </div>
              </div>
              </div>
              </div>
           <div class="carousel-item">
               <div className='StudentsReview-Container'>
               <div className=''>
                <div className='star-icon'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
               <h1 className='Card-heading'>Teachers are great for our children</h1>
                <p className='Card-para'>{StudentsReviewData[selectedIndex]?.para}</p>
                <div className='mb-2'>
                <a className='Link-link' target='_blank' rel='noopener noreferrer' href="https://www.trustpilot.com/reviews/660809aa2e6142f00ad8ac48">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style={{color: "#3cdc3c"}}>
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Trustpilot</a>
                </div>
                <span className='Card-name'>{StudentsReviewData[selectedIndex]?.name}</span> <br/>
                <span className='Card-date'>{StudentsReviewData[selectedIndex]?.date}</span>
                </div>
                </div>
                </div>
               <div class="carousel-item">
               <div className='StudentsReview-Container'>
               <div className=''>
                <div className='star-icon'>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
               <h1 className='Card-heading'>Good service and staff</h1>
                <p className='Card-para'>{StudentsReviewData[selectedIndex]?.para}</p>
                <div className='mb-2'>
                <a className='Link-link' target='_blank' rel='noopener noreferrer' href="https://www.trustpilot.com/reviews/660809aa2e6142f00ad8ac48">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style={{color: "#3cdc3c"}}>
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Trustpilot</a>
                </div>
                <span className='Card-name'>{StudentsReviewData[selectedIndex]?.name}</span> <br/>
                <span className='Card-date'>{StudentsReviewData[selectedIndex]?.date}</span>
               </div>
            </div>
            </div>
            </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
            </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
               </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsReview
