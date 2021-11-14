import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterMain from './FooterMain/FooterMain';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 px-2">
            <FooterMain />
            <FooterBottom />
        </footer>
    );
};

export default Footer;