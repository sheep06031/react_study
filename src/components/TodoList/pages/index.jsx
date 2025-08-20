import { useEffect, useState } from "react";
import Layout from "../components/Layout/layout";
import Main from "../components/Main/main";


function Index() {
  const [todoList, setTodoList] = useState( () => {
    const localStorageTodoList = localStorage.getItem("todoList");
    return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
  });
  const [filter, setFilter] = useState("incomplete");
  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    let localStorageTodoList = localStorage.getItem("todoList");
    if(!localStorageTodoList) {
      localStorageTodoList.setItem("todoList", JSON.stringify([]))
      localStorageTodoList = [];
      setTodoList(localStorageTodoList)
    } else {
      setTodoList(JSON.parse(localStorageTodoList))
    }
  },[])

  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList")
    const todoListJson = JSON.stringify(todoList)
    if(localStorageTodoList !== todoList) {
      localStorage.setItem("todoList", todoListJson)
    }
  }, [todoList])

  const filterTodoList = todoList.filter(todo => {
    if(filter === "all") {
      return true;
    } else if (filter === "complete") {
      return todo.isComplete;
    } else if (filter === "incomplete") {
      return !todo.isComplete;
    }
  }).filter(todo => {
    if(searchText.trim().length === 0) {
      return true;
    } 
    return todo.content.includes(searchText);
  })



  return (
    <Layout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      <Main todoList={filterTodoList} setTodoList={setTodoList}/>
    </Layout>
  );
}

export default Index;
