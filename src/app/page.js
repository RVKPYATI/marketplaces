"use client";
import { MainBlock } from "./components/MainBlock/MainBlock";
import withAuth from "./services/withAuth";
//import { checkAuth } from "./services/authHelper";
import { AuthProvider } from "./services/authContext";
import { useLayoutEffect } from "react";

function Home() {
  return useLayoutEffect(() => {
    <AuthProvider>
      <MainBlock />
    </AuthProvider>;
  });
}

export default withAuth(Home);
