/**@jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { IoSearch } from "react-icons/io5";

function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("")
  const filterOnChangeHandler = (e) => {
    setFilter(e.target.id);
  }

  const serachInputValueonChangeHandler = (e) => {
    setSearchInputValue(e.target.value)
  }

  const searchButtonOnClickHanlder = () => {
    setSearchText(searchInputValue);
  }



  return (
    <>
      <div css={s.container}>
        <input css={s.searchInput} type="text" onChange={serachInputValueonChangeHandler} onKeyDown={(e) => {
          if(e.key === "Enter") {
            searchButtonOnClickHanlder()
          }
        }}/>
        <button css={s.searchButton} onClick={searchButtonOnClickHanlder}>
          <IoSearch />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input type="radio" id="all" name="filter" checked={filter === "all"} onChange={filterOnChangeHandler}/>
        <label htmlFor="all">전체</label>
        <input type="radio" id="complete" name="filter" checked={filter === "complete"} onChange={filterOnChangeHandler}/>
        <label htmlFor="complete">완료</label>
        <input type="radio" id="incomplete" name="filter" checked={filter === "incomplete"} onChange={filterOnChangeHandler}/>
        <label htmlFor="incomplete">미완료</label>
      </div>
    </>
  );
}

export default Header;
