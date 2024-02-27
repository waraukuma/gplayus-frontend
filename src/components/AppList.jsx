import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";

//MyAppPage, MyTesterPage, AppDetailsPage에서 불러올 데이터()

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
    title: "자금성",
    description: "앱설명 10자 이상",
    imageSrc: "",
  },
  {
    id: 4,
    title: "24시 전주콩나물국밥",
    description: "앱설명 10자 이상",
    // imageSrc: "",
  },
  {
    id: 5,
    title: "순대실록",
    description: "앱설명 10자 이상",
    // imageSrc: "",
  },
];

const AppCard = ({
  id,
  name,
  title,
  description,
  android_url,
  web_url,
  border,
}) => {
  // console.log(id, title, description);
  const navigate = useNavigate();

  return (
    <Card
      className="p-5"
      style={{ margin: "1.5rem", padding: "1rem", border: `${border}` }}
      //앱 상세페이지 이동
      onClick={() => {
        navigate(`/myapp/${id}`);
        console.log("이동");
      }}
    >
      <Card.Body>
        {/* 벳지 */}
        <div className="p-3">{<Badge />}</div>
        <Card.Title>
          {id}/{title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Link href="#">앱으로 이동</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default function DetailApp({ status }) {
  console.log(status);
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
}
