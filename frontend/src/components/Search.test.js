import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Search from './Search';

const mockStore = configureStore([]);

describe("Search bar in header", () => {
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
            <Search />, {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

});

