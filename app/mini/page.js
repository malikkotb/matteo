import SceneCanvas from "../../components/SceneCanvas";
import InfoScroll from "../../components/InfoScroll";

export default function page() {
  return (
    <div className="flex w-screen h-screen">
      {/* <div className="w-1/2 overflow-hidden">
        <SceneCanvas source={"/mini.glb"} />
      </div> */}
      <InfoScroll />
    </div>
  );
}