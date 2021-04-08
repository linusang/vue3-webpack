import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const message = ref<string>("hello world");
    const count = ref<number>(0);

    function increment() {
      count.value = ++count.value;
    }

    onMounted(() => {
      console.log("click here to see source");
    });

    return {
      message,
      increment,
      count,
    };
  },
});
