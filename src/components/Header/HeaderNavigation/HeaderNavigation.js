import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const HeaderNavigation = () => {
    const { user, logOut } = useAuth();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const location = useLocation();
    const url_slug = location.pathname;
    return (
        <>
            {!url_slug.includes('/dashboard') && <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/">

                            <span className="uppercase font-medium hover:bg-red-200">Glossy Glasses</span>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-4 py-1 border border-solid border-transparent rounded bg-gray-300 text-white block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {navbarOpen ? <FontAwesomeIcon icon={faWindowClose} /> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="md:mr-2 font-medium hover:bg-red-200 rounded-full py-2 px-3">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="md:mr-2 font-medium  hover:bg-red-200 rounded-full py-2 px-3">Products</Link>
                            </li>

                            {user.email && <li className="nav-item">
                                <Link to="/manage-orders" className="md:mr-2 font-medium hover:bg-red-200 rounded-full py-2 px-3">Manage Order</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link to="/my-orders" className="md:mr-2 font-medium hover:bg-red-200 rounded-full py-2 px-3">My Order</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link to="/dashboard" className="md:mr-2 font-medium hover:bg-red-200 rounded-full py-2 px-3">Dashboard</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <button onClick={logOut}>Logout</button>
                            </li>}

                        </ul>
                    </div>
                </div>
            </nav>}
        </>
    );
};

export default HeaderNavigation;