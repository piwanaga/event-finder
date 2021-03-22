import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Profile from './Profile';

const mockStore = configureStore([]);

describe("User's profile page", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore({
            userReducer: {
                user: {
                    firstName: 'john',
                    lastName: 'doe',
                    username: 'test username',
                    email: 'test@email.com',
                    friends: [{
                        username: 'friend username',
                        photoUrl: 'www.test.com'
                    }],
                    artists: [{
                        id: 1,
                        name: 'test artist',
                        photoUrl: 'www.test.com'
                    }]
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
            <Profile />, {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

    it("displays user's friends", () => {
        expect(component.queryByText('friend username')).toBeInTheDocument();
    });

    it("displays artists user is following", () => {
        expect(component.queryByText('test artist')).toBeInTheDocument();
    });

});

