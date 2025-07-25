import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
        {/* <!-- Sidebar --> */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          {/* <!-- Sidebar Header --> */}
          <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h3 className="text-1xl font-semibold">Admin messages</h3>
            <div className="relative">
              {/* <button id="menuButton" className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                </svg>
              </button> */}
              {/* <!-- Menu Dropdown --> */}
              {/* <div id="menuDropdown" className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                <ul className="py-2 px-3">
                  <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
                </ul>
              </div> */}
            </div>
          </header>
        
          {/* <!-- Contact List --> */}
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                <Image src="/images/profile3.png" width={40} height={40} alt="User Avatar" className="w-10 h-10 rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">My name is Alice, the administrator, I will look after your conversation.</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                <Image src="/images/profile3.png" width={40} height={40} alt="User Avatar" className="w-10 h-10 rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-gray-600  text-sm">I have chosen this paragraph for you and you can only send maximum 3 queries.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- Main Chat Area --> */}
        <div className="flex-1">
            {/* <!-- Chat Header --> */}
            <header className="bg-white p-4 text-gray-700">
                <h1 className="text-2xl font-semibold">Welcome to chatbox sample</h1>
            </header>
            
            {/* <!-- Chat Messages --> */}
            <div className="h-screen overflow-y-auto p-4 pb-36">
               {/* <!-- Incoming Message --> */}
               <div className="flex mb-4 cursor-pointer">
                 <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <Image src="/images/sarah.png" alt="User Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
                 </div>
                 <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p className="text-gray-700">My name is Sarah, I am here to help. May I start with your name please?</p>
                 </div>
               </div>
               
               {/* <!-- Outgoing Message --> */}
               <div className="flex justify-end mb-4 cursor-pointer">
                 <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Hi Alice! I good, just finished a great book. How about you?</p>
                 </div>
                 <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <Image src="/images/guest-male.jpg" alt="My Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
                 </div>
               </div>
               
               {/* <!-- Incoming Message --> */}
               <div className="flex mb-4 cursor-pointer">
                 <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <Image src="/images/sarah.png" alt="User Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
                 </div>
                 <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p className="text-gray-700">That book sounds interesting! What it about?</p>
                 </div>
               </div>
               
               {/* <!-- Outgoing Message --> */}
               <div className="flex justify-end mb-4 cursor-pointer">
                 <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>It about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
                 </div>
                 <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <Image src="/images/guest-male.jpg" alt="My Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
                 </div>
               </div>
            </div>

            {/* <!-- Chat Input --> */}
            <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                <div className="flex">
                    <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"/>
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                </div>
            </footer>
        </div>
    </div>
  );
}
