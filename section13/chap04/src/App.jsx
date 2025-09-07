import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {  
  // nav : 특정 조건에 따라 페이지 이동
  const nav = useNavigate();
  const onClickButton = () => {
      nav("/new");
  }

  return (
    <>
      <button onClick={onClickButton}>New 페이지로 이동</button><br/>
      <button onClick={() => {nav("..");}}>이전 페이지이동</button><br/>
      <button onClick={() => {nav("/diary/diaryDtl", {relative: "path"});}}>상세 페이지이동</button><br/>

      ================ Link 컴포넌트 ================<br />
      <div>
        <Link to={"/"} className={"link"}>Home</Link>
        <Link to={"/new"} className={"link"}>New</Link>
        <Link to={"/diary"} className={"link"}>Diary</Link>
      </div>
      =============== a 태그 ================<br />
      <div>
        <a href={"/"} className={"link"}> Home</a>
        <a href={"/new"} className={"link"}> New</a>
        <a href={"/diary"} className={"link"}> Diary</a>
      </div>
      =============== 바뀐 컴포넌트 ================<br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />}>
          <Route path="/diaryDtl" element={<Diary />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;