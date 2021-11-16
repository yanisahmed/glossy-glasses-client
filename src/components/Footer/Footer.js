import React from 'react';
import { useLocation } from 'react-router';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterMain from './FooterMain/FooterMain';

const Footer = () => {
    const location = useLocation();
    const url_slug = location.pathname;
    return (
        <>
            {!url_slug.includes('/dashboard') && <footer className="bg-gray-900 pt-16 px-2">
                <FooterMain />
                <FooterBottom />
            </footer>}
        </>
    );
};

export default Footer;