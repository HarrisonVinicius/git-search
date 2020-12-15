import { mount } from "@vue/test-utils";
import { RepositoriesListItem } from "@/components/molecules";

describe("repositories item list component unit tests: ", () => {
  it("correctly receives the data passed by the parent component through the dark prop", () => {
    const wrapper = mount(RepositoriesListItem, {
      propsData: {
        itemData: {
          title: "title",
          description: "description",
          stars: 0,
        },
      },
    });
    expect(wrapper.props().itemData).toStrictEqual({
      title: "title",
      description: "description",
      stars: 0,
    });
  });
});
