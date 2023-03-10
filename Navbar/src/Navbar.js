import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // linksRef is a reference to a DOM element, created using the useRef hook.
    // linksRef.current is used to get the current value of the linksRef object, which is a reference to the DOM element.
    // .getBoundingClientRect() is a method of DOM elements that returns a DOMRect object containing information about the size and position of the element relative to the viewport.
    // .height is a property of the DOMRect object that returns the height of the element in pixels.
    // The result of linksRef.current.getBoundingClientRect().height is assigned to the linksHeight constant.
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      // showLinks is a boolean state variable that determines whether or not to show the links in the container element.
      // linksContainerRef is a reference to the container element, created using the useRef hook.
      // linksContainerRef.current is used to get the current value of the linksContainerRef object, which is a reference to the container element.
      // .style is a property of DOM elements that represents the inline style of the element.
      // .height is a CSS property that sets the height of the element in pixels.
      // ${linksHeight}px is a string template that sets the height of the container element to the height of its contents, plus "px" to specify the unit of measurement.
      // The result of ${linksHeight}px is assigned to the style.height property of linksContainerRef.current.
    } else {
      linksContainerRef.current.style.height = "0px";
      // If showLinks is false, the height of linksContainerRef.current is set to 0px, hiding its contents.
    }
  }, [showLinks]);
  // The dependency array [showLinks] specifies that the useEffect hook
  // should only run when the showLinks state variable changes.
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
