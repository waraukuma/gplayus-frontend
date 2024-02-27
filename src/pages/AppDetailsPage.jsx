import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Image,
  Button,
} from "react-bootstrap";
import avatar from "../../assets/avatar1.jpg";
import Badge from "../../components/Badge";
import DetailApp from "../../components/DetailApp";
import Board from "../../components/Board";
import MyJoinAppModal from "../../components/MyJoinAppModal";

function AppDetailsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(false);
  console.log("AppDetailsPage");

  const openModal = () => {
    setSelected(true);
    setShowModal(true);
  };

  return (
    <div className="container">
      {showModal && (
        <MyJoinAppModal
          onConfirm={() => {
            alert("테스터 참여 신청이 완료되었습니다!");
          }}
        />
      )}
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body className="d-flex p-5 flex-column align-items-center">
              <div className="text-center p-2">
                <div>
                  {/* 벳지 */}
                  {<Badge />}
                  {/* 특정 id값으로 필터링하여 표시하기 */}
                  <DetailApp />
                </div>
                console.log(333);
                <Card className="mb-2 text-muted">
                  Badge & Detail Component
                </Card>
              </div>
            </Card.Body>
          </Card>
          console.log(333);
          {/* Board(게시판)컴퍼넌트 */}
          <div className="">{<Board selected={selected} />}</div>
        </div>
        <div className="col-md-6">
          <Card>
            <CardHeader className="d-flex flex-row gap-4">
              <CardTitle className="text-sm font-semibold">
                로그인 사용자 정보
              </CardTitle>
            </CardHeader>

            {/* 로그인 사용자 정보//닉네임/아바타/이메일 */}
            <CardBody className="d-flex align-items-center p-4">
              <Image
                src={avatar}
                alt="Avatar"
                roundedCircle
                fluid
                width="40"
                height="40"
              />
              <div className="ms-3">
                <CardTitle className="font-semibold">
                  사용자이름(UserName)
                </CardTitle>
                <CardText className="text-xs text-gray-400">
                  사용자이메일@example.com
                </CardText>
              </div>
            </CardBody>
          </Card>
          <div className=" mt-5 d-flex position-relative">
            <div className="row position-absolute bottom-0 start-50 translate-middle-x">
              <Button onClick={() => openModal()}>테스터 참여</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetailsPage;
