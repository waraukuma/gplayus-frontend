import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

// 구글인증API연동 연동 환경변수
const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLoginButton = () => {
  const [profile, setProfile] = useState(null);
  const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    setProfile(profile);
  };

  const onSignOut = () => {
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <img src={profile.getImageUrl()} alt="profile" />
          <p>Name: {profile.getName()}</p>
          <p>Email: {profile.getEmail()}</p>
          <button onClick={onSignOut}>Sign out</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSignIn}
          onFailure={onSignIn}
        />
      )}
    </div>
  );
};

export default GoogleLoginButton;
