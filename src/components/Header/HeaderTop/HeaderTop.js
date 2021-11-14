import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const HeaderTop = () => {

    const { user } = useAuth();
    return (
        <>
            <div className="bg-gray-800">
                <div className="container mx-auto flex justify-between py-4 ">
                    <div>
                        {/* <span className="text-white"><SocialIcons></SocialIcons></span> */}
                        icons
                    </div>
                    <div>
                        {/* <span className="text-white">{!user.displayName ? "Welcome, Guest" : <span>Welcome, {user.displayName}</span>}</span> */}
                        <span><FontAwesomeIcon icon={faUser} className="text-white mr-2" /></span>
                        {!user.displayName ? <span>
                            <span className="text-white"><Link to="/login">Login</Link></span><span className="text-white">/</span><span className="text-white"><Link to="/register">Register</Link></span>
                        </span> : <span className="text-white font-bold">Welcome, {user.displayName}</span>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;