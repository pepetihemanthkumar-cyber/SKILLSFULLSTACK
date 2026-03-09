import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LocalUserList from "./components/LocalUserList";
import UserList from "./components/UserList";
import FakePostList from "./components/FakePostList";
import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/local-users" element={<LocalUserList />} />

        <Route path="/users-api" element={<UserList />} />

        <Route path="/fake-posts" element={<FakePostList />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;