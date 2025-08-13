import { useState } from "react"

function Render() {
    console.log("render 컴포넌트가 렌더링 되었습니다")
    const [count, setCount] = useState(0);
    const onClickHandler = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>현재숫자: {count}
        </h1>
        <button onClick={onClickHandler}>숫자증가</button>
    </div>
  )
}

export default Render