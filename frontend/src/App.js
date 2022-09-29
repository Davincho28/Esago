import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Aprobar } from "./inicio/Aprobar";
import { Inicio } from "./inicio/Inicio";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aprobar/:numident" element={<Aprobar />} />
          <Route path="*" element={<Navigate to={"/"}></Navigate>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
