import { useState } from "react";

function InputState3() {
  let inputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };


  const [input, setInput] = useState(inputValueEmpty)
  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    
    setInput((prev) => {
        return {
            ...prev,
            [name]: value
        }
    })
  }

  return (
    <div>
      <h1>이름 : {input.name}</h1>
      <h1>나이 : {input.age}</h1>
      <h1>주소 : {input.address}</h1>
      <input name="name" type="text" onChange={onChangeHandler}/>
      <input name="age" type="text" onChange={onChangeHandler}/>
      <input name="address" type="text" onChange={onChangeHandler}/>
      <button onClick={() => setInput(inputValueEmpty)}>리셋</button>
    </div>
  );
}

export default InputState3;
