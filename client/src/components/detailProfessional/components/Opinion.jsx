export default function Opinion({ detail }) {
  return (
    <>
      <h1 className="text-2xl pb-4 font-semibold">
        Opiniones de nuestros usuarios
      </h1>
      <ul className="">
        {detail.reviews.map((rev, index) => (
          <>
            {rev.name ? (
              <>
                <li className=" flex grid grid-cols-4 p-2">
                  <div className="col-span-1">
                    <img src={rev.image} className=" h-32" alt="" />
                  </div>
                  <div className="col-span-3">
                    <p className="text-2xl font-medium">{rev.name}</p>
                    <p className="text-base font-medium text-gray-500 ">
                      {rev.date}
                    </p>
                    <p className=" pt-2 font-medium">{rev.review}</p>
                  </div>
                </li>
              </>
            ) : (
              <></>
            )}
          </>
        ))}
      </ul>
    </>
  );
}
