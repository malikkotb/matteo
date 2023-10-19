import SceneCanvas from "../components/SceneCanvas";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <div className="flex justify-between h-1/4">
        <div>Home About</div>
        <div className="">Matteo Just</div>
      </div>

      <div className="h-2/4 grid grid-cols-4">
        <SceneCanvas source={"/mini.glb"} />
       
       
      </div>

      <div className="h-1/4">Description</div>
    </main>
  );
}
