<template>
  <div class="home">
    <logo/>
    <search-user-form/>
  </div>
</template>

<script>
import { Logo } from "@/components/atoms";
import { SearchUserForm } from "@/components/molecules";
export default {
  name: 'index',
  layout: 'default',
  components: {
    Logo,
    SearchUserForm
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>