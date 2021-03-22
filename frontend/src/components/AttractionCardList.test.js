import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import AttractionCardList from './AttractionCardList';

const mockStore = configureStore([]);

describe("List of attractions", () => {
    let store
    let Wrapper
    let component

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

        const attractions = [
            {
                name: 'test name',
                images: [null, 'www.test.com'],
                id: '1',
                upcomingEvents: {
                    _total: '10'
                }
            }
        ];

        component = render(
            <AttractionCardList 
                title='test title'
                attractions={attractions}
            />,
            {wrapper: Wrapper}
        )
    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

    it("displays title", () => {
        expect(component.queryByText('test title')).toBeInTheDocument();
    });

});

