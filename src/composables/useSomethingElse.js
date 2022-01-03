import { ref, computed } from "vue";

export default function useSomethingElse() {
  const firstName = ref("Santa");
  const lastName = ref("Claus");

  const fullName = computed(() => {
    return `this is ${firstName.value} ${lastName.value}`;
  });
  const updateRealName = () => {
    firstName.value = "Satan";
  };

  return {
    firstName,
    lastName,
    fullName,
    updateRealName,
  };
}
