import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch users from the JSON file when the component mounts
  React.useEffect(() => {
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setError('');
      // Redirect to another page or perform other actions
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
     <div className="w-screen h-1 bg-[#1D4ED8]"></div>
     <p className="bg-[#3577F0] absolute top-4 left-4 bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
     
     
      <form onSubmit={handleSubmit}>
        <div className='w-[434px] mx-auto mt-[16%]'>
          <div className='text-center w-[434px] h-[38px] p-4 bg-[#1C1D2B] bg-opacity-[60%] rounded-md flex gap-[120px] items-center'>
            <img className='w-[19px] h-[19px]' src="https://cdn.discordapp.com/attachments/1227695797777469471/1246151416263741520/Error.png?ex=666298b2&is=66614732&hm=af683226a00642333a9d63d866e5a77f84496a912fcd7b811293a09f83de976f&" />
            <p className='font-medium text-[14px] text-[#94A3B8]'>Admin Login Only</p>
          </div>

          <div className='bg-[#1C1D2B] bg-opacity-[60%] w-[434px] h-[232px] mx-auto p-3 text-center rounded-lg mt-3 '>
            {error && <div className='text-red-500 text-sm mb-2'>{error}</div>}
            
            <p className='text-[14px] font-medium text-[#94A3B8] text-left ml-3 mt-2'>Email</p>
            <input 
              type="email" 
              className='mt-2 border w-[95%] h-[38px] bg-[#1C1D2B] rounded-md placeholder-[#94A3B8] placeholder-opacity-[65%] border-[#2255DC] p-2 text-sm focus:border-[#4F46E5] text-white'
              placeholder='example@gmail.com' 
              value={email} 
              onChange={handleEmailChange} 
            />
            
            <p className='text-[14px] font-medium text-[#94A3B8] text-left ml-3 mt-2'>Password</p>
            <input 
              type="password" 
              className='mt-2 border w-[95%] h-[38px] rounded-md bg-[#1C1D2B] placeholder-[#94A3B8] placeholder-opacity-[65%] border-[#2255DC] p-2 text-sm focus:border-[#4F46E5] text-white' 
              value={password}
              placeholder='example123*'  
              onChange={handlePasswordChange} 
            />
            
            <button type="submit" className='font-medium mt-4 bg-[#4F46E5] bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6] text-[#ffffff] text-center text-[14px] w-[95%] h-[36px] rounded-md'>Login</button>
          </div>
        </div>
      </form>
      <footer className="text-center absolute bottom-1 w-full">
        <p className="text-[#9CA3AF] text-sm opacity-80 font-medium">Copyright © 2024, Flgo Development</p>
      </footer>
    </>
  );
}
