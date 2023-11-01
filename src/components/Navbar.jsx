import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { logo } from '../assets'
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
            </div>
        </nav>
    )
}

export default Navbar