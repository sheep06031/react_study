import { Link, Route, Routes } from "react-router-dom";

/**
 * 하위 라우트(서브 라우트)
 * 특정 경로의 페이지 안에서 또 다른 내부 경로에 따라 다른 컴포넌트를 보여주는 방법
 * 큰 카테고리 안에 작은 소 메뉴가 있는거랑 비슷
 */

function Page1() {
  return (
    <>
      <div>
        <h1>page1</h1>
        <Routes>
          <Route path="/page1" element={<h1>페이지1 입니다</h1>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>페이지2 입니다</h1>
      </div>
    </>
  );
}

function Router2() {
  return (
    <div>
      <header>
        <Link to={"page/page1"}>page1</Link>
        <Link to={"page/page2"}>page2</Link>
        <Link to={"name/name1"}>name1</Link>
        <Link to={"name/name2"}>name2</Link>
      </header>
      <h1>router2</h1>
      <Routes>
        {/* 경로뒤에 /* 와일드 카드 사용시 */}
        {/* 이 경로로 시작하는 모든 하위 경로를 의미 */}
        {/* 즉 /page/page1 또는 /page/page2 등에 해당하는 컴포넌를 page1에서 보내준다 */}
        <Route path="/page/*" element={<Page1 />} />
        <Route
          path="/name/*"
          element={
            <Routes>
              <Route path="/name1" element={<h1>김주엽</h1>} />
              <Route path="/name2" element={<h1>이동윤</h1>} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default Router2;
