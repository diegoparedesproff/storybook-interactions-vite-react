- npm create vite@latest storybook-interactions-vite-react
- npm install
- npx storybook@latest init
//is going to detect the kind of project you have
//for installing the corresponding packages
//for adding storybook (if uses vite, express, react, view, etc.)
- after that just run it with npm run storybook

____

Form component from Radix UI

- npm install @radix-ui/react-form
- npm install @radix-ui/colors

----

You can do:

1. Visual Test

2. Interaction Test:

- npm install @storybook/testing-library
@storybook/jest
@storybook/addon-interactions --save-dev

- Make sure you have "@storybook/addon-interactions"
    added in the addons of your ./.storybook/main.ts

- In the corresponding story:
    import { within, userEvent } from "@storybook/testing-library";
    import { expect } from "@storybook/test";

    you can use a property add an async function to
    your story called play and use testing-library for
    accesing the DOM elements and jest for the asertions

- For running all the test of your components
    (by default every test runs just when you visit the story)

- Use storybook test runner:
    - npm install @storybook/test-runner -D
    - add to the scripts: "test-storybook":"test-storybook"
    - You need to have running storybook
    - You need to have installed playwright
        npx playwright install 



-----

Adding MUI
- npm install @mui/material @emotion/react @emotion/styled
- npm install @fontsource/roboto
- include the roboto font in the entry point
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';