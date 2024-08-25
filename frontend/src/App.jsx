import React, { Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
const Layout = React.lazy(() => import("./Layout"));
import { Toaster } from "react-hot-toast";
import api from "./utils/api";

function App() {
  useEffect(() => {
    const login = async () => {
      try {
        const res = await api.post("/login", {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
        });
        // await api.post("/start-session");

        const token = res.data.data;
        localStorage.setItem("token", token);
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    // const endSession = async () => {
    //   try {
    //     await api.post("/end-session");
    //   } catch (error) {
    //     console.error("End session failed", error);
    //   }
    // };

    login();

    // const handleBeforeUnload = event => {
    //   event.preventDefault();
    //   endSession();
    //   event.returnValue = "";
    // };

    // window.addEventListener("beforeunload", handleBeforeUnload);

    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
