import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

interface RenderWithRouterProps {
  route?: string;
}

export const renderWithRouter = (ui: React.ReactElement, { route = '/' }: RenderWithRouterProps = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  }
}