import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from 'components/Loading';
import SlideNavigation from 'components/SlideNavigation';
import SwitchContext from 'components/SwitchContext';
import SlideContainer from 'components/SlideContainer';
import ExampleContainer from 'components/ExampleContainer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

interface RouteItem {
  switchContext?: boolean;
  file: string;
  smallerFont?: boolean;
}

const getRoutes = (inputRoutes: RouteItem[], baseUrl: string) =>
  inputRoutes.map((route, index) => ({
    ...route,
    Component: lazy(() => import(`./${route.file}`)),
    path: `${baseUrl}/${index + 1}`,
  }));

export const slides = getRoutes(
  [
    { file: 'pages/Intro/Slide1.tsx' },
    { file: 'pages/React/Slide1.tsx', switchContext: true },
    { file: 'pages/TypeScript/Slide1.tsx' },
    { file: 'pages/TypeScript/Slide2.tsx', switchContext: true },
    { file: 'pages/Both/Slide1.tsx' },
    { file: 'pages/Both/Slide2.tsx', switchContext: true },
    { file: 'pages/RemoteData/Slide1.tsx', switchContext: true },
    { file: 'pages/Outro/Slide1.tsx' },
    { file: 'pages/Outro/Questions.tsx' },
  ],
  '/slide'
);

export const examples = getRoutes(
  [
    { file: 'pages/React/Example1.tsx' },
    { file: 'pages/React/Example2.tsx', switchContext: true },
    { file: 'pages/TypeScript/Example1.tsx' },
    { file: 'pages/TypeScript/Example2.tsx', switchContext: true },
    { file: 'pages/Both/Example1.tsx' },
    { file: 'pages/Both/Example2.tsx' },
    { file: 'pages/Both/Example3.tsx', switchContext: true },
    { file: 'pages/RemoteData/Example1.tsx', switchContext: true, smallerFont: true },
    { file: 'pages/Outro/Example1.tsx', switchContext: true },
  ],
  '/example'
);

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/slide">
        <SlideContainer>
          {slides.map(({ path, Component, switchContext }) => (
            <Route key={path} path={path}>
              <Suspense fallback={<Loading />}>
                <Component />
                {switchContext && <SwitchContext flip />}
              </Suspense>
            </Route>
          ))}
        </SlideContainer>
        <SlideNavigation totalRoutes={slides.length} />
      </Route>
      <Route path="/example">
        {examples.map(({ path, Component, switchContext, file, smallerFont }) => (
          <Route key={path} path={path}>
            <Suspense fallback={<Loading />}>
              <ExampleContainer file={file} smallerFont={smallerFont}>
                <Component />
                {switchContext && <SwitchContext />}
              </ExampleContainer>
            </Suspense>
          </Route>
        ))}
        <SlideNavigation totalRoutes={examples.length} />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
