import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";

function CountState() {
  const [count, setCount] = useState("12");

  const onClickHandler = (e) => {
    const num = e.target.value;
    setCount(num + count);
  };
  /**
   * state란 컴포넌트가 가질 수 있는 상태를 의미
   * state를 사용해서 컴포넌트가 렌더링될 때 데이ㅓ를 보유하고, 이 데이터를 업데이트 해 화문을 다시 렌더링 할 수 있다.    
   * usestate는 배열을 반환, 첫번째 요소가 현재 상태의 값, 두번째 요소가 상태를 업데이트 해주는 함수를 반환
   * 자동 재렌더링 되어 state 데이터들이 변경되면 html 에도 자동적으로 변경사항이 적용된다. 
   * 상태가 변경되더라도 새로고침 해 줄 필요가 없음
   */

  return (
    <div>
      <CountHeader count={count} />
      <button value={"1"} onClick={onClickHandler}>
        +1
      </button>
      <button value={"-1"} onClick={onClickHandler}>
        -1
      </button>
    </div>
  );
}

export default CountState;
