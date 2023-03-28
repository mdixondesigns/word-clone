import React from "react";

import Banner from "../Banner";

function WonBanner({ num }) {
  return (
    <>
      <Banner status="happy">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{num > 1 ? `${num} guesses` : `${num} guess`}</strong>.
        </p>
      </Banner>
    </>
  );
}

export default WonBanner;
