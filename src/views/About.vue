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

    <div class="mb-4">
      <h2 class="font-bold">composable import</h2>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
      <p>{{ fullName }}</p>
      <button class="border-2" @click="updateRealName">change text</button>
    </div>

    <hr class="mb-4" />

    <div>
      <h2 class="font-bold">vuex</h2>
      <div>loading: {{ loading }}</div>
      <div>session from store: {{ session }}</div>
      <button class="border-2" @click="updateStore">
        change loading state in store
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import useSomethingElse from "../composables/useSomethingElse";

export default defineComponent({
  setup() {
    const { firstName, lastName, fullName, updateRealName } =
      useSomethingElse();
    const composition = ref("this is a setup ref");
    const changeCompositionText = () =>
      (composition.value = "changed from composition!");

    // Vuex
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const session = computed(() => store.state.session);
    const updateStore = () => store.dispatch("updateLoading");

    return {
      // local
      composition,
      changeCompositionText,
      // composable
      firstName,
      lastName,
      fullName,
      updateRealName,
      // store
      loading,
      session,
      updateStore,
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
