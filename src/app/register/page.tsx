import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-2xl rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="card-body w-full p-6 md:p-8 space-y-4">
          <fieldset className="fieldset w-full space-y-4">
            <div>
              <label className="label">Username</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
            </div>

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
              <label className="label">Role</label>
              <br/>
              <select
                defaultValue="Pick a text editor"
                className="select w-full"
              >
                <option defaultChecked>Merchant</option>
                <option>Delivery Man</option>
                
              </select>
            </div>

            <button className="btn btn-neutral w-full mt-4">Register</button>
          </fieldset>
        </div>

        <div className="w-full mb-6">
          <p className="text-center text-sm md:text-base">
            Already have an account?{" "}
            <Link className="text-blue-500" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
