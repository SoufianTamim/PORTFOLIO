import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        {/* <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Web Development
          </a>
        </div> */}

        {/* 
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
*/}

        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://tbike.tamimsoufian.com/">
                    <a>
                      <img decoding="async" src="assets/images/sites/tbike.png" alt="tbike" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Laravel , Bike renting </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://tbike.tamimsoufian.com/">
                    <a>T-Bike</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>In my final year project, I skillfully employed Laravel to create a dynamic and secure website. From database integration to crafting intuitive user interfaces, every aspect reflects my commitment to excellence. The result is a seamlessly functional site that exceeds expectations in both performance and user satisfaction.</p>
                </div>
                <Link legacyBehavior href="https://tbike.tamimsoufian.com/" target="_blank">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* 
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
========================================================================================================================================
*/}

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/">
                    <a>
                      <img decoding="async" src="assets/images/sites/portfolio.png" alt="port file" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> nextJS, Portfolio </span>
                <h5 className="name">
                  <Link legacyBehavior href="/">
                    <a>Porfolio Soufian Tamim</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Powered by Next.js and React, this showcase reflects my skills in modern web development. Experience seamless navigation and interactive interfaces that demonstrate my proficiency in crafting engaging user experiences. Dive deeper to discover how I blend creativity with technical expertise, creating digital solutions that stand out in the web development.</p>
                </div>
                <Link legacyBehavior href="/">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.maestro45.fr/">
                    <a>
                      <img decoding="async" src="assets/images/sites/maestro.png" alt="Explore" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Wordpress , Divi </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.maestro45.fr/">
                    <a>MAESTRO - RESTAURANT </a>
                  </Link>
                </h5>
                <div className="text">
                  <p>The digital gateway to a culinary adventure! This website, crafted for speed and flavor, invites you to explore a diverse menu featuring quick, savory delights. Immerse yourself in the fusion of culinary excellence and efficiency, where every click unveils a world of gastronomic satisfaction. An online dining experience with Maestro a journey into culinary innovation.</p>
                </div>
                <Link legacyBehavior href="https://www.maestro45.fr/">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.meilantherapy.fr/">
                    <a>
                      <img decoding="async" src="assets/images/sites/therapy.png" alt="Mozar" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Wordpress , Divi </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.meilantherapy.fr/">
                    <a>MEÏ-LAN - THÉRAPY</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>MEÏ-LAN - THÉRAPY: Your haven for holistic well-being. Experience personalized therapies blending ancient practices with modern techniques, guided by skilled practitioners. Embrace self-care and find inner harmony in our transformative space.</p>
                </div>
                <Link legacyBehavior href="https://www.meilantherapy.fr/">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="top-demenagement.com">
                    <a>
                      <img decoding="async" src="assets/images/sites/dtd.png" alt="Stay Fit" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Wordpress , Divi </span>
                <h5 className="name">
                  <Link legacyBehavior href="top-demenagement.com">
                    <a>DTD DÉMÉNAGEMENT - TOUTE DISTANCE</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>DTD DÉMÉNAGEMENT - TOUTE DISTANCE: Your go-to for hassle-free moves, no matter the distance. Our experienced team ensures precision and care, making your relocation stress-free. Trust DTD for a smooth and dedicated moving experience.</p>
                </div>
                <Link legacyBehavior href="top-demenagement.com">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div className="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="happypiadalesangles.fr">
                    <a>
                      <img decoding="async" src="assets/images/sites/hp.png" alt="happy piada" />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Wordpress , Divi </span>
                <h5 className="name">
                  <Link legacyBehavior href="happypiadalesangles.fr">
                    <a>HAPPY PIADA - LES ANGLES</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>HAPPY PIADA, your go-to food truck in Vaucluse, brings the taste of Italy to Les Angles. Indulge in delicious and authentic piadinas, where fresh ingredients meet culinary craftsmanship on wheels. Savor a mobile dining experience that combines convenience with the delightful flavors of HAPPY PIADA.</p>
                </div>
                <Link legacyBehavior href="happypiadalesangles.fr">
                  <a className="lnk">See project online</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        <h5 className="splitting-text-anim-1 scroll-animate" style={{ textAlign: "center", marginTop: "50px" }} data-splitting="words" data-animate="active">
          <p>Most of these projects were built during my studies and in my free time. As for company projects, I signed confidentiality agreements, so I can’t showcase them publicly in my portfolio.</p>
        </h5>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="https://github.com/SoufianTamim?tab=repositories" target="_blank">
              <a className="btn scrolla-element-anim-1 scroll-animate" data-animate="active">
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
