import { Carduser } from "./carduser";

export default function UsersMap({users}) {
  return (
    <div>
      {users.map((e, index) => (
        <Carduser
          key={index}
          firstName={e.firstName}
          lastName={e.lastName}
          role={e.role}
          provincia={e.provincia}
          ciudad={e.ciudad}
          direccion={e.direccion}
          imageurl={e.imageurl}
          jobs={e.jobs}
          id={e.id}
          rating={e.rating}
          phone={e.phone}
        />
      ))}
    </div>
  );
}