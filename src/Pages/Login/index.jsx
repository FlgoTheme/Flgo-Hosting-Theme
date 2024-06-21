import React, { useState } from 'react';
import Footer from '../../assets/components/footer';


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
    <div>
        <div className="w-screen h-1 bg-[#1D4ED8]"></div>
        <p className="bg-[#3577F0] absolute top-4 left-4 bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
    
        <a href='http://localhost:5173/login' target='_blank'>
        <img 
           src='https://cdn.discordapp.com/attachments/1227695797777469471/1248264207586295859/lock.png?ex=6674d462&is=667382e2&hm=e64dafbe35bb91daa78f20ef404121aa632506a12bcb1dfec28f8ec831bc9d24&' 
           class='flex flex-col bg-[#1c1f2d] rounded-[3px] bg-opacity-[45%] p-1 float-right mt-3 mr-3'
        />
        </a>
    </div>
   
    <div className='text-center max-w-[1024px] mx-auto text-white flex flex-col mt-[35%] lg:mt-[16%] items-center '>
   

    <form onSubmit={handleSubmit}>
        <div className='w-[360px] lg:w-[434px]'>
          <div className='text-center w-[90%] h-[38px] p-4 bg-[#1C1D2B] bg-opacity-[60%] rounded-md flex items-center mx-auto justify-center gap-2'>
            <img className='w-[19px] h-[19px]' src="https://cdn.discordapp.com/attachments/1227695797777469471/1246151416263741520/Error.png?ex=66765f32&is=66750db2&hm=8e0a4da77b2ed4b8285c31ee00d601a10e1967f93128ef567d996ce4e4d5bf73&"/>
            <p className='font-medium text-[14px] text-[#94A3B8]'>Admin Login Only</p>
          </div>

          <div className='bg-[#1C1D2B] bg-opacity-[60%] w-[90%] h-[232px] mx-auto p-3 text-center rounded-lg mt-3 '>
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




        <Footer />

        <div 
        className="-z-50 absolute inset-0 bg-gradient-to-tr from-[#1D4ED8] opacity-[20%] via-transparent to-transparent">
        </div>

        
    </div>
    </>
);
}

