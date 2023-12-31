import React, { useState } from "react";

const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  }, 
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(prev => !prev);
  console.log(show);

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            portfolio
            <em>React</em>
          </a>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인메뉴">
          <ul>
            {
              headerNav.map((nav, idx) => <li key={idx}><a href={nav.url}>{nav.title}</a></li>)
            }
            {/* <li><a href="#intro">intro</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#port">portfolio</a></li>
            <li><a href="#contact">contact</a></li> */}
          </ul>
        </nav>
        <div 
          className="header__nav__mobile" 
          id="headerToggle"
          role="button"
          aria-controls="primary-menu"
          aria-expanded="false"
          tabIndex="0"
          onClick={() => toggleMenu()}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;