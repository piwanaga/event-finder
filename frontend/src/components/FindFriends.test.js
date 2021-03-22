import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import FindFriends from './FindFriends';

const mockStore = configureStore([]);

describe("Card displaying basic event info", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore({
            searchReducer: {
                users: [
                    {
                        username: 'test username',
                        photoUrl: 'www.test.com'
                    }
                ]
            },
            userReducer: {
                user: {
                    friends: []
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
            <FindFriends />,
            {wrapper: Wrapper}
        );
    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

});

