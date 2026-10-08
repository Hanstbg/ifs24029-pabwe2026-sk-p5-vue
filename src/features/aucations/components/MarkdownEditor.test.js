import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Editor from "@toast-ui/editor";
import MarkdownEditor from "./MarkdownEditor.vue";

describe("MarkdownEditor", () => {
  it("menginisialisasi Editor, emit perubahan, dan destroy saat unmount", () => {
    const wrapper = mount(MarkdownEditor, { props: { modelValue: "halo" } });
    const editor = Editor.last;
    expect(editor.options.initialValue).toBe("halo");
    editor.options.events.change();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["markdown"]);
    wrapper.unmount();
    expect(editor.destroyed).toBe(true);
  });

  it("memakai nilai awal kosong secara default", () => {
    mount(MarkdownEditor);
    expect(Editor.last.options.initialValue).toBe("");
  });
});