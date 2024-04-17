import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <nav className={'footer_nav'}>
                <ul className={'footer_nav-list'}>
                    <li className={'footer_nav-item'}>

                        <Link to="/" className={'footer_nav-link'}>
                            <img className={'footer_nav-img'} src={'./media/house-solid.svg'} alt={'home'}/>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className={'footer_nav-item'}>
                        <Link to="/referral" className={'footer_nav-link'}>
                            <img className={'footer_nav-img'} src={'./media/people-line-solid.svg'} alt={'people'}/>
                            <p>Referrals</p>
                        </Link>
                    </li>
                    <li className={'footer_nav-item'}>
                        <Link to="/boost" className={'footer_nav-link'}>
                            <img className={'footer_nav-img'} src={'./media/rocket-solid.svg'} alt={'rocket'}/>
                            <p>Boost</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
