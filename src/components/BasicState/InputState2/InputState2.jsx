import { useState } from "react"

function InputState2() {
    const [input, setInput] = useState({
        t1: "",
        t2: "",
        t3: "",
    })

    const onChangeHanlder = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newInput = {
            ...input,
            [name]: value,
        }

        setInput(newInput)
    }
  return (
    <div>
        <h1>{input.t1}</h1>
        <h1>{input.t2}</h1>
        <h1>{input.t3}</h1>
        <input name="t1" type="text" onChange={onChangeHanlder}/>
        <input name="t2" type="text" onChange={onChangeHanlder}/>
        <input name="t3" type="text" onChange={onChangeHanlder}/>
    </div>
  )
}

export default InputState2