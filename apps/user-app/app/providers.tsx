
"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { RecoilRoot } from "recoil";
const Provider = ({ children } :{ children : React.ReactNode}) => {

  return <RecoilRoot>
         <SessionProvider>
            
            {children}
        </SessionProvider>
        </RecoilRoot>;
};
export default Provider;