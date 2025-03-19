// "use client"

// import { useState,useEffect } from "react";
// import {Login} from "@/types";
// export default function Home() {
//   const [isvalidUsername,setisvalidUsername] = useState(false);
//   const [userLogin,setUserLogin] = useState({} as Login);
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-sm:w-[100%] w-[450px] h-[300px] bg-[rgb(228,228,228)] rounded-lg flex flex-col text-white">
//           <div className="flex flex-col">
//             <input type="text" placeholder="Username" onChange={(value)=>{
//               let user = {} as Login;
//               user.username = value;
//               setUserLogin();
//               setisvalidUsername((prevState)=> !prevState)
//             }}/> 
//             {isvalidUsername && (
//               <div className="flex justify-end">
//                 <p className="text-red-600">Username Wajib Diisi</p>
//               </div>
//             )}
//           </div>
//           <div className="">
//             <input type="text" placeholder="Password"/>
//             {}
//           </div>
//           <div className="rounded-lg bg-green-500 w-full text-center cursor-pointer">Login</div>
//       </div>
//     </div>
//   );
// }


// import { useState,useEffect } from "react";
export default function Home() {

  return (
    <div className="h-full w-full">

      {/* HOVER ITEM */}
      {/* <div className="flex justify-center items-center text-center">
        <div className="w-[100px] h-[100px] bg-slate-400
          before:bg-purple-500 before:h-[165px] before:w-[185px] before:top-[100%] before:left-[100%] before:transition-all before:duration-[0.3s] before:content-['']
          hover:before:top-[-30px] hover:before:left-[-30px]

          ">Hover Me</div>
      </div> */}

      {/* HOVER ITEM */}
      <div className="flex justify-center items-center text-center ">
        <div className="relative">
          <p className=" cursor-pointer
        after:content[''] after:h-[2px] after:absolute after:left-0 after:bottom-0 after:w-full after:bg-green-400 after:transition-transform after:duration-300
        after:scale-[0] hover:after:scale-[1]">
            Hover Me
          </p>
        </div>
      </div>


      {/* CHANGE ELEMENT */}

      <div className="animate-[flip_2s_ease-in-out_infinite] bg-white w-[100px] infiin">sss</div>


      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="mr-3 size-5  ..." viewBox="0 0 24 24">
          
        </svg>
        Processing…
      </button>
    </div>





  );

}