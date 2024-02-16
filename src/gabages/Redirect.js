import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();
  const url = location.state;

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);
  return null;
};

export default Redirect;
