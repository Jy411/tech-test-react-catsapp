import React from "react";
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import Layout from "./app/layout";
import "./app/page/splashPage/splashScreenStyle.css";

/**
 * It's useful to have this layer incase you have multiple layouts that are
 * conditional for example a logged in and logged out view.
 * In this example we just have one page so it's all good.
 */

const App = () => (
    <GeistProvider>
      <CssBaseline />
      <Layout />
    </GeistProvider>
)

export default App;
