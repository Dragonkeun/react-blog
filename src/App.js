import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "아스날 리그 우승",
    "우리동네 우동 맛집",
    "새로운 블로그를 만들자",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "cornflowerblue", fontSize: "20px" }}>blog</h4>
      </div>
      <button
        onClick={() => {
          let copy1 = [...글제목];
          copy1[0] = "글 제목 변경하기";
          글제목변경(copy1);
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}
      >
        가나다순 정렬
      </button>
      <div className="list">
        <h4
          onClick={() => {
            modal ? setModal(false) : setModal(true);
          }}
        >
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>3월 1일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[1]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>3월 1일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[2]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>3월 1일 발행</p>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
