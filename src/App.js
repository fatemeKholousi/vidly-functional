import React from "react";
import Navbar from "./components/navbar";
import Routing from "./routing";
function App() {
  return (
    <>
      <Navbar />
        <main className="container">
          <Routing />
        </main>
    </>
  );
}

export default App;
