import React from "react";
import {
  FirstNewsPageDescription,
  FirstNewsPageSubtitle,
  FirstNewsPageTitle,
  FirstNewsPageWrapper,
} from "./FirstNewsPageStyledComponents";

const FirstNewsPage: React.FC = () => {
  return (
    <FirstNewsPageWrapper>
      <FirstNewsPageTitle>This is a mock page</FirstNewsPageTitle>
      <FirstNewsPageSubtitle>
        The rest of the articles lead to their own page from point.md{" "}
      </FirstNewsPageSubtitle>
      <FirstNewsPageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Semper risus in
        hendrerit gravida rutrum quisque. Urna condimentum mattis pellentesque
        id. Purus sit amet luctus venenatis lectus magna. Vitae sapien
        pellentesque habitant morbi tristique senectus. Sed turpis tincidunt id
        aliquet. Ultrices tincidunt arcu non sodales neque. Suscipit tellus
        mauris a diam maecenas. Vitae sapien pellentesque habitant morbi
        tristique. Pellentesque pulvinar pellentesque habitant morbi tristique
        senectus et netus. Risus pretium quam vulputate dignissim. Donec
        adipiscing tristique risus nec. Fringilla phasellus faucibus scelerisque
        eleifend donec pretium vulputate sapien. Erat velit scelerisque in
        dictum non consectetur a erat. Integer quis auctor elit sed.
      </FirstNewsPageDescription>
    </FirstNewsPageWrapper>
  );
};

export default FirstNewsPage;
