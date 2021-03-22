import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import AttractionCard from './AttractionCard';

describe("Card to display basic attraction info", () => {
    let Wrapper

    beforeEach(() => {
        Wrapper = ({ children }) => (
                <BrowserRouter>
                    {children}
                </BrowserRouter>
        );
    });

    it("passes snapshot test", () => {
        const { asFragment } = render(
            <AttractionCard 
                name='test attraction' 
                img='www.test.com'
                id='1'
                eventCount='10'
            />,
            {wrapper: Wrapper}
        );
        expect(asFragment()).toMatchSnapshot()
    });

    it("applies props", () => {
        const { queryByText } = render(
        <AttractionCard 
            name='test attraction' 
            img='www.test.com'
            id='1'
            eventCount='10'
        />, 
        {wrapper: Wrapper}
        );
        expect(queryByText('test attraction')).toBeInTheDocument()
    });

});