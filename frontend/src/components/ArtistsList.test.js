import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import ArtistsList from './ArtistsList';

const mockStore = configureStore([]);

describe("User's list of artists following", () => {
    let store
    let Wrapper

    beforeEach(() => {
        store = mockStore({
            userReducer: {
                user: {
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
    });

    it("passes snapshot test", () => {
        const { asFragment } = render(<ArtistsList />, {wrapper: Wrapper});
        expect(asFragment()).toMatchSnapshot()
    });

    it("displays the artist in state", () => {
        const { queryByText } = render(<ArtistsList />, {wrapper: Wrapper});
        expect(queryByText('test artist')).toBeInTheDocument()
    });

});

