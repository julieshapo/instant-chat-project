import NavBar from "./components/NavBar";
import ChatRoom from "./Pages/ChatRoom";
import Auth from "./Pages/Auth";
import { Route, Routes } from "react-router-dom";
import { PrivatRoute } from "./routes/PrivatRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/chat"
          element={
            <PrivatRoute>
              <ChatRoom />
            </PrivatRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
