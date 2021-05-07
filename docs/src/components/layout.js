import React from "react";
import DocsPage from "@theme/DocPage";

import { ThemeProvider } from "aurora-ui";

export default (props) => {
  return (
    <ThemeProvider isStylesNotReset isOverridesNotApplied>
      <DocsPage {...props}></DocsPage>
    </ThemeProvider>
  );
};
