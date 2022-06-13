import React from "react";

function LinkTree() {
  React.useEffect(() => {
    window.location.href = "https://linktree.sanayvarghese.tk";
  }, []);
  return (
    <div>
      Redirecting to linktree....Wait a minute<br></br>
      <a href="https://linktree.sanayvarghese.tk">Go Manually</a>
    </div>
  );
}

export default LinkTree;
