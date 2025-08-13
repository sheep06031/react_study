import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [FilterFruits, setFilterFruits] = useState(fruits);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const newFilterFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(newFilterFruits)
    setFilterFruits(newFilterFruits);
    console.log("마운트됨")
    return () => {
        console.log("언마운트 됨")
    }
  }, [inputValue]);

  return (
    <div>
      <ul>
        {FilterFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default FruitsFilter;

//input하나 만들고 UL 만들고 input에 과일이름을 검색해서 필터를 거친뒤에 li로 출력
//최초에는 전체 과일을 보여주고 내가 입력ㅇㄹ 할때마다 즉시 filter를 거쳐서 li로 보여주기
