import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
} from "react-bootstrap";

import Badge from "../components/Badge";
import AppCards from "../components/AppCards";
import TesterBoard from "../components/Boards/TesterBoard";
import { useNavigate, useParams } from "react-router-dom";
import MyAppLists from "../components/MyAppLists";
import MyBoard from "../components/Boards/MyBoard";

export default function AppDetailsPage() {
  //로그인 후 상태 가정
  const loginId = localStorage.getItem("login_id");
  const loginName = localStorage.getItem("login_name");
  const loginEmail = localStorage.getItem("login_email");
  const { id } = useParams();

  const [showComfirm, setShowComfirm] = useState(false);
  const [app, setApp] = useState({});

  const handleApplyClick = () => {
    setShowComfirm(true);
    console.log("handle click");
  };

  useEffect(() => {
    const appData = MyAppLists.find((app) => app.id === parseInt(id));
    console.log(`AppDetailsPage useEffect ${appData}`);
    setApp(appData);
  }, [id]);
  console.log("AppDetailsPage");

  const navigate = useNavigate();
  const appEdit = () => {};
  const appDel = () => {};
  const appReg = () => {
    navigate(`/register`);
  };
  const [selected, setSelected] = useState(false);
  console.log(setSelected);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 c-2">
          <Card>
            <Card.Body>
              <div className="p-1">
                <div>
                  <Badge />
                  <AppCards app={app} />
                </div>
                <div className="mb-2 text-muted">
                  Badge, AppCards 컴퍼넌트 사용
                  <Button
                    variant="primary"
                    className="m-2"
                    onClick={appEdit}
                    disabled={app.developer && app.developer !== loginId}
                  >
                    수정
                  </Button>
                  <Button
                    variant="danger"
                    className="m-2"
                    onClick={appDel}
                    disabled={app.developer && app.developer !== loginId}
                  >
                    삭제
                  </Button>
                  <Button
                    variant="success"
                    className="m-2"
                    onClick={appReg}
                    // disabled={app.developer && app.developer !== loginId}
                  >
                    등록
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <div className=" c-2">
            {app.developer && app.developer === loginId ? (
              <MyBoard selected={selected} />
            ) : (
              <>
                <TesterBoard
                  showComfirm={showComfirm}
                  setShowComfirm={setShowComfirm}
                />
              </>
            )}
          </div>
        </div>

        <div className="col-md-6 p-2 c-2">
          <Card>
            <CardHeader className="d-flex flex-row gap-4">
              <CardTitle className="text-sm font-semibold">
                로그인 사용자 정보
              </CardTitle>
            </CardHeader>
            <CardBody className="d-flex align-items-center p-4">
              <div className="ms-3">
                <CardTitle className="font-semibold">
                  사용자이름(UserName) : {loginName}
                </CardTitle>
                <CardText className="text-xs text-gray-400">
                  사용자이메일@example.com : {loginEmail}
                </CardText>
              </div>
            </CardBody>
          </Card>
          <div className=" mt-5 d-flex position-relative">
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              className="w-100 position-absolute bottom-0 start-50 translate-middle-x "
            >
              <Button
                style={{ flex: 1 }}
                onClick={() => handleApplyClick()}
                disabled={app.developer && app.developer === loginId}
              >
                참여
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
