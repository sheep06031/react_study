import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("1");

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL + inputValue);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다");
        return;
      }
      const responseData = await response.json();
      setUser(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [inputValue]);

  if (isLoading) {
    return <div>불러오는 중...</div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <div>
      <div>
        {user ? (
          <div>
            <p>이름: {user.name}</p>
            <p>이메일: {user.email}</p>
            <p>전화번호: {user.phone}</p>
          </div>
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
}

export default UserProfile;
