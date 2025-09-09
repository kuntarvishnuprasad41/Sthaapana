"use client";

import React, { useState } from "react";

function OnErrorImage({ project }) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? "/placeholder.svg" : project.image}
      alt={project.name}
      onError={() => setHasError(true)}
      className={`group-hover:scale-105 transition-transform duration-500 w-full h-full
        ${hasError ? "object-contain p-8" : "object-cover"}
      `}
    />
  );
}

export default OnErrorImage;
