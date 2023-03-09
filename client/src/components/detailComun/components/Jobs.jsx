export default function Jobs({ detail }) {
  return (
    <>
      <h2 className="font-medium pb-3">Jobs</h2>
      <p>Trabajos el/los cual/cuales el user desempeña:</p>
      {detail.Jobs.map((job, index) => (
        <>
          <h1>- {job.name}</h1>
        </>
      ))}
    </>
  );
}
