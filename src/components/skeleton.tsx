import React from "react";
import Skeleton from "react-loading-skeleton";
export default function SkeletonC() {
  return (
    <div className="relative w-full h-10 rounded-md shadow-xl group">
      <span className="absolute inset-0 border-2 border-dashed rounded-md border-slate-50" />
      <Skeleton
        direction="ltr"
        borderRadius={6}
        duration={3}
        baseColor="#fff"
        highlightColor="#64748b"
        className="relative flex items-center h-full px-2 transition-transform transform -translate-x-2 -translate-y-2 group-hover:duration-200 border-slate-10 group-hover:-translate-x-1 group-hover:-translate-y-1"
      ></Skeleton>
    </div>
  );
}
