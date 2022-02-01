import React from 'react'
import { Link } from 'react-router-dom'

import CourseSlider from '../sliders/CourseSlider'

import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="dark-img"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="home-text">
                <h1>Best Mobile App Templete for your Business</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio laboriosam asperiores quasi cupiditate,
                  voluptatibus id vitae dolorum odit quaerat voluptatum nemo
                  dignissimos ut nesciunt esse suscipit repudiandae impedit, a
                  quis.
                </p>
              </div>
              <div className="home-btn">
                <a
                  href="sign-up.html"
                  data-scroll-goto="3"
                  className="btn btn-1"
                >
                  register
                </a>
                <button type="button" className="btn btn-1 register-btn">
                  <i className="fa fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseSlider />

      <section class="service section-padding text-center">
        <div class="img-back"></div>
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h2>services</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="service-img"
                />
                <h3>featured courses</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <Link href="#" class="btn btn-2">
                  click for more
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="service-img"
                />
                <h3>Translate to all languages</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button href="#" class="btn btn-2">
                  click for more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
