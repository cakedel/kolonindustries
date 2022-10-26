import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modify = ({ list, setList, num }) => {
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  // params의 값과 일치하는 객체를 list 배열에서 찾아서 호출
  const inputSort = useRef();
  const LINK = useNavigate();
  const [modify, setModify] = useState({
    id: view.id,
    sort: view.sort,
    company: view.company,
    title: view.title,
    content: view.content,
    date: view.date,
  });
  // modify의 초기 값을 위에서 찾았던 객체의 key, value값과 일치시킨다.
  const modifyInput = (e) => {
    setModify({
      ...modify,
      [e.target.name]: e.target.value,
      id: id,
    });
  };
  console.log(modify);

  const modifyBoard = () => {
    if (inputSort.current.value === "선택" || "") {
      alert("경력 유무를 입력해주세요.");
    } else {
      const post = list.map((el) =>
        String(el.id) === id
          ? {
              ...modify,
              title: modify.title,
              content: modify.content,
              date: modify.date,
              company: modify.company,
            }
          : el
      );
      setList(post);
      LINK("/subMenu/5");
    }
     // 경력 유무를 입력하지 않으면 submitList가 실행되지 않도록 하는 검증.
  };

  return (
    <div className="Write">
      <h3>글 수정하기</h3>
      <table className="writeTable">
        <tbody>
          <tr>
            <td className="writeTitle">경력구분</td>
            <td>
              <select
                type="text"
                value={modify.sort || ""}
                name="sort"
                onChange={modifyInput}
                ref={inputSort}
              >
                <option value="선택">선택</option>
                <option value="경력">경력</option>
                <option value="신입">신입</option>
              </select>
            </td>
            <td className="writeTitle">회사명</td>
            <td>
              <input
                type="text"
                value={modify.company || ""}
                name="company"
                onChange={modifyInput}
              />
            </td>
          </tr>
          <tr>
            <td className="writeTitle">제목</td>
            <td>
              <input
                className="inputTitle"
                type="text"
                value={modify.title || ""}
                name="title"
                onChange={modifyInput}
              />
            </td>
            <td className="writeTitle">날짜</td>
            <td>
              <input
                type="date"
                value={modify.date || ""}
                name="date"
                onChange={modifyInput}
              />
            </td>
          </tr>
          <tr>
            <td className="writeTitle">내용</td>
            <td colSpan={3}>
              <input
                className="inputContent"
                type="text"
                value={modify.content || ""}
                name="content"
                onChange={modifyInput}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="buttonGroup">
        <button className="writeBtn" onClick={modifyBoard}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default Modify;
