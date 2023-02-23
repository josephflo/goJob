export default function UserCard({ user }) {
  return (
    <>
      <>
        <h1>
          Name: {user.firstName} {user.lastName}
        </h1>
        <h1>user: {user.user}</h1>
        <h1>email: {user.email}</h1>
        <h1>city: {user.city}</h1>
        <h1>phone: {user.phone}</h1>
        <h1>address: {user.address}</h1>
        <h1>role: {user.role}</h1>
        <hr></hr>
      </>
    </>
  );
}
