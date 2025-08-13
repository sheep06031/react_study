import { useState } from "react";

function InputState4() {
  const inputValueEmpty = {
    productName: "",
    price: "",
    amount: "",
  };

  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState(inputValueEmpty);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickHandler = () => {
    setProducts((prev) => [...prev, inputValue]);
    setInputValue(inputValueEmpty);
  };

  return (
    <div>
      <div>
        <label htmlFor="productName">상품명</label>
        <input
          type="text"
          value={inputValue.productName}
          id="productName"
          name="productName"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">가격</label>
        <input
          type="text"
          value={inputValue.price}
          id="price"
          name="price"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">수량</label>
        <input
          type="text"
          value={inputValue.amount}
          id="amount"
          name="amount"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button onClick={onClickHandler}>확인</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;
