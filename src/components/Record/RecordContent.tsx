import ContentBox from "@components/MyPage/ContentBox";
import MyPageBox from "@components/MyPage/MyPageBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RecordContent = () => {
  const [isDetailedView, setIsDetailedView] = useState(false);

  const navigate = useNavigate();

  const handleClickAddRecord = () => {
    navigate("/addRecord");
  };

  const handleClickMore = () => {
    setIsDetailedView(!isDetailedView);
  };
  return (
    <RecordContentWrapper>
      <MyPageBox>
        <p>이력</p>
        <button onClick={() => handleClickAddRecord()}>추가</button>
        <ContentBox>
          <ContentHeader>
            <p>소프트웨어 마에스트로</p>
            <p>/수료</p>
            <p>/2020.03~2020.12</p>
          </ContentHeader>
          <ContentMain>
            <p>웹 백엔드 개발자</p>
          </ContentMain>
          {isDetailedView ? <div>{/* 자세한 내용을 보여주는 부분 */}</div> : <div>{/* 간략한 내용을 보여주는 부분 */}</div>}
          <DetailButton onClick={() => handleClickMore()}>{isDetailedView ? "간략히 보기" : "자세히 보기"}</DetailButton>
        </ContentBox>
      </MyPageBox>
    </RecordContentWrapper>
  );
};
export default RecordContent;

const RecordContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DetailButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 10px;
  transform: translateY(-40%);
  font-size: 12px;
  color: #888888;
  border: 0px;
  background-color: #fafafa;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
`;
