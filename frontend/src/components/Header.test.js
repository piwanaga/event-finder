import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Header from './Header';

const mockStore = configureStore([]);

describe("Header", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore({
            userReducer: {
                user: {
                    loggedIn: true
                }
            }
        });

        Wrapper = ({ children }) => (
            <Provider store={store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        );

        component = render(
            <Header />, {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot()
    });

    it("displays correct links when user logged in", () => {
        expect(component.queryByText('My Profile')).toBeInTheDocument()
        expect(component.queryByText('Logout')).toBeInTheDocument()
    });

});

