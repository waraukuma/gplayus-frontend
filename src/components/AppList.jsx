import React, { useEffect, useState } from "react";
import MyAppLists from "./MyAppLists";
import AppCards from "./AppCards";

export default function AppList({ status, searchData, clearSearch }) {
  const [appData, setAppData] = useState([]);
  console.log(`FindingAllApps appData ${appData}`);
  console.log(appData);
  console.log(status);

  //검색
  useEffect(() => {
    console.log("AllApps effect");
    if (!searchData || searchData === "") {
      setAppData(MyAppLists);
      console.log(`searchData ${MyAppLists}`);
    }
    //검색데이터 필터링
    else {
      const filteredApps = MyAppLists.filter((item) => {
        return (
          item.title.indexOf(searchData) > -1 ||
          item.description.indexOf(searchData) > -1 ||
          item.joiner.indexOf(searchData) > -1
        );
      });
      setAppData(filteredApps);
      if (filteredApps.length === 0) {
        alert("검색된 데이터가 없습니다.");
        clearSearch();
      }
    }
  }, [searchData]);

  console.log("dangdang");

  return (
    <div>
      {appData.map((apps) => (
        <AppCards
          app={apps}
          key={apps.id}
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
