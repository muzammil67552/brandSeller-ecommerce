/* eslint-disable react/no-unescaped-entities */
import { FaFacebook,  FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    };

    const openLogin = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    };

    return (
        <>
            <footer className='bg-gray-900 text-white'>
                {/* Input for contact div */}
                <div className='md:flex md:justify-between md:items-center md:px-12 px-6 bg-[#ffffff19] py-8'>
                    <h1 className='lg:text-4xl text-3xl lg:leading-normal font-semibold md:w-2/5'>
                        <span className='text-teal-400'>Feel</span> Free To Contact Our Team For Your Desired Branding
                    </h1>
                    {/* Registration Section */}
                    <div className='md:flex text-center md:px-10  justify-center md:space-x-4 space-x-2  mt-4 md:mt-0'>
                        <button
                            className='bg-blue-500 text-white md:py-4 py-2 px-6 md:px-10 rounded-md text-xl'
                            onClick={openLogin}
                        >
                            Sign In
                        </button>
                        <button
                            className='bg-green-500 text-white md:py-4 py-2 px-6 md:px-10 rounded-md text-xl'
                            onClick={openSignUp}
                        >
                            Register
                        </button>
                    </div>
                </div>

                {/* Main footer section */}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-6 py-16 text-base md:text-xl'>
                    <div>
                        <h1 className='md:text-4xl text-2xl md:mx-7 mx-auto mb-4'>Brand's Seller</h1>
                        <p className='md:mx-7 mx-auto'>25/C 4th Floor Textile Plaza M.A Jinnah Road Karachi</p>
                        <a href="mailto:brandseller277@gmail.com" target="__jump"><p className='md:mx-7 mx-auto'>brandseller277@gmail.com</p></a>
                        <p className='md:mx-7 mx-auto'>0333-5081913</p>
                    </div>

                    <div>
                        <h1 className='md:text-3xl text-2xl mb-4'>Shopping & Categories</h1>
                        <p>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kid's Shopping</p>
                        <p>Branding's Shopping</p>
                        <p>Accessories Shopping</p>
                    </div>

                    <div>
                        <h1 className='md:text-3xl text-2xl mb-4'>Useful Links</h1>
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li>Contact Us</li>
                        </NavLink>
                    </div>

                    <div>
                        <h1 className='md:text-3xl text-2xl mb-4'>Our Brands</h1>
                        <p>GULL AHMED</p>
                        <p>BONANZA</p>
                        <p>Carina</p>
                        <p>AL KARAM</p>
                        <p>J.</p>
                        <p>SAYA</p>
                        <p>OTHERS</p>
                    </div>
                </div>

                {/* Copyright and Social Media Icons */}
                <div className='border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 text-gray-400 text-sm pb-8'>
                    <span className='md:text-xl'>© 2024 Apply All Right reserved</span>
                    <span className='md:text-xl'>Brand'Seller terms and Privacy</span>
                    <div className='space-x-8'>
                        <a href="https://www.facebook.com/profile.php?id=61552609697127" target="__jump">
                        <FaFacebook className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95' />
                        </a>

                        <a href="" target="__jump">
                        <FaInstagramSquare className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95' />
                        </a>

                        <a href="https://www.instagram.com/officialbrandseller?utm_source=qr&igsh=MWgwaGZzZ2R6ZXF6dw==" target="__jump">
                        <FaLinkedin className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95' />
                        </a>

                        <a href="" target="__jump">
                        <FaYoutube className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95' />
                        </a>
                    </div>
                </div>

                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
                </Modal>
            </footer>
        </>
    );
};

export default Footer;
