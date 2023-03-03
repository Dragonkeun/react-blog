import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "아스날 리그 우승",
    "동물원에서 탈출한 호랑이",
    "공부는 재미가 없다",
  ]);
  let [tabom, setTabom] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "cornflowerblue", fontSize: "20px" }}>blog</h4>
      </div>
      <div className="nav">
        <div className="post-wrapper">
          <input
            className="post-input"
            type="text"
            placeholder="글 제목을 작성하세요"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <input
            className="post-input-button"
            type="button"
            value="글 작성"
            onClick={() => {
              let copyPostTitle3 = [...postTitle];
              copyPostTitle3.unshift(inputValue);
              setPostTitle(copyPostTitle3);
              let copyTabom = [...tabom];
              copyTabom.unshift(0);
              setTabom(copyTabom);
            }}
          />
        </div>
        <div className="nav-right">
          <button
            className="post-edit-button"
            onClick={() => {
              let copyPostTitle = [...postTitle];
              copyPostTitle[0] = "글 제목 변경하기";
              setPostTitle(copyPostTitle);
            }}
          >
            글 수정
          </button>
          <button
            className="post-sort-button"
            onClick={() => {
              let copyPostTitle2 = [...postTitle];
              copyPostTitle2.sort();
              setPostTitle(copyPostTitle2);
            }}
          >
            정렬
          </button>
        </div>
      </div>
      {postTitle.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setTitle(i);
                modal ? setModal(false) : setModal(true);
              }}
            >
              {postTitle[i]}
              <div className="tabom-button">
                <span
                  className="tabom-button-icon"
                  onClick={() => {
                    let copyTabom = [...tabom];
                    copyTabom[i] = copyTabom[i] + 1;
                    setTabom(copyTabom);
                  }}
                >
                  ❤️
                </span>
                {tabom[i]}
              </div>
            </h4>
            <p>{Date()}</p>
            <button
              className="delete-button"
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {modal ? (
        <Modal
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          title={title}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setPostTitle([
            "여자 코트 추천",
            "강아지 옷 추천",
            "오늘 할 일 추천",
          ]);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;
