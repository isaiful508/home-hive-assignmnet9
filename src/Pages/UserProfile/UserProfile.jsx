import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-5xl">{user.displayName}</h2>
            <h2 className="text-5xl">{user.email}</h2>
            <h2 className="text-5xl">{user.photoURL}</h2>
        </div>
    );
};

export default UserProfile;