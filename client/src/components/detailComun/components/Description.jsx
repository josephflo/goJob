export default function Description({ detail }) {
  return (
    <>
      <div className="flex flex-col justify-between p-3">
        <h2 className="font-medium pb-3">Acerca del usuario</h2>

        <table className="w-full text-sm text-left text-black-500 dark:text-gray-400 mb-4">
          <thead>
            <tr>
              <th scope="col" className="">
                email
              </th>
              <th scope="col" className=" mx-auto">
                Celular
              </th>
              <th scope="col" className=" mx-auto">
                Locaclización
              </th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>

        <p>
          <span className="font-medium">email: </span> {detail.email}
        </p>
        <p>
          <span className="font-medium">Celular: </span> {detail.phone}
        </p>
        <p>
          <span className="font-medium">Localización: </span> {detail.direccion} /{" "}
          {detail.ciudad} / {detail.provincia}
        </p>
      </div>
    </>
  );
}
