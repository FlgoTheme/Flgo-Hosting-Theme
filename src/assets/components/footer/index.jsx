import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Footer() {

    const [ip, setIp] = useState('');

    useEffect(() => {
      const fetchIp = async () => {
        try {
          const response = await axios.get('https://api.ipify.org?format=json');
          setIp(response.data.ip);
        } catch (error) {
          console.error('Error fetching the IP address:', error);
        }
      };
  
      fetchIp();
    }, []);

    return (
        <>
       <div className="text-center absolute bottom-3 w-full flex flex-col justify-center">
       <p className='text-[#9CA3AF] text-sm opacity-80 font-medium flex mx-auto gap-1'>Your ip: 
         <section className=''>{ip}</section>
       </p> 
        <p className="text-[#9CA3AF] text-sm opacity-80 font-medium flex text-center justify-center">Copyright © 2024, Flgo Development</p>
        
       </div>
        </>
    )
}