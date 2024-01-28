import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
function LocalCulinary() {
  const breadCrumbs = [
    { title: "Home", path: "/" },
    { title: "Local Culinary", path: "/localculinary" },
  ];
  return (
    <>
      <Breadcrumb breadCrumbs={breadCrumbs} />
      <div className="min-h-screen container">LocalCulinary</div>
    </>
  );
}

export default LocalCulinary;
