import Model from "../components/Model";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <div className="flex justify-between h-1/4">
        <div>Home About</div>
        <div className="">Matteo Just</div>
      </div>

      <div className="h-2/4 grid grid-cols-4">
        <Model source={"source"} />
        {/* <Model source={"source"} />
        <Model source={"source"} />
        <Model source={"source"} /> */}

      </div>

      <div className="h-1/4">Description</div>
    </main>
  );
}
