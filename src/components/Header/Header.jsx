import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assents/img/nav.png'
function Header() {

    const [navAct, setNav] = useState(1);
  return (
    <header className='header'>
        <nav className="header__inner container">
            <ul className='header__list'>
                <li className='header__item '>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </li>
                <li onClick={()=>{setNav(1)}} className={navAct===1? 'header__item activeNav':'header__item'}>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li onClick={()=>{setNav(2)}} className={navAct===2? 'header__item activeNav':'header__item'}>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li onClick={()=>{setNav(3)}} className={navAct===3? 'header__item activeNav':'header__item'}>
                    <Link>Our Story</Link>
                </li>
                <li onClick={()=>{setNav(4)}} className={navAct===4? 'header__item activeNav':'header__item'}>
                    <Link><i className="bi bi-search"></i></Link>
                </li>
                <li onClick={()=>{setNav(5)}} className={navAct===5? 'header__item activeNav':'header__item'}>
                    <Link to='/cart'><i className="bi bi-cart3"></i></Link>
                </li>
                <li onClick={()=>{setNav(6)}} className={navAct==6? 'header__item activeNav':'header__item'}>
                    <Link><i className="bi bi-person"></i></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header