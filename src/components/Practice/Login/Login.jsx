import { useEffect, useState } from "react";
import "./Login.css";

const API_URL = "http://localhost:8080/auth/signup";

function Login() {
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    setIsDisabled(!values.username || !values.password || !values.email);
  }, [values]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupHandler = async (event) => {
    event.preventDefault();

    if (!values.username) {
      setError("아이디를 입력해주세요");
      return;
    }
    if (!values.password) {
      setError("비밀번호를 입력해주세요");
      return;
    }
    if (!values.email) {
      setError("이메일을 입력해주세요");
      return;
    }

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();

      if (responseData.status !== "success") {
        setError(responseData.message);
      } else {
        setError(null);
        alert(responseData.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={signupHandler}>
        <div>
          <label htmlFor="username">아이디</label>
          <input
            value={values.username}
            type="text"
            id="username"
            name="username"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            value={values.password}
            type="password"
            id="password"
            name="password"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input 
            value={values.email}
            type="email"
            id="email"
            name="email"
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit" disabled={isDisabled}>
          가입하기
        </button>
      </form>
      <h3>{error}</h3>
    </div>
  );
}

export default Login;
