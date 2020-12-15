import { mount } from "@vue/test-utils";
import { SearchInput } from "@/components/atoms";

describe("searchInput unit tests: ", () => {
  it("correctly receives the data passed by the parent component through the dark prop", () => {
    const wrapper = mount(SearchInput, {
      propsData: {
        dark: true,
      },
    });
    expect(wrapper.props().dark).toBe(true);
  });

  it("correctly receives the data passed by the parent component through the placeHolder prop", () => {
    const wrapper = mount(SearchInput, {
      propsData: {
        placeHolder: "enter username",
      },
    });
    expect(wrapper.props().placeHolder).toBe("enter username");
  });

  it("saves the data entered by the user in the input", () => {
    const wrapper = mount(SearchInput);
    const input = wrapper.find("input");
    input.element.value = "username";
    wrapper.setData({ inputData: input.element.value });
    expect(wrapper.vm.inputData).toBe("username");
  });
});
