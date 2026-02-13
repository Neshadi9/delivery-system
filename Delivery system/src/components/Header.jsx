export function Header(){
    return(
        <nav className="sticky top-0 z-50 flex items-center justify-between px-40 py-4 bg-white shadow-sm">
            <div className="text-1xl font-bold text-slate-950">
                Dersual
            </div>
            <div className="flex items-center gap-6 text-sm">
                <ul className="flex items-center gap-6 font-medium text-slate-600">
                    <li className="relative text-slate-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-orange-400">
                        <a href="">Home</a>
                    </li>
                    <li className="hover:text-slate-900 transition-colors">
                        <a href="">About</a>
                    </li>
                    <li className="hover:text-slate-900 transition-colors">
                        <a href="">Log in</a>
                    </li>
                </ul>
                <button className="bg-orange-400 hover:bg-orange-300 text-white font-medium py-2 px-4 rounded-lg transition-all">
                    Get Started
                </button>
            </div>
        </nav>
    )
}



//       {/* 2. Navigation Links & CTA */}
//       <div className="flex items-center gap-8">
//         <ul className="flex items-center gap-8 font-medium text-slate-600">
//           <li className="relative text-slate-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-orange-400">
//             <a href="#">Home</a>
//           </li>
//           <li className="hover:text-slate-900 transition-colors">
//             <a href="#">About</a>
//           </li>
//           <li className="hover:text-slate-900 transition-colors">
//             <a href="#">Log in</a>
//           </li>
//         </ul>

//         {/* 3. "Get Started" Button */}
//         <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   )
// }