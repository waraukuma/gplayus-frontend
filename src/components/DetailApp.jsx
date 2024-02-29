import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

//AppDetailsPage에서 불러올 데이터()

const MyAppLists = [
  {
    id: 1,
    name: "BlueDragonQuiz",
    description: "안드로이드 전용, 신조어관련",
    android_url: "",
    web_url: "http://localhost:8080/oauth2/google",
    // imageSrc: "",
    joiner: "Choi",
  },
  {
    id: 2,
    name: "Gplayus",
    description: "구글안드로이드 앱 등록 테스터 사용자를 위한 웹사이트",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
    joiner: "Park",
  },
  {
    id: 3,
    name: "얌센김밥",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
    joiner: "",
  },
  {
    id: 4,
    name: "24시 전주콩나물국밥",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
    joiner: "kim",
  },
  {
    id: 5,
    name: "순대실록",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
    joiner: "",
  },
];

const AppCard = ({ id, name, description, android_url, joiner, web_url }) => {
  // console.log(id, name, description);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        margin: "1rem",
        padding: "0.5rem",
        border: "none",
        whiteSpace: "pre-wrap",
      }}
      onClick={() => {
        navigate(`/myapp/${id}`);
        console.log("이동");
      }}
    >
      <Card.Body>
        <Card.Title>
          이름: {name} / {id}
        </Card.Title>
        <Card.Text>지원자: {joiner}</Card.Text>
        <Card.Text>앱 설명: {description}</Card.Text>
        <Card.Link href="#">
          <Card.Text>앱(모바일) 참여 신청: {android_url}</Card.Text>
        </Card.Link>
        <Card.Link href="#">
          <Card.Text>웹(인터넷) 참여 신청: {web_url}</Card.Text>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default function DetailApp() {
  const { id } = useParams();
  console.log(id);
  const [app, setApp] = useState(null);
  useEffect(() => {
    const appData = MyAppLists.find((app) => app.id === parseInt(id));
    setApp(appData);
  }, [id]);

  return <div>{<AppCard {...app} />}</div>;
}
