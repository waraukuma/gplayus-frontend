import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { React } from "react";

const MyGoogleLogin = () => {
  // console.log("GoogleLogIn");
  // const clientId =
  //   "851393729657-65t7fsqk1rihjukoa53t09a7pckuak2f.apps.googleusercontent.com";
  const clientId = process.env.REACT_APP_CLIENT_ID;
  // console.log(clientId);

  return (
    <div class="d-grid gap-2">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          ButtonText="google login"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            console.log(jwtDecode(credentialResponse.credential)); //디코딩된 jwt(jsonwebtoken)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default MyGoogleLogin;
