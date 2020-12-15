<template>
  <!-- this is the home page of the application. where the user finds the form that will be filled in to search for repositories -->
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