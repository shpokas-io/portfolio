"use client";

import { useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={isLoading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
}