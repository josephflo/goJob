import React from "react";
import { Notifications } from "./notifications";
import { RiSearchLine} from "react-icons/ri"

export function Header (){

return (
    <header className="flex items-center justify-between  p-4 w-full pl-11 md:px-10">
    
    <form className="w-[30%]">
        <div className="relative w-full">
        <RiSearchLine className="absolute left-2 top-3" />
        <input type="text" className="p-2 py-2 pl-8 pr-4 outline-none rounded-lg w-full" placeholder="Buscar" />

        </div>
        
    </form>
        
        <Notifications/>
</header>

)

}