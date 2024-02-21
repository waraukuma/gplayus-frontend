import React from "react";
import { Card } from "react-bootstrap";

//MyAppPage, MyTesterPage에서 불러올 데이터()

const MyAppLists = [
  {
    id: 1,
    title: "BlueDragonQuiz",
    description: "안드로이드 전용, 신조어관련",
    // imageSrc: "",
  },
  {
    id: 2,
    title: "Gplayus",
    description: "구글안드로이드 앱 등록 테스터 사용자를 위한 웹사이트",
    // imageSrc: "",
  },
  {
    id: 3,
    title: "제목 app",
    description: "앱설명 10자 이상",
    imageSrc: "",
  },
  {
    id: 4,
    title: "제목 app",
    description: "앱설명 10자 이상",
    // imageSrc: "",
  },
  {
    id: 5,
    title: "제목 app",
    description: "앱설명 10자 이상",
    // imageSrc: "",
  },
];

const AppCard = ({ id, title, description, imageSrc, border }) => {
  // console.log(id, title, description);

  return (
    <Card style={{ margin: "1.5rem", padding: "1rem", border: `${border}` }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">부제목</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Link href="#">앱으로 이동</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

const AppList = ({ status }) => {
  return (
    <div>
      {MyAppLists.map((app) => (
        <AppCard
          key={app.title}
          {...app}
          border={
            status === "대기"
              ? " 2px solid black"
              : status === "진행"
              ? " 2px solid red"
              : status === "완료"
              ? " 2px solid blue"
              : ""
          }
        />
      ))}
    </div>
  );
};

export default AppList;
