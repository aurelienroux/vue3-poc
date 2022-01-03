<template>
  <div class="p-6">
    <div class="font-bold bg-yellow-300">name: {{ name }}</div>
    <div>age: {{ age }}</div>
    <h2>jobs</h2>
    <div v-for="job in jobs" :key="job.id">
      {{ job.title }} - {{ job.location }} - {{ job.salary }}$$$ - {{ job.id }}
    </div>
    <!-- <button @click="changeName('Zelda')">click</button> -->
  </div>
</template>

<script lang="ts">
// import { defineComponent, reactive, ref, toRefs } from "vue";
import { defineComponent, ref } from "vue";
import Job from "../types/Job";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    // 1) REACTIVE ***************************************
    // const state = reactive({
    //   name: "Link",
    //   age: 25 as string | number, // as a type annotation
    // });
    // state.name = 99; typescript safeguard
    // return { ...toRefs(state) };

    // 2) REFS *******************************************
    const name = ref("Mario");
    const age = ref<number | string>(22); // typed as a generic

    // rewriting the ref age value, can be a number or a string because of line 30
    age.value = 30;
    age.value = "45";

    const jobs = ref<Job[]>([
      {
        title: "job 1",
        location: "montreal",
        salary: 100,
        id: "uid123",
      },
      {
        title: "job 2",
        location: "quebec",
        salary: 90,
        id: "uid312",
      },
    ]);

    return { name, age, jobs };
  },
  methods: {},
});
</script>
