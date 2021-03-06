import "./../src/styles.scss";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import welcome from "./welcome";
import book from "./book";
import search from "./search";

welcome(storiesOf, { linkTo, action });
book(storiesOf, { linkTo, action });
search(storiesOf, { linkTo, action });
