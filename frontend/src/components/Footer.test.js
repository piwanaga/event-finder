import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';

describe("Card displaying basic event info", () => {
    let Wrapper
    let component

    beforeEach(() => {
        Wrapper = ({ children }) => (
            <BrowserRouter>
                {children}
            </BrowserRouter>
        );

        component = render(
            <Footer />,
            {wrapper: Wrapper}
        );
    });

    it("passes snapshot test", () => {
        expect(component.asFragment()).toMatchSnapshot();
    });

});

