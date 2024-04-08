import { Link } from "react-router-dom";



const Login = () => {
    return (
        
        <div className="bg-[#FFF7F0] mt-10 rounded-xl container mx-auto hero-content flex-col">

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Please Login Here</h2>

            <form className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Email address</span>
                    </label>

                    <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                </div>

                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Password</span>
                    </label>

                    <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                    <label className="label poppins-semibold">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white bg-[#FD650B] outline-none ">Login</button>

                    <p className="text-center mt-2 poppins-medium">Do not Have An Account ? <Link className="text-red-500" to='/register'>Please Register</Link></p>

                </div>
            </form>


        </div>
    );
};

export default Login;