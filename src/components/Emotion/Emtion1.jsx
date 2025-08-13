/**
 * 라이브러리 설치하기 npm i @emotion/react
 * jsx 태그의 css 속성 활성화 => 주석으로 @jsxImportSource @emotion/react
 * css 객체 import => css `` 문자열로 작성
 */

import { css } from "@emotion/react";

/**@jsxImportSource @emotion/react */
function Emtion1() {
  const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
  `;
  const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
  `;
  return (
    <div>
      <div css={box1}></div>
      <div css={box2("gray")}></div>
    </div>
  );
}

export default Emtion1;
