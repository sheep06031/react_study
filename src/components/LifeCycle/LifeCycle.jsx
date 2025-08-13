import React, { useEffect } from "react";

function LifeCycle({count}) {
  console.log("렌더링 됨");
  useEffect(() => {
    console.log("마운트 됨");

    return () => {
      console.log("언마운트 됨");
    };
  },[]);

  return (
    <div>
      <h4>컴포넌트</h4>
        <p>부모가 준 숫자 : {count}</p>
    </div>
  );
}

export default LifeCycle;
