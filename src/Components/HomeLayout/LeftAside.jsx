import React, { Suspense } from "react";
import CategorysData from "./CategorysData";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <CategorysData></CategorysData>
      </Suspense>
    </div>
  );
};

export default LeftAside;
