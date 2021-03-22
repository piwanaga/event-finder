import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import EditProfileForm from './EditProfileForm';

const mockStore = configureStore([]);

describe("Edit profile form", () => {
    let store
    let Wrapper

    beforeEach(() => {
        store = mockStore({
            userReducer: {
                user: {
                    firstName: 'john',
                    lastName: 'doe',
                    email: 'johndoe@email.com',
                    photoUrl: 'www.test.com'
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

    });

    it("passes snapshot test", () => {
        const { asFragment } = render(<EditProfileForm />, {wrapper: Wrapper});
        expect(asFragment()).toMatchSnapshot();
    });

    it("applies values from store to form on initial load", () => {
        const { queryByDisplayValue } = render(<EditProfileForm />, {wrapper: Wrapper});
        expect(queryByDisplayValue('john')).toBeInTheDocument();
    });

});

