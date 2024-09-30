import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
    const [isModalOPen, setIsModalOPen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOPen(true);
    };

    const openLogin = () => {
        setIsLogin(true);
        setIsModalOPen(true);
    };
     
    const products = useSelector(state => state.cart.products);
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const navigate = useNavigate();

    const Links = [
        { name: "Home", link: "/" },
        { name: "Man's", link: "/men" },
        { name: "Women's", link: "/women" },
        { name: "Kid's", link: "/kids" },
        { name: "Brands", link: "/brands" },
        { name: "Contact", link: "/contact" },
    ];

    const handleMenuClick = () => {
        setOpen(!open);
        setDropdown(null);
    };

    const toggleDropdown = (name) => {
        setDropdown(dropdown === name ? null : name);
        setOpen(true);
    };

    const closeMenu = () => {
        setOpen(false);
        setDropdown(null);
    };

    return (
        <>
        <div className='shadow-md w-full fixed top-0 left-0 mt-11 z-50'>
            <div className='md:flex text-center bg-white py-1 md:px-10 px-7 items-center justify-center'>
                <div className='md:flex bg-white py-4'>
                    <span>
                        <img src='/mainlogo.png' className='md:h-14 md:mx-8 mx-4 h-10' alt="logo" />
                    </span>
                </div>
                <div onClick={handleMenuClick} className='text-3xl absolute right-8 w-10 top-6 cursor-pointer md:hidden'>
                    {open ? <IoClose /> : <GiHamburgerMenu />}
                </div>

                {/* Mobile Menu - Adjust the left alignment */}
                <ul className={`md:flex md:items-center items-center md:py-0 py-4 md:static absolute bg-white md:z-auto z-[-1] w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-20 left-0 opacity-100' : 'top-[-490px] left-[-100%] opacity-0 md:opacity-100'} `}>
                    {Links.map((Link) => (
                        <li key={Link.name} className='md:ml-8 text-xl my-2 md:my-0 relative'>
                            <NavLink
                                to={Link.link}
                                onClick={['Home', 'Contact'].includes(Link.name) ? closeMenu : () => toggleDropdown(Link.name)}
                                className='text-gray-800 hover:text-gray-400 duration-300 flex items-center justify-center'
                            >
                                {Link.name}
                                {['Man\'s', 'Women\'s', 'Kid\'s', 'Brands'].includes(Link.name) && (
                                    <BsChevronDown className='ml-2' />
                                )}
                            </NavLink>
                            {dropdown === Link.name && (
                                <ul className='absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 p-2'>
                                {Link.name === "Man's" && (
                                        <>
                                            <li className='hover:bg-gray-250 text-base border-b m-2'>
                                                <NavLink to="/men/menscasual" onClick={closeMenu}>Men Casual Wear</NavLink>
                                            </li>
                                            <li className='hover:bg-gray-50 text-base border-b m-2'>
                                                <NavLink to="/men/tracksuits" onClick={closeMenu}>Men Tracksuits</NavLink>
                                            </li>
                                            <li className='hover:bg-gray-50 text-base border-b m-2'>
                                                <NavLink to="/men/night-suits" onClick={closeMenu}>Men Night Suits</NavLink>
                                            </li>
                                            <li className='hover:bg-gray-50 text-base border-b m-2'>
                                                <NavLink to="/men/Formal-dress" onClick={closeMenu}>Formal Dress</NavLink>
                                            </li>
                                            <li className='hover:bg-gray-50 text-base border-b m-2'>
                                                <NavLink to="/men/Mens-shalwarKurta" onClick={closeMenu}>Shalwar Kameez</NavLink>
                                            </li>
                                        </>
                                    )}
                                    {/* Women Collection Dropdown Menu */}
{Link.name === "Women's" && (
    <>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-abaya-collection" onClick={closeMenu}>Women Abaya</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-dupatta" onClick={closeMenu}>Women Dupatta</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/wformal" onClick={closeMenu}>Formal Dress</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-jeans" onClick={closeMenu}>Women Jeans</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-night-suits" onClick={closeMenu}>Women Night Suits</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-trouser" onClick={closeMenu}>Women Trouser</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/women/women-shawls" onClick={closeMenu}>WomenShawls</NavLink>
        </li>
        
    </>
)}
{/* Kid's Collection Menu Of Dropdown  */}
{Link.name === "Kid's" && (
    <>   
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/kid/formal-dress" onClick={closeMenu}>Kid Formal Dress</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/kid/shirts" onClick={closeMenu}>Kid Shirts</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/kid/suits" onClick={closeMenu}>Kid Suits</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/kid/shalwar-kurta" onClick={closeMenu}>Kid Shalwar Kurta</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/kid/shoes" onClick={closeMenu}>Kid Shoes</NavLink>
        </li>   
    </>
)}

{Link.name === "Brands" && (
    <>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/Branding/brand-alkaram" onClick={closeMenu}>Al Karam</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/Branding/brand-bonanza" onClick={closeMenu}>Bonanza Satrangi</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/Branding/brand-dinners" onClick={closeMenu}>Diners Brand</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/Branding/brand-edenrobe" onClick={closeMenu}>Edenrobe</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/brands/bGullahmed" onClick={closeMenu}>Gull Ahmed</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/brands/bJdot" onClick={closeMenu}>J.Dots</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/brands/bnishat" onClick={closeMenu}>Nishat</NavLink>
        </li>
        <li className='hover:bg-gray-50 text-base border-b m-2'>
            <NavLink to="/brands/sana-safinaz" onClick={closeMenu}>Sana Safinaz</NavLink>
        </li>
    </>
)}
                                    {/* Add your dropdown items here */}
                                </ul>
                            )}
                        </li>
                    ))}

                    {/* Cart & User Icon */}
                    <li className='md:ml-8 text-xl my-2 md:my-0'>
                        <NavLink to="/cart" className='text-gray-800 hover:text-gray-400 duration-300 flex items-center justify-center'>
                            <FaCartArrowDown className='mr- text-4xl' />
                            {products.length > 0 && (
                                <span className='bg-red-500 text-white rounded-full px-2 py-1 text-xs ml'>
                                    {products.length}
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Registration Section */}
            <div className='md:flex text-center bg-white md:px-10 px-7 items-center justify-center space-x-4'>
                <button className='hidden md:block bg-blue-500 text-white py-2 px-5 rounded-md' onClick={openLogin}>
                    Sign In
                </button>
                <button className='hidden md:block bg-green-500 text-white py-2 px-5 rounded-md' onClick={openSignUp}>
                    Register
                </button>
            </div>

            {/* Modal for Login/Register */}
            <Modal isModalOpen={isModalOPen} setIsModalOpen={setIsModalOPen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </div>
        </>
    );
};

export default Navbar;
