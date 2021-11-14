import { faCcAmazonPay, faCcApplePay, faCcPaypal, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router';

const FooterBottom = () => {
    const location = useLocation();
    const url_slug = location.pathname;
    return (
        <>
            {!url_slug.includes('/dashboard') && <div className="container mx-auto border-t border-gray-50 py-4">
                <div className="grid md:grid-cols-2">
                    <div className="text-center mb-2 md:text-left md:md-0">
                        <span> <FontAwesomeIcon icon={faCcPaypal} className="text-white md:mr-2 text-4xl" /> </span>
                        <span> <FontAwesomeIcon icon={faCcAmazonPay} className="text-white md:mr-2 text-4xl" /> </span>
                        <span> <FontAwesomeIcon icon={faCcApplePay} className="text-white md:mr-2 text-4xl" /> </span>
                    </div>
                    <div className="text-center md:text-right">
                        <span> <FontAwesomeIcon icon={faFacebook} className="text-white md:mr-2 text-4xl" /> </span>
                        <span> <FontAwesomeIcon icon={faTwitter} className="text-white md:mr-2 text-4xl" /> </span>
                        <span> <FontAwesomeIcon icon={faInstagram} className="text-white md:mr-2 text-4xl" /> </span>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default FooterBottom;