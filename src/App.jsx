import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IoClose } from 'react-icons/io5';

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <>
        <Drawer anchor="right" open={opened} onClose={() => setOpened(false)}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '10px'
            }}
          >
            <IoClose
              className="io-close-btn"
              size="1.5rem"
              color="gray"
              onClick={() => setOpened(false)}
            />
          </div>
          <div className="drawer-wrapper" style={{ padding: '0px 40px' }}>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
          </div>
        </Drawer>

        <div className="nav-wrapper">
          <nav>
            <h1>Logo here</h1>

            <div className="desktop-right-nav">
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
            </div>
            <div className="mobile-right-nav">
              <div>Click to open the drawer &rarr;</div>
              <GiHamburgerMenu
                onClick={() => setOpened((prev) => !prev)}
                className="gi-hamburger-menu"
                size="1.5rem"
              />
            </div>
          </nav>
          <div className="contact-us-wrapper">
            <div className="contact-us-wrapper-inner">
              <button className="contact-us-btn">Contact Us</button>
              <FaSearch />
            </div>
          </div>
          <div className="career-opportunities-wrapper">
            <div className="career-opportunities">Career Opportunities</div>
          </div>
        </div>

        <div className="h2-header-wrapper-outer">
          <div className="h2-header-wrapper">
            <div>
              <div>
                <h2 className="custom-web-header">
                  Made By Andres Flores, using React
                </h2>
                <p>
                  This page is responsive for mobile and desktop devices. It's a
                  mock page made to show off my development skills. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Ex natus iusto
                  voluptate blanditiis? Earum, aut consequatur iusto voluptas
                  maxime doloribus?
                </p>
              </div>
              <button className="view-portfolio-btn">View Portfolio</button>
            </div>
            <div className="website-wrapper">
              <div className="website-wrapper-inner">Slideshow goes here</div>
            </div>
          </div>
        </div>

        <div className="our-solutions-wrapper-outer">
          <div className="our-solutions-wrapper">
            <div>
              <div className="left-solution-card-wrapper">
                <div className="card-wrapper-1">
                  <div></div>
                  <div></div>
                </div>
                <div className="card-wrapper-2">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <h2 className="our-solutions-header">Our Solutions</h2>
                    <p className="our-solutions-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur placeat, alias aliquam, ratione cupiditate
                      maxime provident, est illo voluptates vel eos pariatur
                      voluptatibus sed similique dignissimos obcaecati. Saepe
                      ipsam, omnis esse delectus exercitationem cupiditate
                      voluptas molestias, laudantium consequatur, laborum
                      aliquid.
                    </p>
                  </div>
                  <button className="more-information-btn">
                    More Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
