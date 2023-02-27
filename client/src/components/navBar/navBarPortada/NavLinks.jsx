import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { configFilterUserPut } from "../../../redux/actions/users/profesionales";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");


  //estados para modificar el filtro
  let configFilterUser = useSelector((state) => state.configFilterUser);
  let dispatch = useDispatch()

  let modifyStateFilter = (idProfesion)=>{
    dispatch(configFilterUserPut({
      ...configFilterUser,
      job: idProfesion
  
    }));
  
  }


  return (
    <>
      {links.map((link) => (
        <div>
          <div class="px-3 text-left md:cursor-pointer group">
            <h1
              class="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span class="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span class="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
            <div>
              <div class="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div class="py-3">
                  <div
                    class="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div class="bg-white p-5 grid grid-cols-3 gap-10">
                  {link.sublinks.map((mysublinks) => (
                    <div>
                      <h1 class="text-lg font-semibold">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li class="text-sm text-gray-600 my-2.5">
                          <Link onClick={()=>modifyStateFilter(slink.id)} to={"/professional"} class="hover:text-primary">
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            class={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    class="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span class="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    class={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li class="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
