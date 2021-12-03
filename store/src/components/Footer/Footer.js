import React from 'react'

import './Footer.scss';
import logoSub from '../../assets/images/logo.svg';
import {socialLinks} from "../../mock";

export const Footer = () => {
    const today = new Date();

    return (
        <footer className='footer'>
            <div className='backgroundLogoLinks'>
                <div className='container logoLinks'>
                    <div className='logoFooter'>
                        <img src={logoSub} alt='Justice Cream' />
                    </div>
                    <div className='linksFooter'>
                        {
                            socialLinks.map((link) => (
                                <a href={link.link}>{link.innerText}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='copyrights'>
                <div className='container alignedCopy'>
                    © {today.getFullYear()} Justice-team. All rights reserved.
                </div>
            </div>
        </footer>
    )
}