import React from "react";

const SpotifyCardSkleleton = () => {
  return (
    <div className="flex gap-4 items-stretch">
      <div className="w-16 h-16 rounded-xl bg-bg-dark bg-opacity-10 dark:bg-bg-light dark:bg-opacity-10 animate-pulse"></div>
      <div className="flex flex-col">
        <div className="mb-3 w-32 h-4 rounded-md bg-bg-dark bg-opacity-10 dark:bg-bg-light dark:bg-opacity-10 animate-pulse"></div>
        <div className="mt-auto grid gap-1">
          <p className="w-16 h-4 rounded-md bg-bg-dark bg-opacity-10 dark:bg-bg-light dark:bg-opacity-10 animate-pulse"></p>
          <p className="w-32 h-4 rounded-md bg-bg-dark bg-opacity-10 dark:bg-bg-light dark:bg-opacity-10 animate-pulse"></p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCardSkleleton;
