import { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [h1Name, setH1name] = useState("");
  const [h1Age, setH1Age] = useState("");

  const nameOnChangeHanlder = (e) => {
    setName(e.target.value);
  };

  const ageOnChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const nameOnClickHanlder = () => {
    setH1name(name);
    console.log(h1Name);
  };

  const ageOnClickHanlder = () => {
    setH1Age(age);
    console.log(h1Age);
  };

  useEffect(() => {
    console.log("마운트 됨");
    console.log(h1Name);
    console.log(h1Age);
    return () => {
        console.log("언마운트 됨")
    }
  }, [h1Name, h1Age])
  return(
    <div>
      <h1>이름 : {h1Name}</h1>
      <h1>나이 : {h1Age}</h1>
      <input type="text" value={name} onChange={nameOnChangeHanlder} />
      <button onClick={nameOnClickHanlder}>이름 확인</button>
      <input type="text" value={age} onChange={ageOnChangeHandler} />
      <button onClick={ageOnClickHanlder}>나이 확인</button>
    </div>
  );
}

export default Effect1;
