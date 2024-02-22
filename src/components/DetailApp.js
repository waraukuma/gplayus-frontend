import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

//APpDetailsPage에서 불러올 데이터()

const MyAppLists = [
  {
    id: 1,
    name: "BlueDragonQuiz",
    description: "안드로이드 전용, 신조어관련",
    android_url: "string",
    web_url: "string",
    // imageSrc: "",
  },
  {
    id: 2,
    name: "Gplayus",
    description: "구글안드로이드 앱 등록 테스터 사용자를 위한 웹사이트",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
  },
  {
    id: 3,
    name: "제목 app",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
  },
  {
    id: 4,
    name: "제목 app",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
  },
  {
    id: 5,
    name: "제목 app",
    description: "앱설명 10자 이상",
    // imageSrc: "",
    android_url: "string",
    web_url: "string",
  },
];

const AppCard = ({ id, name, description, android_url, web_url }) => {
  // console.log(id, name, description);
  const navigate = useNavigate();

  //앱 상세페이지 이동

  return (
    <Card
      style={{ margin: "1rem", padding: "0.5rem" }}
      onClick={() => {
        navigate(`/myapp/${id}`);
        console.log("이동");
      }}
    >
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          {id} / {name}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="#">{android_url}</Card.Link>
        <Card.Link href="#">{web_url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

const DetailApp = () => {
  const { id } = useParams();
  console.log(id);
  const [app, setApp] = useState(null);
  useEffect(() => {
    const appData = MyAppLists.find((app) => app.id === parseInt(id));

    setApp(appData);
  }, [id]);

  return <div>{<AppCard {...app} />}</div>;
};

export default DetailApp;
