import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets'
import { navLinks } from "../constants";


const Navbar = () => {

    const [ active, setActive ] = useState("")
    const [ toggle, setToggle ] = useState(false) 
    
    return (
        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                 to="/"
                 className="flex items-center gap-2"
                 onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0)
                 }}
                >
                 <img src={logo} alt="LOGO" className="w-12 h-12 object-contain"/>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    { navLinks.map((link) => (
                        <li 
                            key={link.id}
                            className={`${
                                active === link.title
                                ? "text-white"
                                : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                        >
                            { link.title }
                        </li>
                    )) }
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img 
                    src={ toggle ? close : menu} alt="menu" 
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                    />
                </div>
                <div className={`${!toggle ? 'hidden' : 'flex'} 
                absolute p-6 top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl right-0 black-gradient`}>
                <ul className="list-none flex-col justify-end items-center gap-4">
                    { navLinks.map((link) => (
                        <li 
                            key={link.id}
                            className={`${
                                active === link.title
                                ? "text-white"
                                : "text-secondary"
                            } font-poppins font-medium cursor-pointer text-[16px]`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(link.title)
                            }}
                        >
                            <a href={`#${link.id}`}>{ link.title }</a>
                        </li>
                        )) }
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar