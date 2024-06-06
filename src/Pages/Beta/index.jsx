import React, { useState, useEffect } from 'react';

export default function Beta() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyOwnerName: '',
    contactEmail: '',
    isChecked: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async () => {
    if (
      formData.companyName.length < 3 ||
      formData.companyOwnerName.length < 3 ||
      formData.contactEmail.length < 3
    ) {
      alert('Fields must be at least 3 characters long.');
      return;
    }

    setIsSubmitted(true);

    const webhookUrl = '';

    const payload = {
      content: `Company Name: ${formData.companyName}\nCompany Owner Name: ${formData.companyOwnerName}\nContact Email: ${formData.contactEmail}`,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Send');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ 
            companyName: '',
            companyOwnerName: '',
            contactEmail: '',
            isChecked: false,
          });
        }, 1000);
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

    return (
        <>
         <div className="w-screen h-1 bg-[#1D4ED8]"></div>
         <p className="bg-[#3577F0] absolute top-4 left-4 bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
    
         <div className="absolute flex mt-36 text-white text-center justify-center w-full items-center bg-no-repeat h-[650px] bg-transparent bg-center bg-[url('https://cdn.discordapp.com/attachments/1227695797777469471/1227695854417088602/Ellipse_4.png?ex=6662b11d&is=66615f9d&hm=9f820419e43a6b31d7d0b80aec4f988efd1a26ce003a2264f9ca0ff394a7da76&')]">

                  <div className='max-w-[433px] px-2'>
                     <h1 className="font-bold text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Join White List</h1>
                     <p className="font-medium text-base text-[#9CA3AF] mt-2">Last beta application date is 1.3.2024</p>
                     <div className='mt-8'>
                     <label htmlFor="companyName" className="block mb-2 float-left text-base text-[#94A3B8] font-semibold">Company Name</label>
                     <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder='Flgo Development'
                      className="border border-[#2255DC] w-[95%] lg:w-[430px] h-[45px] text-base font-medium bg-opacity-40 px-5 rounded-[6px] text-[#9CA3AF] bg-[#1C1D2B]"
                     />
                     </div>
                     <div className='mt-5'>
                     <label htmlFor="companyOwnerName" className="block mb-2 float-left text-base text-[#94A3B8] font-semibold">Company owner name and surname</label>
                     <input
                      type="text"
                      id="companyOwnerName"
                      name="companyOwnerName"
                      value={formData.companyOwnerName}
                      onChange={handleChange}
                      placeholder='Enes Can Kılıç'
                      className="border border-[#2255DC] w-[95%] lg:w-[430px] h-[45px] text-base font-medium bg-opacity-40 px-5 rounded-[6px] text-[#9CA3AF] bg-[#1C1D2B]"
                     />
                     </div>
                     <div className='mt-5'>
                     <label htmlFor="companyName" className="block mb-2 float-left text-base text-[#94A3B8] font-semibold">Contact Email</label>
                     <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder='contact@flgodevs.org'
                      className="border border-[#2255DC] w-[95%] lg:w-[430px] h-[45px] text-base font-medium bg-opacity-40 px-5 rounded-[6px] text-[#9CA3AF] bg-[#1C1D2B]"
                     />
                     </div>
                     <button onClick={handleSubmit} className="w-[110px] h-[37px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6] text-[16px] text-[#FFFFFF] flex items-center justify-center mt-5 float-right">{isSubmitted ? '✅ Sent' : 'Submit'}</button>
                     
                  </div>
            </div>   
         
        
      

           <footer className="text-center absolute bottom-1 w-full">
            <p className="text-[#9CA3AF] text-sm opacity-80 font-medium">Copyright © 2024, Flgo Development</p>
           </footer>
        </>
    )
}



