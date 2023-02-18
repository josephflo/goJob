import React from "react";
import image from "../../assets/profile.png"

function UserProfile ({toggle}){
    return (
        <div 
          className={`flex gap-5 items-center ${
            toggle 
            ? "bg-none transition-all duration-300 delay-200" 
            : "bg-white rounded-xl p-2"
            }`}
            >
             <div className="min-w-[3.5rem] h-[3.5rem]">
                <img 
                  src={image} 
                  alt="" 
                  className="w-full h-full rounded-full object-ccover" 
                  />
             </div>
             <div className={toggle ? "opacity-0 delay-200" : ""}>
                <h3 className="text-xl">Dario Rodirguez</h3>
            </div>
        </div>
    )
}

export default UserProfile;