import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';






const Login = () => {


    const { googleLogin, githubLogin } = useContext(AuthContext);

    const [user, setUser] = useState(null);

    const [showPassword, setShowPassword] = useState(false);

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log('in login page location',location);


    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                
                toast.success("Login Successfully")
                
                navigate(location?.state ? location.state : '/');

                //navigate after login
            })
            .catch(error => {
                console.error(error)
            })

    }





    //google login

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                toast.success("Login Successfully")

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.error(error))

    }

    //github login

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                setUser(result.user)
                toast.success("Login Successfully")

                navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    console.error(error)
                })
    }




    return (

        <div className="bg-[#FFF7F0] mb-6 mt-10 rounded-xl container mx-auto hero-content flex-col">

            <Helmet>
                <title>Home Hive | Login </title>
            </Helmet>

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Please Login Here</h2>

            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Email address</span>
                    </label>

                    <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                </div>

                <div className="form-control relative">

                    <label className="label poppins-semibold">
                        <span className="label-text">Password</span>
                    </label>

                    <input name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="input input-bordered"
                        required />
                    <span className="absolute top-12 right-4" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                        }
                    </span>

                    <label className="label poppins-semibold">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white bg-[#FD650B] outline-none ">Login</button>


                    <div className="p-2 mt-6  mb-4 flex justify-center flex-col items-center " >


                        <button onClick={handleGoogleLogin} className="flex justify-center p-4 items-center gap-5 text-lg poppins-medium w-full border- border-2 rounded-t-lg " >

                            <FaGoogle></FaGoogle>
                            Login with Google
                        </button>

                        <button onClick={handleGithubLogin} className="flex p-4 justify-center items-center gap-5 text-lg poppins-medium w-full  border-b-2 rounded-b-lg border-x-2 " href="">

                            <FaGithub></FaGithub>
                            Login with Github
                        </button>



                    </div>

                    <p className="text-center mt-2 poppins-medium">Do not Have An Account ? <Link className="text-red-500" to='/register'>Please Register</Link></p>

                </div>


            </form>

            
        </div>
    );
};

export default Login;