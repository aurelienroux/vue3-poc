import { ref, Ref, computed } from "vue";

export interface useSomethingElseType {
  firstName: Ref<string>;
  lastName: Ref<string>;
  fullName: Ref<string>;
  updateRealName: () => void;
}

export function useSomethingElse(): useSomethingElseType {
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
