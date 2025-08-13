/**
 * 자식 요소 전달법
 * 1. props 속성을 사용
 * 2. props에 내장되어있는 children 속성 이용
 */

function Props3({ch1 , children }) {
    console.log(children)
  return (
    <div>{children}</div>
  )
}

export default Props3