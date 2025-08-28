import React, { useEffect, useState } from "react";

const Mouseposition = () => {
  const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 });

  const handlemouseposition = (e) => {
    setmouseposition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove",handlemouseposition);
    return () => {
      window.removeEventListener("mousemove",handlemouseposition);
    };
  }, []);

  return mouseposition;
};

export default Mouseposition;
