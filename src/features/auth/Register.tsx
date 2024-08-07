import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';
import authService from './authService';
import toast from '../../lib/toast';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await authService.register({username, password});
      console.log(res);
      
      toast.success(res);
      navigate('/login');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 flex justify-center items-center">
          <img className="object-scale-down max-w-75 m-10" src="src/assets/images/elogo.png" alt="Logo" />
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            {/* <span className="mb-1.5 block font-medium">Start for free</span> */}
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">

            </h2>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <FaRegUser />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <CiLock />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <button type="submit"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                >Register</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;