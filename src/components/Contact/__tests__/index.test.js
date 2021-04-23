import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
    it("renders", () => {
        render(<ContactForm />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<ContactForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("title of h1 is 'Contact me'", () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    });

    it("text of button is 'Submit'", () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId("btntag")).toHaveTextContent("Submit");
    });
});