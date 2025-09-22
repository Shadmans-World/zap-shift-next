import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-2xl rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="card-body w-full p-6 md:p-8">
          <fieldset className="fieldset w-full space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
            </div>

            <div>
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button className="btn btn-neutral w-full mt-4">Login</button>
          </fieldset>
        </div>

        <div className="w-full mb-6">
          <p className="text-center text-sm md:text-base">
            Create an account!{" "}
            <Link className="text-blue-500" href={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
