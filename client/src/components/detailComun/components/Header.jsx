export default function Header({ detail }) {
  return (
    <>
      <>
        {/* <div>
          <img src={detail.image} alt="" className="p-2" />
        </div> */}
        <div className="flex flex-col justify-between p-3">
          <h2 className="font-medium pb-3">Usuario</h2>
          <p>
            <span className="font-medium">Name: </span>
            {detail.firstName} {detail.lastName}
          </p>
          <p>
            <span className="font-medium">Id: </span> {detail.id}
          </p>
        </div>
      </>
    </>
  );
}
