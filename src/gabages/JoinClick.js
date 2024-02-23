import React from "react";

export default function JoinClick() {
  // 테스터 참여 로직 (필요 시 작성)

  const handleJoin = async () => {
    const response = await fetch("/api/join-test", {
      method: "POST",
    });
    if (response.ok) {
      return "테스터 신청이 완료되었습니다!";
    } else {
      return "테스터 신청에 실패했습니다.";
    }
  };
  return <button onClick={handleJoin}>테스터 참여</button>;
}
