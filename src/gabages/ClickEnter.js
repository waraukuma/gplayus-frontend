import React, { createContext, useRef } from "react";

// 참조를 공유하기 위한 컨텍스트 생성
const InputContext = createContext();
export { InputContext };

export default function ClickEnter() {
  const myInput = useRef();

  return (
    <InputContext.Provider value={myInput}>
      <button
        onClick={() => {
          myInput.current.focus();
        }}
      />
    </InputContext.Provider>
  );
}
