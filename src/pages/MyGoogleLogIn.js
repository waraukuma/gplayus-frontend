import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { React } from "react";

const MyGoogleLogIn = () => {
  console.log("GoogleLogIn");
  return (
    <>
      <GoogleOAuthProvider clientId="661690568000-mj1kg9e4hgggsb28mmvtgjd9qiub23r6.apps.googleusercontent.com">
        <GoogleLogin
          ButtonText="google logIn"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("LogIn Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default MyGoogleLogIn;
