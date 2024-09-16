"use client"
import React from "react";
import imgUrl from "../../images/somethingWentWrong.svg";
import "./ErrorHandling.scss";

const FallBackUI: React.FC = ({ error, resetErrorBoundary }: any) => {

  return (

    <div role="alert" className="error-container">
      <img src={imgUrl} alt="IMG" height="200" />
      <p>Something went wrong!</p>
      <div>
      </div>
      {/* {error?.message && <pre style={{ color: "red" }}>{error?.message}</pre>} */}
    </div>
  );
}


export default FallBackUI;