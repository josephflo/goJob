import { useSelector } from "react-redux";

export default function Pagination({
  totalPages,
  paginateNext,
  paginatePrev,
  paginate,
}) {
  let nextPage = useSelector((state) => state.nextPage);
  let previousPage = useSelector((state) => state.previousPage);

  const array = [...Array(totalPages).keys()].map((e) => e + 1);
  return (
    <>
      <nav aria-label="Page navigation example">
        {/* <ul className="inline-flex -space-x-px">
          <li> */}
        <button
          onClick={(e) => paginatePrev(e)}
          className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        {/* </li> */}
        {array.map((index) => (
          // <li>
          <button
            onClick={(e) => paginate(e, index)}
            key={index}
            className="p-5"
            // className={page === index ? styles.check : styles.notCheck}
          >
            {index}
          </button>
          // </li>
        ))}
        {/* <li> */}
        <button
          onClick={(e) => paginateNext(e)}
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
        {/* </li>
        </ul> */}
      </nav>
    </>
  );
}

//   <li>
//     <a
//       href="#"
//       className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//     >
//       1
//     </a>
//   </li>
//   <li>
//     <a
//       href="#"
//       className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//     >
//       2
//     </a>
//   </li>
//   <li>
//     <a
//       href="#"
//       aria-current="page"
//       className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//     >
//       3
//     </a>
//   </li>
//   <li>
//     <a
//       href="#"
//       className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//     >
//       4
//     </a>
//   </li>
//   <li>
//     <a
//       href="#"
//       className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//     >
//       5
//     </a>
//   </li>
