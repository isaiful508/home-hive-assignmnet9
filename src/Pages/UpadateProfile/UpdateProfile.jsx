import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";



const UpdateProfile = () => {

    const { updateProfile, user } = useContext(AuthContext);
    console.log(user)
    const [name, setName] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');




    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(name, photoURL)
            .then(() => {
                console.log('profile update')
            })
            .catch((error) => {
                console.error(error);
            })

    }









    return (
        <div className="bg-[#FFF7F0] mt-10 rounded-xl container mx-auto hero-content flex-col">

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Update Profile</h2>

            <form onSubmit={handleUpdateProfile} className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        name="name"
                        type="text"
                        placeholder="Upadate"
                        className="input input-bordered"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>

                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Photo URL</span>
                    </label>

                    <input
                        name="photoURL"
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        required />


                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white bg-[#FD650B] outline-none ">Save</button>

                    <p className="text-center mt-2 poppins-medium">Do not Have An Account ? <Link className="text-red-500" to='/register'>Please Register</Link></p>

                </div>
            </form>


        </div>
    );
};

export default UpdateProfile;