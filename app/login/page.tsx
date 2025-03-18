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
<div className="w-full min-h-screen bg-gray-100 p-10">
  {/* Sticky Parent */}
  <div className="relative bg-white w-[80%] h-[600px] mx-auto p-6 shadow-lg ">
    <h1 className="text-2xl font-bold">This is the first section</h1>
    <p className="mb-6">Scroll inside this section. The "Copy" & "Edit" buttons stay at the bottom.</p>

    

    {/* Sticky Buttons */}
    <div className="sticky top-0 left-0 flex justify-start bg-gray-900 text-white p-4">
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Copy</button>
      <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Edit</button>
    </div>
  </div>

  {/* Second Section */}
  <div className="w-[80%] min-h-[600px] bg-red-500 mx-auto p-6 mt-10">
    <h1 className="text-2xl font-bold">Second Section</h1>
    <p>When you reach here, the buttons should no longer be visible.</p>
  </div>
</div>



  );

}