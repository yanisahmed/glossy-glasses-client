import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {


    const { signInUsingEmail, singInUsingGoogle, loginError, isLoading } = useAuth();

    const { register, handleSubmit } = useForm();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () => {
        singInUsingGoogle(location, history);

    }

    const onSubmit = data => {
        const { email, password } = data;
        signInUsingEmail(email, password, location, history);
    };


    return (
        <div className="my-4">
            <SectionTitle title="Login" />
            <div className="md:flex  justify-evenly items-center" style={{ height: '400px' }}>
                <div className="w-full max-w-xs">
                    {!isLoading && <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" {...register("email")} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" {...register("password")} />

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                <Link to="/register">Not yet registered?</Link>
                            </span>

                        </div>
                    </form>}
                    {isLoading && <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-24 w-3/12 rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>}
                    {loginError && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Holy smokes!</strong>
                        <span class="block sm:inline">{loginError}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                    }

                </div>
                <div>
                    <button onClick={handleGoogleLogin} className="bg-green-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;