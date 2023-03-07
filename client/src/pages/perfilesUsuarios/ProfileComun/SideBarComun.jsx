import React from "react";
import { Link } from "react-router-dom";
import { RiFolderUserLine, RiLogoutBoxLine } from "react-icons/ri";
import logo from "./image.svg";
import { useSelector } from "react-redux";
import { GoBriefcase } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { stateSelectedComun } from "../../../redux/actions/professionalActions";

export default function SideBarComun() {
  const users = useSelector((state) => state.userLogin);

  // Button
  const select = useSelector((state) => state.selectedComun);
  const dispatch = useDispatch();

  // const [selected, setSelected] = useState(select);
  const handleOption = (e, p) => {
    console.log(select, p);
    // e.preventDefault();
    dispatch(stateSelectedComun(p));
    // setSelected(p);
  };

  return (
    <div>
      <div className="col-span-1 p-8 border-r">
        <div className="text-center p-8">
          <img
            src={users.imagePerfil}
            alt={users.firstName}
            className="w-1/8 rounded-full h-auto"
          />
        </div>
        <div className=" flex flex-col h-[430px] justify-between">
          <nav>
            <ul>
              <li>
                <button onClick={(e) => handleOption(e, 1)}>
                  <Link
                    to={`/profile/${users.id}`}
                    className={
                      select === 1
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <CgProfile />
                    Mi Perfil
                  </Link>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleOption(e, 2)}>
                  <Link
                    to={`/profilec/${users.id}`}
                    className={
                      select === 2
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <GoBriefcase />
                    Mis Publicaciones
                  </Link>
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <img src={logo} alt="image" />
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
            >
              <RiLogoutBoxLine />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
