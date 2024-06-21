import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Advert from '../../assets/components/advert';
import Footer from '../../assets/components/footer';


function App() {


  return (
    <>
    <div>
        <div className="w-screen h-1 bg-[#1D4ED8]"></div>
    
        
        <div className='flex flex-col'>
         <a href='http://localhost:5173/login' target='_blank'>
         <img 
           src='https://cdn.discordapp.com/attachments/1227695797777469471/1248264207586295859/lock.png?ex=6674d462&is=667382e2&hm=e64dafbe35bb91daa78f20ef404121aa632506a12bcb1dfec28f8ec831bc9d24&' 
           class='flex flex-col bg-[#1c1f2d] rounded-[3px] bg-opacity-[45%] p-1 float-right mt-3 mr-3'
         />
          </a>
          <a href='http://localhost:5173/beta' target='_blank'>
          <img 
           src='https://cdn.discordapp.com/attachments/1227695797777469471/1253654858435661885/question-circle.png?ex=6676a492&is=66755312&hm=18098b99476274c8a8a870fd2a3073f50a51ac001334b1963aac7ca266a3513f&' 
           class='flex flex-col bg-[#1c1f2d] rounded-[4px] bg-opacity-[45%] p-1 float-right mt-3 mr-3'
          />
          </a>
        </div>
    </div>
   
    <div className='text-center max-w-[1024px] mx-auto text-white flex flex-col mt-[50%] lg:mt-[14%] items-center '>
    <p className="bg-[#3577F0] mb-3 bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
             
        <h1 className="font-extrabold text-4xl md:text-6xl pb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Get to Know Us Closely</h1>
        <p className="font-medium text-md lg:text-[20px] text-[#9CA3AF] mt-2">Last beta application date is 07.01.2026</p>
        <div className="mt-4 flex justify-center gap-3">
          <Link to="/beta"><button className="w-[150px] h-[40px] lg:w-[170px] lg:h-[42px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join The Whitelist</button></Link>
          <a href='https://discord.gg/RJGAwpCaMc' target='_blank'><button className="w-[155px] h-[40px] lg:w-[170px] lg:h-[42px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join Discord Server</button></a>
        </div>
        <Advert />



        <Footer />

        <div 
        className="-z-50 absolute inset-0 bg-gradient-to-tr from-[#1D4ED8] opacity-[17%] via-transparent to-transparent">
        </div>

        
    </div>
    </>
);
}

export default App;
