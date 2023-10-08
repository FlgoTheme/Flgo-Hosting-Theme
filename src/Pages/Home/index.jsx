
export default function Home() {
    return (
            <>
            <div className="w-screen h-1 bg-[#1D4ED8]"></div>

            <div className="absolute flex mt-36 text-white text-center justify-center w-full items-center bg-no-repeat h-[600px] bg-transparent bg-center bg-[url('https://cdn.discordapp.com/attachments/1152668559168782479/1160650334994169936/background.png?ex=65356edb&is=6522f9db&hm=f3b8849c478886b2b3638837b167959b26976e556342b60933499aef364a1b9b&')]">
                  <div>
                     <p className="bg-[#3577F0] bg-opacity-[13%] w-[105px] h-[25px] border-solid border-[1px] border-[#1D4ED8] rounded-[15px] mx-auto text-[#1D4ED8] font-bold text-xs items-center flex justify-center">CLOSED BETA</p>
                     <h1 className="font-bold text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]">Get to Know Us Closely</h1>
                     <p className="font-medium text-base text-[#9CA3AF] mt-2">Last beta application date is 1.3.2024</p>
                     <div className="mt-4 flex justify-center gap-3">
                     <button className="w-[179px] h-[44px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join The Whitelist</button>
                     <button className="w-[179px] h-[44px] bg-[#3B82F6] rounded-full text-sm font-medium bg-gradient-to-t from-[#1D4ED8] to-[#3B82F6]">Join Discord Server</button>
                     </div>
                  </div>
            </div>   
           

           <footer className="text-center absolute bottom-1 w-full">
              <p className="text-[#9CA3AF] text-sm opacity-80 font-medium">Copyright © 2024, Flgo Development</p>
           </footer>
            </>
    )
}