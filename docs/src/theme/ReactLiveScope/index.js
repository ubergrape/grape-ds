import React from "react";

import { Button, Scrollbar } from "aurora-ui";

import 'aurora-ui/build/index.css';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
  Scrollbar,
};

export default ReactLiveScope;
