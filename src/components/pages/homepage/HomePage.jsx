import React from "react";
const HomePage = () => {
  return (
    <div className="mx-12">
      <div className="flex flex-row gap-6">
        <div className="bg-blue-400 flex-grow">
          <h1>Part One Here</h1>
        </div>
        <div className="w-1/3 bg-lime-200  h-64 rounded-md">
          <h1>Part Two Here</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
