export default function Header({ detail }) {
  return (
    <>
      <>
        {/* <div>
          <img src={detail.image} alt="" class="p-2" />
        </div> */}
        <div class="flex flex-col justify-between p-3">
          <h2 class="font-medium pb-3">Usuario</h2>
          <p>
            <span class="font-medium">Name: </span>
            {detail.firstName} {detail.lastName}
          </p>
          <p>
            <span class="font-medium">Id: </span> {detail.id}
          </p>
        </div>
      </>
    </>
  );
}
