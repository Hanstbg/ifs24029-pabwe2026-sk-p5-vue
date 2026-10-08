import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Editor from "@toast-ui/editor";
import MarkdownViewer from "./MarkdownViewer.vue";

describe("MarkdownViewer", () => {
  it("membuat viewer dan memperbarui isi saat prop berubah", async () => {
    const wrapper = mount(MarkdownViewer, { props: { value: "# Judul" } });
    const viewer = Editor.last;
    expect(viewer.options.viewer).toBe(true);
    expect(viewer.options.initialValue).toBe("# Judul");
    await wrapper.setProps({ value: "baru" });
    expect(viewer.markdown).toBe("baru");
  });

  it("memakai nilai kosong secara default", () => {
    mount(MarkdownViewer);
    expect(Editor.last.options.initialValue).toBe("");
  });
});