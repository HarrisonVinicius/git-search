import { mount } from "@vue/test-utils";
import { SearchInput } from "@/components/atoms";
import { SearchUserForm } from "@/components/molecules";

describe("searchUserForm unit tests: ", () => {
  it("parent receives username from child component", () => {
    const wrapper = mount(SearchUserForm);
    wrapper.setData({ inputData: null });
    wrapper.findComponent(SearchInput).vm.$emit("input", "username");
    expect(wrapper.vm.inputData).toBe("username");
  });

  it("shows feedback if the user clicks the button and has not entered the username", () => {
    const wrapper = mount(SearchUserForm);
    const button = wrapper.find("button");
    wrapper.setData({ inputData: null });
    button.trigger("click");
    expect(wrapper.vm.showFeedback).toBe(true);
  });

  it("search function call", () => {
    const wrapper = mount(SearchUserForm);
    const button = wrapper.find("button");
    const searchHandler = jest.spyOn(wrapper.vm, "searchHandler");
    wrapper.vm.searchHandler();
    button.trigger("click");
    expect(searchHandler).toHaveBeenCalled();
  });
});
