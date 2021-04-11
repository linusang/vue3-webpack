import App from "../src/App.vue";
import '@testing-library/jest-dom';
import { render } from "@testing-library/vue";

describe("App.vue",  () => {

    it("renders count", () => {

       const { getByText } = render(App);

       expect(getByText("Count: 0")).toBeInTheDocument();
    });

});