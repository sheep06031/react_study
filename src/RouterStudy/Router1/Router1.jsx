import { css } from "@emotion/react";
import { useState } from "react";
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";

/**
 * React Router Dom
 * 리액트 => single page Application(spa)
 * 페이지 이동 (라우팅)을 구현할 수 있게해주는 라이브러리
 * 페이지의 주소나 링크를 클릭했을때 페이지 전체를 새로고침하지 않고 주소에 맞는 특정 컴포넌트만
 * 보여주어 마치 여러 페이지가 있는 것처럼 동작
 */
/**@jsxImportSource @emotion/react */

function Router1() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  //useNavigate는 페이지를 이동시키는 함수를 제공하는 Hook
  //버튼 클릭처럼 특정 로직이 실행된 후에 페이지를 이동시키고 싶을 때 사용

  const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: #eee;
  `;

  const countBox = css`
    display: flex;
  `;

  const main = (color) => css`
    width: 100%;
    height: 800px;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  `;

  const footer = css`
    width: 100%;
    height: 100px;
    background-color: green;
  `;

  return (
    <div css={layout}>
      <header css={header}>
        {/* a태그 클릭 시 브라우저가 페이지 전체를 새로고침 */}
        {/* spa의 장점의 의미가 없어지고, 상태도 초기화가 됨 */}
        <a href="/color/red">RED</a>
        <a href="/color/blue">BLUE</a>
        <a href="/color/orange">ORANGE</a>
        {/* 링크 컴포넌트는 페이지를 새로고침하지 않고 화면의 내용만 부드럽게 교체 */}
        <Link to={"/color/red"}>RED(Link)</Link>
        <Link to={"/color/blue"}>RED(Link)</Link>
        <Link to={"/color/orange"}>RED(Link)</Link>
        <button onClick={() => navigate("/color/red")}>RED</button>
        <button onClick={() => navigate("/color/blue")}>BLUE</button>
        <button onClick={() => navigate("/color/orange")}>ORANGE</button>
        <div css={countBox}>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      {/* 여러 라우트를 감싸는 영역 */}
      <Routes>
        {/* 특정 경로와 그 경로에서 보여줄 컴포넌트를 이어주는 역할 */}
        {/* 브라우저의 주소창이 path와 일치하는 route를 찾아 해당 컴포넌트를 화면에 띄워줌 */}
        {/* 단 routes안에 있는 여러 route중 path가 일치하는거 하나만 띄워줌 */}
        <Route
          path="/"
          element={<main css={main("white")}>메인 홈 화면</main>}
        />
        <Route
          path="/color/red"
          element={<main css={main("red")}>RED화면</main>}
        />
        <Route
          path="/color/blue"
          element={<main css={main("blue")}>BLUE 화면</main>}
        />
        <Route
          path="/color/orange"
          element={<main css={main("orange")}>ORANGE 화면</main>}
        />
      </Routes>
      <footer css={footer}>푸터영역</footer>
    </div>
  );
}

export default Router1;
