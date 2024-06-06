import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Home() {
    return (
            <>
            <div className="w-screen h-1 bg-[#1D4ED8]"></div>
            
            <a
            href='http://localhost:5173/login'
            target='_blank'
            >
            <img 
            src='https://cdn.discordapp.com/attachments/1227695797777469471/1248264207586295859/lock.png?ex=66630822&is=6661b6a2&hm=c6cac44d574386b3cdd74c661cbfd4a90c40c0ef562bf8647decdd5414fbe11d&' 
            className='target="_blank" flex flex-col bg-[#242938] rounded-[4px] bg-opacity-[32%] p-1 float-right mt-3 mr-3'
            />
            </a>


            <div className="absolute flex mt-2 md:mt-36 text-white text-center justify-center w-full items-center bg-no-repeat h-[500px] md:h-[600px] bg-transparent bg-center bg-[url('https://cdn.discordapp.com/attachments/1227695797777469471/1227695854417088602/Ellipse_4.png?ex=6662b11d&is=66615f9d&hm=9f820419e43a6b31d7d0b80aec4f988efd1a26ce003a2264f9ca0ff394a7da76&')]">
                  <div>
                     <p className="bg-[#3577F0] bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] mx-auto text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
                     <h1 className="font-bold text-4xl md:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Get to Know Us Closely</h1>
                     <p className="font-medium text-sm md:text-base text-[#9CA3AF] mt-2">Last beta application date is ?.??.????</p>
                     <div className="mt-4 flex justify-center gap-3">
                     <Link to="/beta"><button className="w-[160px] lg:w-[179px] h-[40px] lg:h-[44px bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join The Whitelist</button></Link>
                     <button className="w-[160px] lg:w-[179px] h-[40px] lg:h-[44px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join Discord Server</button>
                     </div>
                  </div>
            </div>   
           

           <footer className="text-center absolute bottom-1 w-full">
              <p className="text-[#9CA3AF] text-sm opacity-80 font-medium">Copyright © 2024, Flgo Development</p>
           </footer>
            </>
    )
}