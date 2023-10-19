import SceneCanvas from "../../components/SceneCanvas";
import InfoScroll from "../../components/InfoScroll";

export default function page() {
  return (
    <div className="flex w-screen h-screen bg-yellow-200">
      <div className="w-1/2">
        {" "}
        <SceneCanvas source={"/mini.glb"} />
      </div>
      <InfoScroll />
    </div>
  );
}
