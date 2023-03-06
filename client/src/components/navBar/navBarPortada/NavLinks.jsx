import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { configFilterUserPut } from "../../../redux/actions/users/profesionales";
import { links_ } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  //estados para modificar el filtro
  let configFilterUser = useSelector((state) => state.configFilterUser);
  let jobs = useSelector((state) => state.jobs);
  let dispatch = useDispatch();

  // console.log("hola", jobs);

  const jobItems = jobs.map((job) => ({
    name: job.name,
    Head: job.name,
    link: "/professional",
    id: job.id,
    sublink: [],
  })).slice(0,6)

  // console.log(jobItems);
  // const links = links_;

  const links = [
    {
      name: "Profesionales",
      submenu: true,
      sublinks: jobItems
    },
  ];

  let modifyStateFilter = (idProfesion) => {
    dispatch(
      configFilterUserPut({
        ...configFilterUser,
        job: idProfesion,
        name: "",
        provincia: "Buenos Aires",
        ciudad: false,
        dias: false,
        horario: "mañana",
        role: "professional",
      })
    );
  };

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-2 text-left md:cursor-pointer group">
            <Link
              className="py-2 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("")
                modifyStateFilter(false)
              }}
              to={"/professional"}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </Link>
            {link.submenu && (
              <div>

                <div class="absolute top-15 border hidden group-hover:md:block hover:md:block">
         
                  <div className="bg-white p-5 grid grid-cols-3 gap-x-4 gap-y-2 ">
                    {link.sublinks.map((job) => (
                      <div className="px-5 py-2 rounded hover:bg-blue-500 hover:text-[#fff] " onClick={()=>modifyStateFilter(job.id)}>
                        <Link to={job.link} className="text-sm font-semibold">{job.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
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
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
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
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
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