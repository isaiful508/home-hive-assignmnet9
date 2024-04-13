import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="card  mx-auto mt-10 text-center w-96 border-2 border-[] bg-[#FFF7F0] shadow-xl">
        <figure className="px-10 pt-10">
            <img src={user?.photoURL || 'user img not found'} alt="user" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title poppins-semibold">Name : {user?.displayName || 'name not found'}</h2>
            <p className="poppins-medium">Email : {user.email || 'Email not found'}</p>

        </div>
    </div>
    );
};

export default UserProfile;