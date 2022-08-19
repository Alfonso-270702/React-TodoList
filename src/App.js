import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Dashboard, Detail } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Container maxW="5xl">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/item-list/:id" element={<Detail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
