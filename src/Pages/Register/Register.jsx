import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Register = () => {

    const  {createUser} = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');


        console.log(name, email, photoUrl, password, confirmPassword);

        //create user
        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => console.error(error))

    }



    return (
        <div className="bg-[#FFF7F0] mt-10 rounded-xl container mx-auto hero-content flex-col">

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Please Register Here</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Name</span>
                    </label>

                    <input name="name" type="text" placeholder="Enter your name" className="input input-bordered"  />
                </div>
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Email address</span>
                    </label>

                    <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Photo URL</span>
                    </label>

                    <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" />
                </div>

                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Password</span>
                    </label>

                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                   

                </div>
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Confirm Password</span>
                    </label>

                    <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered" required />
                   

                </div>

                <div className="form-control mt-6">
                    <button className="btn  text-white bg-[#FD650B] outline-none ">Login</button>

                    <p className="text-center mt-2 poppins-medium">Already Have An Account ? <Link className="text-red-500" to='/login'>Please Login </Link></p>

                </div>
            </form>


        </div>
    );
};

export default Register;