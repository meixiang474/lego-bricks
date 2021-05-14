import { shallowMount, VueWrapper } from "@vue/test-utils";
import LImage from "@/components/LImage";

let wrapper: VueWrapper<any>;

describe("test LImage Component", () => {
  beforeAll(() => {
    wrapper = shallowMount(LImage, {
      props: {
        mode: "preview",
        src: "test.url",
      },
    });
  });
  it("should render correct", () => {
    expect(wrapper.get("img").attributes("src")).toBe("test.url");
  });
});
