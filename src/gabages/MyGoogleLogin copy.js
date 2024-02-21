import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import Gsignin from "../assets/Gsignin2.png";
import GoogleLoginButton from "./GoogleLoginButton";
import { Container } from "react-bootstrap";

// 구글인증API연동 연동 환경변수
const clientId = process.env.REACT_APP_CLIENT_ID;
// console.log(clientId);

//외부링크연결(새창 열기)
const redirectUrl1 = () => {
  window.open(`http://www.hangaramit.com/`);
};

//Gplayus 서버연결+ 보안
const redirectUrl2 = () => {
  // window.location.href = `http://192.168.0.156:8080/auth/google`;
  // window.location.href =
  //   `https://accounts.google.com/o/oauth2/v2/auth?${clientId}` +
  //   `&redirect_uri=http://localhost:3000/login` +
  //   `&response_type=code` +
  //   `&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile` +
  //   `&prompt=select_account consent`;

  // Google OAuth 로그인 사이트보안(직접 로그인 API 호출/SameSite 속성 Strict)
  const GplayusUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=" +
    { clientId } +
    "&scope=" +
    encodeURIComponent(
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
    ) +
    "&response_type=" +
    encodeURIComponent("code") +
    "&prompt=" +
    encodeURIComponent("select_account consent") +
    // '&hosted_domain=' + encodeURIComponent('example.com') +
    "&redirect_uri=" +
    encodeURIComponent("http://localhost:3000/login/callback") +
    "&state=" +
    encodeURIComponent(
      JSON.stringify({
        sameSite: "Strict",
      })
    );
  window.location.href = GplayusUrl;

  //Gplay서버에서 세션속성 설정 후 처리예정  user_info = get_user_info()
  // 로그인 후 세션 저장
  // localStorage.setItem('user_id', user_info.id);
  // localStorage.setItem('username', user_info.username);
  // localStorage.setItem('email', user_info.email);
  // localStorage.setItem('expires', Date.now() + (1000 * 60 * 60)); // 1시간 유효

  // // 세션 유효성 검사
  // if (!localStorage.getItem('user_id') || !localStorage.getItem('username') || !localStorage.getItem('email') || !localStorage.getItem('expires')) {
  //   // 로그인 페이지로 이동
  //   navigator('/login');
  // }

  // // 세션 만료 확인
  // if (Date.now() > localStorage.getItem('expires')) {
  //   // 세션 삭제 및 로그인 페이지로 이동
  //   localStorage.clear();
  //   navigator('/login');

  // }

  // // 사용자 정보 출력
  // document.getElementById('username').textContent = localStorage.getItem('username');
};

const MyGoogleLogin = () => {
  // console.log("GoogleLogIn");

  const navigate = useNavigate();
  const redirectHome = () => {
    navigate(`/login`);
  };

  const requestBack = () => {
    // TODO : 백 요청 로직
  };

  const responseBack = () => {
    // TODO : 백 응답 로직
  };

  return (
    <Container className="Login">
      <img
        src={logo1}
        class="img-fluid"
        alt="Gplayus_logo"
        onClick={redirectHome}
      />

      {/* 구글API연동 */}
      {/* <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          ButtonText="google login"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            console.log(jwtDecode(credentialResponse.credential)); //디코딩된 jwt(jsonwebtoken)확인
            // cookiePolicy={'single_host_origin'}
            // SameSite 속성 설정
          }}
          onError={(error) => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider> */}
      {/* {
        <GoogleOAuthProvider>
          <GoogleLoginButton />
        </GoogleOAuthProvider>
      } */}

      {/*Gplayus 서버연결*/}
      <Container fluid justify-content-center>
        <img src={Gsignin} alt="Gplayus_movetoserver" onClick={requestBack} />
      </Container>

      {/*외부링크연결(새창 열기) 한가람*/}
      {/* <p
        className="text-bg-info fw-bolder h-100 text-center"
        onClick={redirectUrl1}
      >
        HangaramIt
      </p> */}
    </Container>
  );
};

export default MyGoogleLogin;
