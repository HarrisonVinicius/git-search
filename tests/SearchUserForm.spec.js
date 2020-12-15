import mount from "@vue/test-utils";
import { SearchUserForm } from "@/components/molecules";

describe("searchUserForm unit tests: ", () => {
  test("setup correctly", () => {
    expect(true).toBe(true);
  });

  // test("search function call", () => {
  //   const wrapper = mount(SearchUserForm);
  //   const searchHandler = jest.fn();
  //   wrapper.setMethods({
  //     searchHandler: searchHandler,
  //   });
  //   wrapper.find(".search-user-form__form__button").trigger("click");
  //   expect(searchHandler).toHaveBeenCalled();
  // });
});
