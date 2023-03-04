import { useSelector } from "react-redux";

export default function Pagination({
  totalPages,
  paginateNext,
  paginatePrev,
  paginate,
  page,
}) {
  const array = [...Array(totalPages).keys()].map((e) => e + 1);
  return (
    <>
      <nav aria-label="Page navigation example" className="text-gray-500">
        {/* <ul class="inline-flex -space-x-px">
          <li> */}
        <button
          onClick={(e) => paginatePrev(e)}
          class="px-3 py-2 mx-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        {/* </li> */}
        {array.map((index) => (
          // <li>
          <button
            onClick={(e) => paginate(e, index)}
            key={index}
            // className="p-5"
            className={
              page === index
                ? "bg-dimBlue border p-5 px-3 py-2 ml-1 mx-1 text-black"
                : "bg-white border p-5 px-3 py-2 ml-1 mx-1"
            }
          >
            {index}
          </button>
          // </li>
        ))}
        {/* <li> */}
        <button
          onClick={(e) => paginateNext(e)}
          class="px-3 py-2 ml-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
        {/* </li>
        </ul> */}
      </nav>
    </>
  );
}
