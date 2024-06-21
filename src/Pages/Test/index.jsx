import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Advert from '../../assets/components/advert';
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../assets/components/footer';

function App() {
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (e) => {
      setSuggestion(e.target.value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const webhookUrl = 'https://discord.com/api/webhooks/1161400631295217684/K3ZgL97Gykna0s4qDqI0XWFGqxXd4L230fF_zIoVJKgL2KzHriy68z2z6G80abNk-mwV';

      if (suggestion.trim() !== '') {
          try {
              await axios.post(webhookUrl, {
                  content: suggestion
              });
              alert('Suggestion sent successfully!');
              setSuggestion('');
          } catch (error) {
              console.error('Error sending suggestion:', error);
              alert('Failed to send suggestion.');
          }
      } else {
          alert('Please enter a suggestion.');
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
           class='flex flex-col bg-[#1c1f2d] rounded-[4px] bg-opacity-[45%] p-1 float-right mt-3 mr-3'
        />
        </a>
      
    </div>
   
    <div className='text-center max-w-[1024px] mx-auto text-white flex flex-col mt-[35%] lg:mt-[12%] items-center'>
   
             
        <h1 className=" font-extrabold text-4xl md:text-6xl pb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Latest Upgrade</h1>
        <p className="font-medium text-md lg:text-[19px] text-[#9CA3AF] mt-2">Last beta application date is 07.01.2026</p>
        <div className='md:flex mt-5 gap-3 text-left'>
           <div className='bg-[#1C1D2B] bg-opacity-[47%] border-solid border-[1px] border-[#1D4ED8] w-[280px] pb-5 lg:pb-1 mt-3 lg:mt-0'>
           <p className='text-[#71717A] text-[14px] p-2'>Prices section added, page optimization provided.</p>
           <p className='flex float-right text-[#71717A] text-[12px] pr-2'>11.10.2023</p>
           </div>

           <div className='bg-[#1C1D2B] bg-opacity-[47%] border-solid border-[1px] border-[#1D4ED8] w-[280px] pb-5 lg:pb-1 mt-3 lg:mt-0'>
           <p className='text-[#71717A] text-[14px] p-2'>Prices section added, page optimization provided.</p>
           <p className='flex float-right text-[#71717A] text-[12px] pr-2'>11.10.2023</p>
           </div>

           <div className='bg-[#1C1D2B] bg-opacity-[47%] border-solid border-[1px] border-[#1D4ED8] w-[280px] pb-5 lg:pb-1 mt-3 lg:mt-0'>
           <p className='text-[#71717A] text-[14px] p-2'>Prices section added, page optimization provided.</p>
           <p className='flex float-right text-[#71717A] text-[12px] pr-2'>11.10.2023</p>
           </div>
           
        </div>
      
        <p className="font-medium text-md lg:text-[19px] text-[#9CA3AF] mt-5">Make Suggestions For New Updates</p>

       
        
             <form 
             className='flex flex-col justify-center items-center mb-4'
             onSubmit={handleSubmit}>
                <textarea
                    id="suggestion"
                    value={suggestion}
                    onChange={handleInputChange}
                    placeholder='Technical Advice and Questions Only'
                    className="placeholder:text-sm text-[#71717A] mt-5 w-[280px] lg:w-[610px] h-32 p-2 mb-4 border-[#2255DC] border-solid border-[1px] rounded-[3px] bg-[#1C1D2B] bg-opacity-[47%] resize-none"
                />
                <button
                    type="submit"
                    className="bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6] w-[250px] h-[38px] mt-1"
                >
                    Send Suggestions
                </button>
            </form>
            
         
       <Footer />
        <div
        className="-z-50 absolute inset-0 bg-gradient-to-tr from-[#1D4ED8] opacity-[20%] via-transparent to-transparent">
        </div>

        
    </div>
    </>
);
}

export default App;
