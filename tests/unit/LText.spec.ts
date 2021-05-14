import LText from "@/components/LText";
import { shallowMount, VueWrapper } from "@vue/test-utils";

let wrapper: VueWrapper<any>;

describe("test LText Component", () => {
  beforeAll(() => {
    wrapper = shallowMount(LText, {
      props: {
        tag: "div",
        mode: "edit",
        actionType: "url",
        url: "test.url",
        text: "testText",
      },
    });
  });
  it("should render correct", async () => {
    window.open = jest.fn();
    expect(wrapper.get("div").text()).toBe("testText");
    await expect(wrapper.get("div").trigger("click"));
    expect(window.open).not.toHaveBeenCalled();
  });
  it("should open page correct", async () => {
    wrapper = shallowMount(LText, {
      props: {
        tag: "div",
        mode: "preview",
        actionType: "url",
        url: "test.url",
        text: "testText",
      },
    });
    await expect(wrapper.get("div").trigger("click"));
    expect(window.open).toHaveBeenCalled();
  });
});
