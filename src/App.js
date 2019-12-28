import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import img1 from "../images/pic01.jpg";
import img2 from "../images/pic02.jpg";
import img3 from "../images/pic03.jpg";
import img4 from "../images/pic04.jpg";
import img5 from "../images/pic05.jpg";
import img6 from "../images/pic06.jpg";

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <div id="wrapper">
          {/* Header */}
          <header id="header" className="alt">
            <a href="/" className="logo"><strong>Alex</strong> </a>
            <nav> <a href="#menu">Menu</a> </nav>
          </header>
          {/* Menu */}
          <nav id="menu">
            <ul className="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="landing.html">Landing</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
            </ul>
            <ul className="actions stacked">
              <li><a href="#" className="button primary fit">Get Started</a></li>
              <li><a href="#" className="button fit">Log In</a></li>
            </ul>
          </nav>

          {/* Banner */}
          <section id="banner" className="major">
            <div className="inner">
              <header className="major">
                <h1>Aleksandar Nedelkovski</h1>
              </header>
              <div className="content">
                <p>I build apps for the web. I am a software engineer based in Chicago, IL specializing in building exceptional, high-quality websites and applications.</p>
              </div>
            </div>
          </section>

          {/* Main */}
          <div id="main">

            {/* One */}
            <section id="one" className="tiles">
              <article>
                <span className="image">
                  <img src={img1} alt="imgage1" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Aliquam</a></h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
              </article>
              <article>
                <span className="image">
                <img src={img2} alt="image2" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Tempus</a></h3>
                  <p>feugiat amet tempus</p>
                </header>
              </article>
              <article>
                <span className="image">
                <img src={img3} alt="image3" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Magna</a></h3>
                  <p>Lorem etiam nullam</p>
                </header>
              </article>
              <article>
                <span className="image">
                <img src={img4} alt="image4" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Ipsum</a></h3>
                  <p>Nisl sed aliquam</p>
                </header>
              </article>
              <article>
                <span className="image">
                  <img src={img5} alt="image5" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Consequat</a></h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
              </article>
              <article>
                <span className="image">
                <img src={img6} alt="image6" />
                </span>
                <header className="major">
                  <h3><a href="landing.html" className="link">Etiam</a></h3>
                  <p>Feugiat amet tempus</p>
                </header>
              </article>
            </section>

            {/* Two */}
            <section id="two">
              <div className="inner">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p> Creative full stack developer with a passion for designing fully functional, yet elegant web applications using JavaScript and TypeScript. My background in collaborating on a diverse team in The Difference Engine, combined with my technical development abilities, provides me with a unique skill set that I look forward to utilizing on a team of dedicated developers. As a lifelong learner and graduate from Coding Dojo, where I had the unique opportunity to develop my programming skills and expand my knowledge of modern software development methodologies. </p>
                <ul className="actions">
                  <li><a href="mailto:aleksn.dev@gmail.com" target="blank" className="button next">Get In Touch</a></li>
                </ul>
              </div>
            </section>

          </div>
          {/* Footer */}
          <footer id="footer">
            <div className="inner">
              <ul className="icons">
                <li><span class="label"><FontAwesomeIcon icon={faLinkedinIn} /></span></li>
                <li><span class="label"><FontAwesomeIcon icon={faGithub} /></span></li>
                <li><span class="label"><FontAwesomeIcon icon={faMailBulk} /></span></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;