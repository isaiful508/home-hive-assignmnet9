import { Link, NavLink } from "react-router-dom";

import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



    return (
        <div className="navbar  container mx-auto mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">

                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Home</NavLink>


                        <NavLink to='/contactUs'
                            className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Contact Us</NavLink>

                        <NavLink to='/updateProfile'
                            className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Update Profile</NavLink>
                        <NavLink to='/user_profile'
                            className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>User Profile</NavLink>

                    </ul>
                </div>
                <img src={logo} alt="" />
                <Link to='/' className="btn btn-ghost poppins-bold text-3xl ">Home <span className="text-[#FD650B]">Hive</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex items-center space-x-6 menu-horizontal px-1">

                    <NavLink to='/'
                        className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Home</NavLink>

                    <NavLink to='/contactUs'
                        className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Contact Us</NavLink>

                    <NavLink to='/updateProfile'
                        className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>Update Profile</NavLink>

                    <NavLink to='/user_profile'
                        className={({ isActive }) => isActive ? 'text-[#FD650B] poppins-medium rounded-lg border-2 p-2 border-[#FD650B]' : 'poppins-regular'}>User Profile</NavLink>

                </ul>
            </div>
            <div className="navbar-end">

                <div className="w-10  mr-2">
                    {
                        user ? <img className="border-2 border-[#FD650B] rounded-full" src={user.photoURL} alt="userPhoto" /> : ""
                    }
                </div>

                {
                    user ? <button onClick={handleSignOut} className="btn text-white bg-[#FD650B]">Log Out</button>
                        :
                        <Link to='/login' className="btn text-white bg-[#FD650B]" > Login</Link>
                }




            </div>
        </div>
    );
};

export default Navbar;