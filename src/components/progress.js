import React from "react";

const Progress = ({ ballon }) => {
  const ballons = [...Array(ballon)].map(i => {
    return <li key={i} />;
  });

  return <ol>{ballons}</ol>;
};

export default Progress;
