import React from "react";
import { MemoryRouter } from "react-router";
import ContactPage from "./ContactPage";
import App from "../../App";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Testing ContactPage route", () => {
  it("Ensures ContactPage cotains the correct information from the coresponding route", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.contains(ContactPage));
  });

  it("renders correctly", () => {
    const wrapper = shallow(<ContactPage />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    shallow(<ContactPage />);
  });
});
