import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/image.png';
import Loading from '../components/shared/Loading';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg('');
    setTimeout(() => {
      setIsLoading(false);
      const success = login(email, password);
      if (success) {
        const role = ["admin", "teacher", "student"].find(r => email.toLowerCase().includes(r));
        navigate(`/dashboard` );
      } else {
        setErrMsg('Invalid email or password.');
      }
    }, 1000);
  };

     
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#10062B] to-[#4F0129]">
      <div className="w-[70%] h-[90vh] bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Left: Gradient, logo, and circles */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative">
        <div 
          style={{background: 'linear-gradient(180deg, rgba(16, 6, 43, 0.1) 0%, rgba(255, 255, 255, 0.08) 100%,rgba(79, 1, 41, 0.1)0%)'}}
          className="relative w-[250px] h-[250px] rounded-full " /> 
        <div 
          style={{background: 'linear-gradient(180deg, rgba(16, 6, 43, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%,rgba(79, 1, 41, 0.1)0%)'}}
          className="absolute w-[350px] h-[350px] rounded-full " />        
            <div 
          style={{background: 'linear-gradient(180deg, rgba(16, 6, 43, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%,rgba(79, 1, 41, 0.1)0%)'}}
          className="absolute w-[450px] max-w-full h-[450px] rounded-full " />  
           <div className="absolute z-10 flex flex-col items-center top-1/3 justify-center ">
                 <img src={logo} alt="Logo" className="object-contain w-[200px] h-[200px]" />
          </div>
        </div>
       
        {/* Right: Login Form */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold ">Welcome Back</h2>
              <p className="mt-2 text-gray-500">Please sign in to your account</p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-transparent focus:border-pink-900 [&:-webkit-autofill]:!bg-transparent [&:-webkit-autofill]:!text-gray-700 [&:-webkit-autofill]:!shadow-none [&:-webkit-autofill]:!border-b-2 [&:-webkit-autofill]:!border-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-transparent focus:border-pink-900 [&:-webkit-autofill]:!bg-transparent [&:-webkit-autofill]:!text-gray-700 [&:-webkit-autofill]:!shadow-none [&:-webkit-autofill]:!border-b-2 [&:-webkit-autofill]:!border-gray-500"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-900"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                    Remember me
                  </label>
                </div>
                <button type='button'
                  // onClick={()=>}
                  className='ml-2  text-sm text-blue-700 hover:text-pink-700'>
                  Forgot Password?
                </button>
              </div>

              {errMsg && (
                <div className="text-red-500 text-sm text-center">{errMsg}</div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90  focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-pink-900 disabled:opacity-90 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loading/> : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
