import "../../../matchMedia.mock";
import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import "../../setupTests";
import CharacterItem from "../CharacterItem";

describe.skip("Table renders correctly", () => {
  const mockStore = configureStore();
  const store = mockStore({
    filesCharacter: {
      count: 20,
      limit: 20,
      offset: 0,
      results: [],
      total: 1559
    },
    loading: false
  });

  const wrapper = mount(
    <Provider store={store}>
        <CharacterItem />
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});