# mainstack-dashboard
A simple app dashboard with visualization built with React, TypeScript and styled-components. View app here https://mainstack-dashboard-gbenga.netlify.app/

## Project Structure

A modular structure which has been proven to scale very well for large projects is adopted.
In this structure each file/folder belongs to a parent folder (module)

The modular is treated like an isolated project with an internal structure which houses
its services, components, css, tests, etc

Because code will inevitably be shared amongst modules, there is also a shared module
which contains components, services, css, etc that is used across different modules.

    .
    └── src
        ├── modules                  # houses all modules
            ├── _shared              # contains all the shared logics and components
            └── ...

    
        ├── App.tsx

## CORE LIBRARIES

-   [ReactJS](https://reactjs.org): A JavaScript library for building user interfaces.
-   [Styled Components](https://styled-components.com/docs/basics#installation): Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!. 99.9% of our styles are in styled components.
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): The @testing-library family of packages helps you test UI components in a user-centric way.
-

## SETTING UP PROJECT

-   Run `npm` to install dependencies

## TESTING

Testing is done with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 
Run tests with `npm run test`.
Run coverage with `npm run coverage`. 
Test Coverage is currently over 85%

Tests are organized by creating a folder `__tests__/` under the module you want to write the tests for

    .
    └── [some-module]
        └── __tests__                  # houses all tests for [some-module]
            └──  [component.test.ts]

## DEVELOPMENT

`npm run dev`

Runs the app in the development mode, on localhost at port 5173.
.


