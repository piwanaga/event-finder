import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import UserSearchResults from './UserSearchResults';

const mockStore = configureStore([]);

describe("Search results from UserSearchForm", () => {
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

        const users = [{
            username: 'test username', 
            photoUrl: 'www.test.com'
        }]

        component = render(
            <UserSearchResults 
                users={users}
            />, 
            {wrapper: Wrapper}
        );

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

    it("displays user data from props", () => {
        expect(component.getByText('test username')).toBeInTheDocument();
    })

});

