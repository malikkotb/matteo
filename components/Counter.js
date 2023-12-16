import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
function Number({ n }) {

  const [targetNumber, setTargetNumber] = useState(0);
  const { number } = useSpring({
    from: { number: 0 },
    number: targetNumber,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    setTargetNumber(n);
  }, [n]); // Dependency array includes 'n' to trigger the effect when 'n' changes

  return (
    <animated.div>
      {/* {number.to((n) => n.toFixed(0))} */}
      {number.to((n) => n.toFixed(0).padStart(3, "0"))}
    </animated.div>
  );
}

export default function Counter() {
  return (
    <div className="text-9xl text-white">
      <Number n={100} />
    </div>
  );
}
