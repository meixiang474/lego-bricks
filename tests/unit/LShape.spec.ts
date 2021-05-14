import { shallowMount, VueWrapper } from "@vue/test-utils";
import LShape from "@/components/LShape";

let wrapper: VueWrapper<any>;

describe("test LShape Component", () => {
  beforeAll(() => {
    wrapper = shallowMount(LShape, {
      props: {
        backgroundColor: "red",
        height: "100px",
      },
    });
  });
  it("should render correct", () => {
    const div = wrapper.get("div");
    expect(getComputedStyle(div.element).backgroundColor).toBe("red");
  });
});
