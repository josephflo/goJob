import Loading from "./Loading";

export default function LoadingHomePage() {
  return (
    <>
      <div role="status" className="flex items-center justify-center h-screen ">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <h1 className="uppercase font-bold tracking-[4px] p-3">GoJob</h1>
      </div>
    </>
  );
}
