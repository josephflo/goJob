import Loading from "./Loading";

export default function LoadingHomePage() {
  return (
    <>
      <div role="status" className="flex items-center justify-center h-screen ">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <h1 className="uppercase font-bold tracking-[4px] p-3">Go-Job</h1>
      </div>
    </>
  );
}
