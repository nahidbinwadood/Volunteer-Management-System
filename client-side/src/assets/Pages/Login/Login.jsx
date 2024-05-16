import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import bg from "../../images/login.avif";
import logo from "../../images/Minimalist local charity logo with helping hands.svg";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
const Login = ({ title }) => {
  const { user,googleLogIn, logIn } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  // Google SignIn
  const handleGoogleSignIn = async () => {
    try {
      //firebase:
      const result = await googleLogIn();
      console.log(result);

      //Jwt:
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      toast.success("You've been Logged In Successfully");
      navigate(location?.state || "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  //Form Data:
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await logIn(email, password);
      console.log(result);
      //Jwt:
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      navigate(location?.state || "/");
      toast.success("You've been Logged In Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Invalid credentials !");
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  if ( user) return;
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="bg-white font-qs dark:bg-gray-900 rounded-md px-5 container mx-auto">
        <div className="flex justify-center gap-5 py-16 lg:h-[80vh] ">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-700  bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  <span className="text-green-500">Volunteer</span>Hub
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Our login page offers seamless access to your account with a
                  clean and intuitive interface. Simply enter your credentials
                  to securely sign in and enjoy our platforms features.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img className="md:size-48 size-32 p-0" src={logo} alt="" />
                </div>

                <p className="mt-3 font-bold text-gray-800 dark:text-gray-300">
                  Log in to your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200">
                      Email Address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label className="font-bold text-sm text-gray-700 dark:text-gray-200">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        {...register("password", { required: true })}
                      />
                      <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <FaEye className="absolute top-1/3 right-2 cursor-pointer" />
                        ) : (
                          <FaEyeSlash className="absolute top-1/3 right-2 cursor-pointer" />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <input
                      className="w-full px-4 py-2 cursor-pointer font-bold tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      type="submit"
                      value=" Log in"
                    />
                  </div>
                </form>

                <p className="mt-6  text-center text-gray-800">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Register
                  </Link>
                  .
                </p>
                <div className="my-4 flex gap-4 items-center">
                  <div className="w-1/2">
                    <div className="border border-[#30325E33] "></div>
                  </div>
                  <h2 className="text-sm font-semibold text-[#707070]">OR</h2>
                  <div className="w-1/2">
                    <div className="border border-[#30325E33]"></div>
                  </div>
                </div>
                <div
                  onClick={handleGoogleSignIn}
                  className="flex flex-row-reverse cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
                >
                  <div className="px-4 py-2">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>

                  <span className="w-5/6 px-4 py-3 font-bold text-center">
                    Continue with Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Login;
