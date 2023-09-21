import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const cred={
    email:"test@gmail.com",
    password:"abc123",

}
    
export default function Signin() {
    const navigate= useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword]= useState("");
    const handleSelectChange1 = (event) => {
        setemail(event.target.value);
      };
      const handleSelectChange2 = (event) => {
        setpassword(event.target.value);
      };
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={handleSelectChange1}
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-primary">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleSelectChange2}
                    autoComplete="current-password"
                    required
                    className="w-full bg-secondary bg-opacity-40 rounded border focus:bg-gray-200 focus:ring-2 focus:ring-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onSubmit={email==cred.email && password== cred.password ? navigate("/Dashboard_client") : ""}
                  className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-amber-100 shadow-sm  hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/Registration" className="font-semibold leading-6 text-primary hover:text-amber-300">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  