import React from "react";
import { Link, Outlet } from "react-router-dom";
const WorkOverview = () => {
  return (
    <div>
      WorkOverview
      <Link to="/works/work1">Work1</Link>
      <Outlet />
    </div>
  );
};

export default WorkOverview;
