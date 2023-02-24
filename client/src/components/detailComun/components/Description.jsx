export default function Description({ detail }) {
  return (
    <>
      <div class="flex flex-col justify-between p-3">
        <h2 class="font-medium pb-3">Acerca del usuario</h2>

        <table className="w-full text-sm text-left text-black-500 dark:text-gray-400 mb-4">
          <thead>
            <tr>
              <th scope="col" class="">
                email
              </th>
              <th scope="col" class=" mx-auto">
                Celular
              </th>
              <th scope="col" class=" mx-auto">
                Locaclización
              </th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>

        <p>
          <span class="font-medium">email: </span> {detail.email}
        </p>
        <p>
          <span class="font-medium">Celular: </span> {detail.phone}
        </p>
        <p>
          <span class="font-medium">Localización: </span> {detail.direccion} /{" "}
          {detail.ciudad} / {detail.provincia}
        </p>
      </div>
    </>
  );
}
