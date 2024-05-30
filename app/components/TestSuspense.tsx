import React from "react";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
};

const TestSuspense = async () => {
  await getData();
  return <div>TestSuspense</div>;
};

export default TestSuspense;
