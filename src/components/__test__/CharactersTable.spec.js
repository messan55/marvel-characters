import "../../../matchMedia.mock";
import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import "../../setupTests";
import CharactersTable from "../CharatersTable";

describe.skip("Table renders correctly", () => {
  const mockStore = configureStore();
  const store = mockStore({
    filesCharacters: {
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
        <CharactersTable />
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});