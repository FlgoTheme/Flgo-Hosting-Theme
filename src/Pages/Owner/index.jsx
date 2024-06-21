import React, { useState, useEffect } from 'react';

export default function Owner() {
  
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
   
    <div className='text-center max-w-[1024px] mx-auto text-white flex flex-col mt-[35%] lg:mt-[13%] items-center'>
   
        
            



    




        <footer className="text-center absolute bottom-3 w-full">
        <p className="text-[#9CA3AF] text-sm opacity-80 font-medium flex text-center justify-center gap-1">Copyright © 2024, Flgo Development</p>
        </footer>

        <div 
        className="-z-50 absolute inset-0 bg-gradient-to-tr from-[#1D4ED8] opacity-[20%] via-transparent to-transparent">
        </div>

        
    </div>
    </>
);
}

