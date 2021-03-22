import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import SearchFilters from './SearchFilters';

const mockStore = configureStore([]);

describe("Search filters shown in SearchResults component", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore();

        Wrapper = ({ children }) => (
            <Provider store={store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        );

        component = render(
            <SearchFilters />, {wrapper: Wrapper}
        );

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

});

