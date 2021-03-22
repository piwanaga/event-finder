import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import FriendsList from './FriendsList';

const mockStore = configureStore([]);

describe("User's list of friends", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore({
            userReducer: {
                user: {
                    friends: [{
                        username: 'test username',
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
            <FriendsList />, {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot()
    });

    it("displays friend in list", () => {
        expect(component.queryByText('test username')).toBeInTheDocument()
    });

});

