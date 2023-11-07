import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // 스크롤을 통한 렌더링
  React.useLayoutEffect(
    function () {
      // if not a hash link, scroll to top
      if (hash === "") {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
      // else scroll to id
      else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          navigate("404", { replace: false });
        }
      }
    },
    [pathname, hash, navigate]
  );

  return null;
}
