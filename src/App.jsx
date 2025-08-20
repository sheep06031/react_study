// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import InputState from "./components/BasicState/InputState/InputState";
import InputState2 from "./components/BasicState/InputState2/InputState2";
import InputState3 from "./components/BasicState/InputState3/InputState3";
import InputState4 from "./components/BasicState/InputState4/InputState4";
import DomRef from "./components/DomRef/DomRef";
import Effect1 from "./components/Effect/Effect1/Effect1";
import Effect2 from "./components/Effect/Effect2/Effect2";
import Emotion2 from "./components/Emotion2/Emotion2";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import LifeCycleApp from "./components/LifeCycle/LifeCycleApp";
import Render from "./components/LifeCycle/Render";
import FruitsFilter from "./components/Practice/FruitsFilter/FruitsFilter";
import Login from "./components/Practice/Login/Login";
import UserProfile from "./components/Practice/UserProfile/UserProfile";
import Index from "./components/TodoList/pages";
import Router1 from "./RouterStudy/Router1/Router1";
import Router2 from "./RouterStudy/Router2/Router2";
import Router3 from "./RouterStudy/Router3/Router3";
import Router4 from "./RouterStudy/Router4/Router4";

function App() {

  return (
    <BrowserRouter>
    <>
      <Router4 />
    </>
    </BrowserRouter>
    /**
     * borwserRouter로 감싸진 내부에 있는 컴포넌트들만 routes, route, link, useNavigation
     * 같은 라우터 기능을 사용할 수 있다.
     */
    
  );
}

export default App;
