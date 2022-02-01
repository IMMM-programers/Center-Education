// import React from 'react'
// import { Carousel } from 'react-bootstrap'

// function CourseSlider() {
//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item interval={1000} style={{ width: '50%' }}>
//           <img
//             className="d-block w-100"
//             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             {/* <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={500} style={{ width: '50%' }}>
//           <img
//             className="d-block w-100"
//             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             {/* <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{ width: '50%' }}>
//           <img
//             className="d-block w-100"
//             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             {/* <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p> */}
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   )
// }

// export default CourseSlider

import React, { Component } from 'react'
import Slider from 'react-slick'

import { Link } from 'react-router-dom'
// import '../home/Home.css'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
    }
    return (
      <div className="course">
        <div className="row">
          <div className="section-title text-center">
            <h2>
              <span>popular</span> courses
            </h2>
          </div>
        </div>
        <div className="">
          <Slider {...settings}>
            <div className="course-item">
              <Link to="#">
                <div className="course-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="course-img"
                  />
                  <div className="layer"></div>
                  <div className="course-price">$125</div>
                </div>
                <div className="course-info">
                  <h3>javascript</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <h5>10 lecture</h5>
                </div>
              </Link>
            </div>
            <div className="course-item">
              <Link to="#">
                <div className="course-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="course-img"
                  />
                  <div className="layer"></div>
                  <div className="course-price">$125</div>
                </div>
                <div className="course-info">
                  <h3>javascript</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <h5>10 lecture</h5>
                </div>
              </Link>
            </div>
            <div className="course-item">
              <Link to="#">
                <div className="course-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="course-img"
                  />
                  <div className="layer"></div>
                  <div className="course-price">$125</div>
                </div>
                <div className="course-info">
                  <h3>javascript</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <h5>10 lecture</h5>
                </div>
              </Link>
            </div>
            <div className="course-item">
              <Link to="#">
                <div className="course-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="course-img"
                  />
                  <div className="layer"></div>
                  <div className="course-price">$125</div>
                </div>
                <div className="course-info">
                  <h3>javascript</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <h5>10 lecture</h5>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
