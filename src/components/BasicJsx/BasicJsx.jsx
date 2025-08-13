/**
 * JSX
 * 자바 스크립트와 HTML을 결합한 문법
 */

function BasicJsx() {
  // 1. 태그가 열리면 꼭 닫아야 한다.
  const jsx1 = (
    <div>
      <p>JSX 특징</p>
      <input type="text" />
    </div>
  );
  // 2. 두개 이상으 ㅣ태그는 하나의 태그로 감싸야한다
  const jsx2 = (
    <div>
      <div>1</div>
      <div>2</div>
      div
    </div>
  );
  const name = "김주엽";
  const age = 27;
  const jsx3 = (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{age > 20 ? "성인" : "미성년자"}</h3>
    </div>
  );
  const jsx4 = (
    <>
      <div>{123}</div>
      <div>123123</div>
    </>
  );
  const nameList = [
    <div>김주엽</div>,
    <div>123</div>,
    <div>123</div>
  ]

  const jsx5 = (
    <>
        <div></div>
        <div></div>
    </>
  )

  const jsx6 = (
    <div>
        {jsx4}
        {jsx5}
    </div>
  )

  // 3. 변수, 상스, 리스트, 값등을 표현하려면 {}로 감싸서 표현한다.
  // 단, 자바스크립트 표현식만 들어갈 수 있다.
  // if, for, while 등 대신에 map, filter, 삼항연사자 등을 사용한다.
  return (
    <div>
      {jsx1}
      {jsx3}
      {jsx6}
    </div>
  );
}

export default BasicJsx;
