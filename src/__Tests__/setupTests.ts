import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import { createMemoryHistory } from 'history';

interface RenderWithRouterProps {
  route?: string;
  history?: any;
}

export const renderWithRouter = (ui: React.ReactElement, { route = '/', history = createMemoryHistory({ initialEntries: [route] }),
}: RenderWithRouterProps = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: BrowserRouter }),
    history,
  }
}