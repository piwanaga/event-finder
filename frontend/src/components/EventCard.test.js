import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import EventCard from './EventCard';

const mockStore = configureStore([]);

describe("Card displaying basic event info", () => {
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
            <EventCard 
                name='test event'
                id='1'
                img='www.testimg.com'
                date='1-1-2021'
                time='12:00'
                venue='test venue'
                ticketUrl='www.testurl.com'
            />,
            {wrapper: Wrapper}
        )

    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

    it("displays the correct prop values", () => {
        expect(component.queryByText('test event')).toBeInTheDocument();
    });

});

