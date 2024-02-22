import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Image,
  Button,
} from "react-bootstrap";
import avatar from "../../assets/avatar1.jpg";
import Badge from "../../components/Badge";
import DetailApp from "../../components/DetailApp";

function AppDetailsPage() {
  console.log("AppDetailsPage");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body className="d-flex p-4 flex-column align-items-center">
              <div className="text-center p-2">
                <div>
                  {<Badge />}
                  {/* 특정 id값으로 필터링하여 표시하기 */}
                  <DetailApp />
                </div>
                <div className="">신조어 기반</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <CardHeader className="d-flex flex-row gap-4">
              <CardTitle className="text-sm font-semibold">
                로그인 사용자 정보
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted"></CardSubtitle>
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
          <div className="mt-5 d-flex position-relative">
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <Button>테스터 참여</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetailsPage;
