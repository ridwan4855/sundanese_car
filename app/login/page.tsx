"use client"

import { useState,useEffect } from "react";
import {Login} from "@/types";
export default function Home() {
  const [isvalidUsername,setisvalidUsername] = useState(false);
  const [userLogin,setUserLogin] = useState({} as Login);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-sm:w-[100%] w-[450px] h-[300px] bg-[rgb(228,228,228)] rounded-lg flex flex-col text-white">
          <div className="flex flex-col">
            <input type="text" placeholder="Username" onChange={(value)=>{
              let user = {} as Login;
              user.username = value;
              setUserLogin();
              setisvalidUsername((prevState)=> !prevState)
            }}/> 
            {isvalidUsername && (
              <div className="flex justify-end">
                <p className="text-red-600">Username Wajib Diisi</p>
              </div>
            )}
          </div>
          <div className="">
            <input type="text" placeholder="Password"/>
            {}
          </div>
          <div className="rounded-lg bg-green-500 w-full text-center cursor-pointer">Login</div>
      </div>
    </div>
  );
}
