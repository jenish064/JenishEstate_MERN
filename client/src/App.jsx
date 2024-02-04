import React from "react";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { Input, Layout, Menu } from "antd";

const NAVBAR_ITEMS = [
  { key: "Home", label: "Home" },
  { key: "About", label: "About" },
  { key: "Sign-in", label: "SignIn" },
  { key: "Profile", label: "Profile" },
];

export default function App() {
  const navigate = useNavigate();
  const { Header, Content } = Layout;
  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <h1 onClick={() => navigate("/")} className="text-white">
          JenishEstate
        </h1>
        <Input />
        <Menu
          theme="dark"
          mode="horizontal"
          items={NAVBAR_ITEMS}
          onClick={(event) => navigate(`/${event.key}`)}
        />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Content>
    </>
  );
}
