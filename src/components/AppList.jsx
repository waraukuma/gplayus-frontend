import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";

//MyAppPage, MyTesterPage, AppDetailsPage에서 불러올 데이터()

const MyAppLists = [
  {
    id: 1,
    name: "BlueDragonQuiz",
    description: "안드로이드 전용, 신조어관련",
    android_url: "string",
    web_url: "string",
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

const AppCard = ({
  id,
  name,
  title,
  joiner,
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

export default function AppList({ status, searchData }) {
  const [appData, setAppData] = useState([]);
  console.log(appData);
  console.log(status);

  useEffect(() => {
    console.log("AllApps effect");
    if (!searchData || searchData === "") {
      setAppData(MyAppLists);
    }
    //검색데이터 필터링
    else {
      const filteredApps = MyAppLists.filter((item) => {
        return (
          item.name.indexOf(searchData) > -1 ||
          item.description.indexOf(searchData) > -1 ||
          item.joiner.indexOf(searchData) > -1
        );
      });
      setAppData(filteredApps);
    }
  }, [searchData]);
  console.log("dangdang");
  return (
    <div>
      {appData.map((app) => (
        <AppCard
          key={app.id}
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
