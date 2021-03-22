import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Home from './Home';

const mockStore = configureStore([]);

describe("Homepage", () => {
    let store
    let Wrapper
    let component

    beforeEach(() => {
        store = mockStore({
            attractionsReducer: {
                attractionsHome: {
                        1: {
                            title: 'test title',
                            attractions: [
                                {
                                    id: '1',
                                    name: 'test name',
                                    images: [
                                        null, 
                                        {url: 'www.testurl.com'}
                                    ],
                                    upcomingEvents: {
                                        _total: '10'
                                    }
                                }
                            ]
                        }
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
            <Home />, {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot()
    });

});

