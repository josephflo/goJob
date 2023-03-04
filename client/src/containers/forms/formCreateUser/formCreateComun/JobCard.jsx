function JobCard({ name, handleJob }) {
  return (
    <div className="p-4">
      <button
        className="relative w-36 h-36 bg-blue-50 rounded-full flex justify-center items-center text-center p-5 shadow-xl transform 
          transition duration-500 hover:bg-blue-100 hover:scale-105"
        onClick={handleJob}
      >
        <div className="justify-center">
          <div>{name}</div>
        </div>
      </button>
      {/* <input
        type="radio"
        id="hosting-big"
        name="jobs"
        value={name}
        className="hidden peer"
        required
        onChange={handleJob}
      />
      <label
        for="hosting-small"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="w-full text-lg font-semibold">{name}</div>
      </label> */}
    </div>
  );
}

export default JobCard;
