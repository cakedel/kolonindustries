import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = ({ list, setList }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  const delList = () => {
    setList(list.filter((it) => String(it.id) !== id));
    LINK("/subMenu/5");
  };
  return (
    <div className="view">
      <table className="viewTable">
        <tbody>
          <tr>
            <td className="viewTitle">제목</td>
            <td colSpan={5} className="titleContent">
              {view.title}
            </td>
          </tr>
          <tr className="bottomLineRow">
            <td className="viewTitle">구분</td>
            <td>{view.sort}</td>
            <td className="viewTitle">회사명</td>
            <td>{view.company}</td>
            <td className="viewTitle">날짜</td>
            <td>{view.date}</td>
          </tr>
          <tr>
            <td colSpan={6} className="viewContent">
              {view.content}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="buttonGruop">
        <button
          className="writeBtn"
          onClick={() => LINK("/subMenu/5/modify/" + view.id)}
        >
          수정하기
        </button>
        <button className="writeBtn" onClick={delList}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default View;
