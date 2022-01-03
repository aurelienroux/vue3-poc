<template>
  <div class="p-6">
    <div class="mb-4">
      <h2 class="font-bold">composition api</h2>
      {{ composition }}
      <button class="border-2" @click="changeCompositionText">
        change text
      </button>
    </div>

    <hr class="mb-4" />

    <div class="mb-4">
      <h2 class="font-bold">options api</h2>
      {{ options }}
      <button class="border-2" @click="changeOptionsText">change text</button>
    </div>

    <hr class="mb-4" />

    <div>
      <h2 class="font-bold">composable import</h2>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
      <p>{{ fullName }}</p>
      <button class="border-2" @click="updateRealName">change text</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useSomethingElse from "../composables/useSomethingElse";

export default defineComponent({
  setup() {
    const { firstName, lastName, fullName, updateRealName } =
      useSomethingElse();

    const composition = ref("this is a setup ref");
    const changeCompositionText = () => {
      composition.value = "changed from composition!";
    };

    return {
      composition,
      changeCompositionText,
      firstName,
      lastName,
      fullName,
      updateRealName,
    };
  },
  data() {
    return {
      options: "from the options api",
    };
  },
  methods: {
    changeOptionsText() {
      this.options = "changed from options!";
    },
  },
});
</script>

<style scoped></style>
