import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Description from "./components/Description";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

export default function DetailComun() {
  const params = useParams();
  const { id } = params;

  const detail = useSelector((state) => state.userDetail);

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mx-6 bg-gray-200">
        <div className="border-2 rounded  m-3 p-4 bg-white">
          {/* <Header detail={detail} /> */}
          <Header detail={detail} />
        </div>
        <div className="border-2 rounded  m-3 p-4 bg-white">
          <Description detail={detail} />
        </div>
        <div className="border-2 rounded  m-3 p-4 bg-white">
          <Jobs detail={detail} />
        </div>
      </div>
    </>
  );
}
