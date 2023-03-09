export default function Rating({ array, arr2, arr, items1, items2 }) {
  return (
    <>
      <div className="w-[35%] ">
        <p className="text-6xl text-center font-medium text-gray-900 dark:text-white ">
          {arr2[5]}
        </p>

        <div className="flex justify-center m-3 ">
          {items1.map((_, index) => (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          {items2.map((_, index) => (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {array?.length} valoraciones
        </p>
      </div>
      <div className="w-[65%]  ">
        <div className="flex justify-center mt-4 ">
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            5 estrellas
          </span>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded `}
              style={{ width: `${arr2[4]}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            ({arr[4]})
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            4 estrellas
          </span>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded `}
              style={{ width: `${arr2[3]}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            ({arr[3]})
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            3 estrellas
          </span>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded `}
              style={{ width: `${arr2[2]}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            ({arr[2]})
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            2 estrellas
          </span>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded `}
              style={{ width: `${arr2[1]}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            ({arr[1]})
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-sm font-medium text-gray-500 dark:text-blue-500">
            1 estrellas
          </span>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded `}
              style={{ width: `${arr2[0]}%` }}
            />
          </div>
          <span className="text-sm font-medium pb-4 text-gray-500 dark:text-blue-500">
            ({arr[0]})
          </span>
        </div>
      </div>
    </>
  );
}
