import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Router3() {
  //useLocation은 현재 URL의 다양한 정보를 담고 있는 Location 객체를 반환
  const location = useLocation();
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  }

  useEffect(() => {
    console.log("경로이동함");
    console.log(location.pathname);
    if (location.pathname === "/location/2") {
      //이 state는 URL에 보이지 않지만 이동한 페이지에서 location.state로 값을 받을 수 있다.
      navigate("/location/3", {
        state: {
          name: "김주엽",
          age: 23,
        },
      });
    }
  }, [location.pathname]);
  useEffect(() => {
    console.log(location.state);
  }, [location.state]);
  useEffect(()=> {
    console.log("쿼리파라미터 변경됨")
    console.log(decodeURIComponent(location.search))
  },[location.search])
  return (
    <div>
      <Link to={"location/1"}>location1</Link>
      <Link to={"location/2"}>location2</Link>
      <Link to={"location/3"}>location3-1</Link>
      <Link to={"location/3?name=김주엽"}>location3-2</Link>
      <Link to={"location/3?name=이동윤"}>location3-3</Link>
      <button onClick={backBtn}>뒤로가기</button>
      <Routes>
        <Route path="location/1" element={<h1>location1</h1>}></Route>
        <Route path="location/2" element={<h1>location2</h1>}></Route>
        <Route path="location/3" element={<h1>location3</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Router3;
