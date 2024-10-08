/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [open, setOpen] = useState(false);  // Toggle for mobile menu
    const [dropdown, setDropdown] = useState(null);  // Manage sub-dropdowns

    const products = useSelector(state => state.cart.products);
    const navigate = useNavigate();

    const Links = [
        { name: "Home", link: "" },
        { name: "Man's", link: "" },
        { name: "Women's", link: "" },
        { name: "Kid's", link: "" },
        { name: "Brands", link: "" }
    ];

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    };

    const openLogin = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    };

    const handleMenuClick = () => {
        setOpen(!open);
        setDropdown(null);
    };

    const toggleDropdown = (name) => {
        setDropdown(dropdown === name ? null : name);
        setOpen(true);  // Ensure the menu is open when dropdown is toggled
    };

    const closeMenu = () => {
        setOpen(false);
        setDropdown(null);
    };

    return (
        <>
            <div className='shadow-md w-full fixed top-0 left-0 mt-11 z-50 '>
                <div className='md:flex text-center bg-white py-1 md:px-10 px-7 items-center justify-between w-full'>
                    <div className='flex items-center bg-white py-4'>
                        <img src='/mainlogo.png' className='md:h-14 h-10' alt="logo" />
                    </div>
                    <div onClick={handleMenuClick} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </div>

                    {/* Mobile Menu */}
                    <ul className={`md:flex md:items-center md:py-0 py-4 md:static absolute bg-white md:z-auto z-[-1] w-full md:w-auto left-0 mt-2 transition-all duration-500 ease-in-out ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'} `}>
                        {Links.map((Link) => (
                            <li key={Link.name} className='md:ml-8 text-xl py-2  md:my-0 relative md:bg-gray-50 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 '>
                                <NavLink
                                    to={Link.link}
                                    onClick={['Home'].includes(Link.name) ? closeMenu : () => toggleDropdown(Link.name)}
                                    className='text-gray-800 hover:text-gray-400 duration-300 flex items-center justify-start mx-5 '
                                >
                                    {Link.name}
                                    {['Man\'s', 'Women\'s', 'Kid\'s', 'Brands'].includes(Link.name) && (
                                        <FaCaretDown className='ml-2 ' />
                                    )}
                                </NavLink>

                                {/* Sub-dropdowns */}
                                {dropdown === Link.name && (
                                    <ul className='md:absolute left-0  md:right-0 mt-2 bg-white   shadow-lg rounded-md   md:px-0 px-10 py-1 md:p-4 md:w-48 w-full md:text-left text-left'>
                                        {Link.name === "Man's" && (
                                            <>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1'>
                                                    <NavLink to="/men/menscasual" onClick={closeMenu}>Men Casual Wear</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1'>
                                                    <NavLink to="/men/tracksuits" onClick={closeMenu}>Men Tracksuits</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1'>
                                                    <NavLink to="/men/night-suits" onClick={closeMenu}>Men Night Suits</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1'>
                                                    <NavLink to="/men/Formal-dress" onClick={closeMenu}>Formal Dress</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1'>
                                                    <NavLink to="/men/Mens-shalwarKurta" onClick={closeMenu} >Shalwar Kameez</NavLink>
                                                </li>
                                            </>
                                        )}

                                        {/* Women Collection */}
                                        {Link.name === "Women's" && (
                                            <>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/women-abaya-collection" onClick={closeMenu}>Women Abaya</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/women-dupatta" onClick={closeMenu}>Women Dupatta</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/wformal" onClick={closeMenu}>Formal Dress</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/women-jeans" onClick={closeMenu}>Women Jeans</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/women-night-suits" onClick={closeMenu}>Women Night Suits</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/women/women-trouser" onClick={closeMenu}>Women Trouser</NavLink>
                                                </li>
                                                 <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                     <NavLink to="/women/women-shawls" onClick={closeMenu}>WomenShawls</NavLink>
                                                </li>
                                            </>
                                        )}

                                        {/* Kid's Collection */}
                                        {Link.name === "Kid's" && (
                                            <>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/kid/formal-dress" onClick={closeMenu}>Kid Formal Dress</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/kid/shirts" onClick={closeMenu}>Kid Shirts</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/kid/suits" onClick={closeMenu}>Kid Suits</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/kid/shalwar-kurta" onClick={closeMenu}>Kid Shalwar Kurta</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                  <NavLink to="/kid/shoes" onClick={closeMenu}>Kid Shoes</NavLink>
                                                </li>   
                                            </>
                                        )}

                                        {/* Brands */}
                                        {Link.name === "Brands" && (
                                            <>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/Branding/brand-alkaram" onClick={closeMenu}>Al Karam</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/Branding/brand-bonanza" onClick={closeMenu}>Bonanza Satrangi</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/Branding/brand-dinners" onClick={closeMenu}>Diners Brand</NavLink>
                                                </li>
                                                <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/Branding/brand-edenrobe" onClick={closeMenu}>Edenrobe</NavLink>
                                                </li>
                                                 <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                    <NavLink to="/brands/bGullahmed" onClick={closeMenu}>Gull Ahmed</NavLink>
                                                 </li>
                                                 <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                     <NavLink to="/brands/bJdot" onClick={closeMenu}>J.Dots</NavLink>
                                                 </li>
                                                 <li className='hover:bg-gray-50 md:text-xl  text-base shadow-sm  mx-4 m-1 '>
                                                  <NavLink to="/brands/bnishat" onClick={closeMenu}>Nishat</NavLink>
                                                 </li>
                                                 <li className='hover:bg-gray-50 md:text-xl text-base w-full  p-1 shadow-sm  md:mx-0  mx-4 m-1'>
                                                  <NavLink to="/brands/sana-safinaz" onClick={closeMenu}>Sana Safinaz</NavLink>
                                                 </li>
                                            </>
                                        )}
                                                {/* Add your dropdown items here */}
                                    </ul>
                                )}
                            </li>
                        ))}

                    
                    </ul>
                           
                        {/* Registration Section */}
                        <div className='md:flex text-center bg-white md:px-10 px-7 items-center justify-center space-x-4 '>
                            <button className='hidden md:block bg-blue-500 text-white py-3 px-5 rounded-md' onClick={openLogin}>
                                Sign In
                            </button>
                            <button className='hidden md:block bg-green-500 text-white py-3 px-5 rounded-md' onClick={openSignUp}>
                                Register
                            </button>
                        </div>
                        {/* Cart */}
                        <li className='md:mr-10 md:text-5xl text-3xl -my-2  flex justify-center'>
                            <NavLink to="/cart" className='text-gray-800 hover:text-gray-400 duration-300 flex items-center'>
                                <FaCartArrowDown className="mr-1" />
                                <span className="relative top-[-6px] left-[-6px] rounded-full bg-red-500 text-white text-xs px-1">
                                    {products.length}
                                </span>
                            </NavLink>
                        </li>
                </div>
            </div>

           {/* Modal for Login/Register */}
                      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                          {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
                      </Modal>

        </>
    );
};

export default Navbar;
