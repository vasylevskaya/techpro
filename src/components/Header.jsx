import React, { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

import ua from "../data/_ua"
import { ROUTE_NAMES } from "../data/data"

import logo from "../media/logo-70.png"

const Header = () => {
  const { pathname } = useLocation()
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)
  const [isDrawerMenuVisible, setIsDrawerMenuVisible] = useState(false)
  const { header } = ua

  const HeaderLink = ({ link, label, onClick}) => (
    <Link to={link} className={`header_nav_link fs-12 txt-${pathname === link ? "green" : "white"}`} onClick={onClick}>
      {label}
    </Link>
  )

  useEffect(() => {
      const handleScroll = () => setIsHeaderTransparent(window.scrollY < 50)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const toggleDrawerMenu = (value) => setIsDrawerMenuVisible(value)

  return (
    <header className={`header ${isHeaderTransparent ? "bg-trans" : "bg-black"}`}>
      <img className="header_logo" src={logo} alt="logo" />
      <div className={`header_nav drawer-menu ${isDrawerMenuVisible && "active"}`}>
        <button className="header_menu-btn btn-close" onClick={() => toggleDrawerMenu(!isDrawerMenuVisible)}> </button>
        <HeaderLink link={ROUTE_NAMES.HOME} label={header.nav.home} onClick={() => toggleDrawerMenu(false)} />
        <HeaderLink link={ROUTE_NAMES.ABOUT_US} label={header.nav.about_us} onClick={() => toggleDrawerMenu(false)} />
        <HeaderLink link={ROUTE_NAMES.SERVISES} label={header.nav.services} onClick={() => toggleDrawerMenu(false)} />
        <HeaderLink link={ROUTE_NAMES.FEEDBACK} label={header.nav.feedback} onClick={() => toggleDrawerMenu(false)} />
        <HeaderLink link={ROUTE_NAMES.CONTACT_US} label={header.nav.contact} onClick={() => toggleDrawerMenu(false)} />
      </div>
      <button className="header_menu-btn btn-open" onClick={() => toggleDrawerMenu(!isDrawerMenuVisible)}> </button>
    </header>
  )
}

export default Header
