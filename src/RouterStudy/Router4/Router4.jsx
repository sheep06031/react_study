import { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

function Component1() {
  const { name } = useParams();
  /**
   * useParam은 Route의 path에 설정된 동적 파라미터를 객체 형태로 가져온다.
   */
  return <h1>path parameter는 {name}입니다.</h1>;
}

function Component2() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.getAll());
    //console.log(searchParams.getAll("age"))
  }, []);

  const onClickHandler = () => {
    setSearchParams((prev) => {
      prev.set("address", "busan");
      return prev;
    });
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>
          URL에 'address=busan' 추가/변경
        </button>
      </div>
    </>
  );
}

function Router4() {
  return (
    <div>
      <Routes>
        {/* path에 콜론을 사용하면 해당 위치의 URL 일부를 name이라는 변수로 받겠다라는 의미 */}
        <Route path="/param1/:name" element={<Component1 />} />
        <Route path="/param2" element={<Component2 />} />
      </Routes>
    </div>
  );
}

export default Router4;
