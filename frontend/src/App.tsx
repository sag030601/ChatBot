import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import Chat from "./pages/Chat";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import NotFound1 from "./pages/NotFound1";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={< NotFound1/>} />
      </Routes>
    </main>
  );
}

export default App;
