import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menu, setMenu] = useState(false);

    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {(menu === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
                    onClick={() => { setMenu(true) }}
                >
                    <img src={Bars} alt="" className='menu-icon' />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li >
                        <Link onClick={() => { setMenu(false) }} to="hero" span={true} smooth={true}>Home</Link>
                    </li>
                    <li >
                        <Link onClick={() => { setMenu(false) }} to="programs" span={true} smooth={true}>Programs</Link>
                    </li>
                    <li onClick={() => { setMenu(false) }}>
                        <Link onClick={() => { setMenu(false) }} to="reasons" span={true} smooth={true}>Why us</Link>
                    </li>
                    <li >
                        <Link onClick={() => { setMenu(false) }} to="plans" span={true} smooth={true}>Plans</Link>
                    </li>
                    <li>
                        <Link onClick={() => { setMenu(false) }} to='testimonials' span={true} smooth={true}>Testimonials</Link>
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header;