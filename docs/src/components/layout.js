import React from "react";
import DocsPage from "@theme/DocPage";

import { ThemeProvider } from "aurora-ui";

export default (props, test) => {
  return (
    <ThemeProvider>
      <DocsPage {...props}></DocsPage>
    </ThemeProvider>
  );
};
