import React from "react";
import { MemoryRouter } from "react-router";
import AboutPage from "./AboutPage";
import App from "../../App";
import { mount, shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Testing AboutPage route", () => {
  it("Ensures AboutPage cotains the correct information from the coresponding route", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.contains(AboutPage));
  });

  it("renders correctly", () => {
    const wrapper = shallow(<AboutPage />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    shallow(<AboutPage />);
  });
});
