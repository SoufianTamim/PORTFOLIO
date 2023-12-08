import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";

const SendEmail = () => {
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tamim.soufian.solicode@gmail.com",
        Password : "70D178ACADD0DBD76A3F21E22CC24372EB65",
        To : 'job@tamimsoufian.com',
        From : 'tamim.soufian.solicode@gmail.com',
        Subject : "New contact from the portfolio",
        Body : "NAME : " + document.getElementById('name').value +
        " <br> EMAIL : " + document.getElementById('email').value +
        " <br> SUBJECT : " +  document.getElementById('subject').value + 
        " <br> MESSAGE : " + document.getElementById('message').value 

        
    }).then(
   

      message => alert(message)
    );

    console.log("NAME : " + document.getElementById('name').value +
    " <br> EMAIL : " + document.getElementById('email').value +
    " <br> SUBJECT : " +  document.getElementById('subject').value + 
    " <br> MESSAGE : " + document.getElementById('message').value  )
};



const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
    SendEmail();
  };


  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section className="lui-section lui-section-hero lui-gradient-top" id="started-section">
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div className="content scrolla-element-anim-1 scroll-animate" data-animate="active">
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1 className="title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                    <span>
                      <b>Soufian</b> Tamim{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am a <strong>Web Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>I am a web developer specializing in PHP, Laravel, and React. I have a wealth of experience in web development and I am particularly passionate about building dynamic web applications. I would love to discuss how I can contribute to your company and bring my expertise to your team.</p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/soufian-tamim/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://github.com/SoufianTamim">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a target="_blank" href="https://drive.google.com/file/d/1wdzJMxPxI5-f2jXBCJgFqmBX55CdfAhd/view?usp=sharing" className="btn">
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div className="slide scrolla-element-anim-1 scroll-animate" data-animate="active">
                <img decoding="async" src="assets/images/pro-2.png" alt="my image" />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        2 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">12</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section className="lui-section lui-gradient-bottom" id="services-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> What I Do </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper {...servicesSliderProps} className="swiper-container js-services scrolla-element-anim-1 scroll-animate" data-animate="active">
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Web Design &amp; Logo </span>
                  </h5>
                  <div className="lui-text">
                    <div> Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business, Company, or Personal. </div>
                  </div>

                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Front-end web development </span>
                  </h5>
                  <div className="lui-text">
                    <div> provide top-notch frontend web development services, crafting visually appealing and user-friendly websites to help businesses thrive online.</div>
                  </div>

                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Back-end web development </span>
                  </h5>
                  <div className="lui-text">
                    <div> provide professional backend web development services, ensuring robust server-side functionality to power your web applications.</div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Wordpress development </span>
                  </h5>
                  <div className="lui-text">
                    <div>provide professional WordPress development services using Divi, Elementor, and WooCommerce to create stunning and functional websites tailored to your needs.</div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Professional Skills </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> PHP </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong proficiency in PHP, capable of developing dynamic web applications and websites with ease.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> WordPress </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong skill in WordPress, proficient in designing and managing websites with a keen eye for customization and functionality.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong proficiency in JavaScript and can confidently tackle a wide range of web development tasks.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> React </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong skill in React, proficient in building responsive web apps with a deep understanding of its core concepts and components.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> HTML / CSS </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong proficiency in HTML and CSS, enabling to create appealing and responsive web designs.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div>
                  </div>

                  <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <h6 className="name">
                      <span> LARAVEL </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>strong skill in Laravel, a popular PHP framework, allowing me to develop robust and efficient web applications with ease.</p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Portfolio </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* Section - Testimonials */}
      {/* <section className="lui-section lui-gradient-center" id="testimonials-section">
        {/* Heading */}
      {/* <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Testimonials </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  what <b>Customers Say</b>
                </span>
              </div>
            </div>
          </div>
        </div> */}
      {/* Testimonials */}
      {/* <div className="v-line v-line-right">
          <div className="container">
            <Swiper {...testimonialsSliderProps} className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate" data-animate="active">
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src="assets/images/testi4-2.jpg" alt="Barbara Wilson" />
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="34px">
                        <path fillRule="evenodd" strokeWidth="2px" stroke="rgb(0, 0, 0)" fill="rgb(41, 165, 135)" d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>I had the pleasure of working with Soufian Tamim on a recent web development project, and I couldn't be happier with the results. Soufian's attention to detail and expertise in front-end and back-end development truly impressed me. The website he built for my business is not only visually stunning but also functions seamlessly. I highly recommend Soufian for any web development needs.</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Barbara Wilson</span>
                    </h6>
                    <div className="author">
                      <span>CEO Company</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src="assets/images/testi4-1.jpg" alt="Charlie Smith" />
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="34px">
                        <path fillRule="evenodd" strokeWidth="2px" stroke="rgb(0, 0, 0)" fill="rgb(41, 165, 135)" d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>Soufian Tamim is a web development wizard! He took my vision for a complex e-commerce site and turned it into a reality. Soufian's ability to write clean, efficient code and his dedication to meeting deadlines made the entire process smooth and stress-free. I'm extremely satisfied with his work and will definitely hire him again for future projects.</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Charlie Smith</span>
                    </h6>
                    <div className="author">
                      <span>Designer</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src="assets/images/testi4-4.jpg" alt="Roy Wang" />
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="34px">
                        <path fillRule="evenodd" strokeWidth="2px" stroke="rgb(0, 0, 0)" fill="rgb(41, 165, 135)" d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>Working with Soufian Tamim was a game-changer for my online presence. His web development skills transformed my outdated website into a modern, user-friendly platform. Soufian's communication throughout the project was exceptional, and he was always willing to go the extra mile to ensure my satisfaction. I can't thank him enough for his talent and professionalism.</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Roy Wang</span>
                    </h6>
                    <div className="author">
                      <span>Manager GYM</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src="assets/images/testi4-3.jpg" alt="Jennifer Smith" />
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="34px">
                        <path fillRule="evenodd" strokeWidth="2px" stroke="rgb(0, 0, 0)" fill="rgb(41, 165, 135)" d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>Soufian Tamim is a true web development genius! He took my vague ideas and turned them into a beautifully designed and fully functional website. Soufian's problem-solving abilities and coding expertise are second to none. He made sure every feature I wanted was implemented flawlessly. I couldn't have asked for a better web developer.</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Jennifer Smith</span>
                    </h6>
                    <div className="author">
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src="assets/images/testi4-5.jpg" alt="Paul Freeman" />
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="34px">
                        <path fillRule="evenodd" strokeWidth="2px" stroke="rgb(0, 0, 0)" fill="rgb(41, 165, 135)" d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>I had the pleasure of collaborating with Soufian Tamim on a web development project, and I was thoroughly impressed by his skills and dedication. Soufian not only created a stunning website but also optimized it for speed and performance. His attention to detail and commitment to delivering a high-quality product set him apart from other developers I've worked with. I highly recommend Soufian for any web development project.</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Paul Freeman</span>
                    </h6>
                    <div className="author">
                      <span>Photographer</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Reviews </span>
            </div>
          </div>
        </div> */}
      {/* </section> */}
      {/* Section - Pricing */}
      {/* <section className="lui-section lui-gradient-center" id="pricing-section"> */}
      {/* Heading */}
      {/* <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Pricing </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  my <b>Price Board</b>
                </span>
              </div>
            </div>
          </div>
        </div> */}
      {/* Pricing */}
      {/* <div className="v-line v-line-left">
          <div className="container">
            <div className="pricing-items row">
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="lui-subtitle">
                    <span> Hourley Basis </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      39 <b>$</b>
                    </span>
                    <em>Hour</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <em>Advertising</em>
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="label">
                  <span> Popular </span>
                </div>
                <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="lui-subtitle">
                    <span> Freelancing </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      259 <b>$</b>
                    </span>
                    <em>Week</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="lui-subtitle">
                    <span> Full Time </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      1.249 <b>$</b>
                    </span>
                    <em>Month</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Photography
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Pricing </span>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section - Blog */}
      <section className="lui-section lui-gradient-top" id="blog-section">
        {/* Heading
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Latest Blog </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        Archive
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img decoding="async" src="assets/images/single7.jpg" alt="The Main Thing For The Designer" />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>The Main Thing For The Designer</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget… </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img decoding="async" src="assets/images/blog-4-scaled-1.jpg" alt="Follow Your Own Design Process" />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Follow Your Own Design Process</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget… </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img decoding="async" src="assets/images/blog-2.jpg" alt="Usability Secrets to Create Better Interfaces" />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>November 28, 2021</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Usability Secrets to Create Better Interfaces</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget… </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-more">
              <Link legacyBehavior href="/blog">
                <a className="btn scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <span>View Blog</span>
                </a>
              </Link>
            </div>
            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div> */}
      </section>
      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span> Contact Me </span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  {/* <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span> Tangier, Morocco </span>
                    </div>
                  </div> */}
                  <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelance </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div>
                  <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span>
                        {" "}
                        <a href="mailto:job@tamimsoufian.com"> job@tamimsoufian.com </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span>
                        {" "}
                        <a href="tel:+212677846064"> +212 6 77 84 60 64 </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="contacts-form scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={handleSubmit} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" id="name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" id="email" name="email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" id="subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" id="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">* Accept the terms and conditions.</div>

                          <button type="submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
