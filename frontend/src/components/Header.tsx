import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "./context/AuthContent";
import NavigtaionLink from "./shared/NavigtaionLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              {" "}
              <NavigtaionLink
                bg="#00fffc"
                to="/chat"
                text="GO To Chat"
                textColor="black"
              />{" "}
              <NavigtaionLink
                bg="#51538f"
                textColor="white"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigtaionLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />{" "}
              <NavigtaionLink
                bg="#51538f"
                textColor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
