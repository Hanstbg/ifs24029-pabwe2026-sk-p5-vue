<script setup>
import { onMounted, ref, watch } from "vue";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const props = defineProps({ value: { type: String, default: "" } });
const el = ref(null);
let viewer;

onMounted(() => {
  viewer = Editor.factory({ el: el.value, viewer: true, initialValue: props.value });
});
watch(() => props.value, (v) => viewer?.setMarkdown(v));
</script>

<template>
  <div ref="el"></div>
</template>
