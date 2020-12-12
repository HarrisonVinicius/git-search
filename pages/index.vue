<template>
  <div class="home">
    <logo/>
  </div>
</template>

<script>
import { Logo } from "@/components/atoms";
export default {
  name: 'index',
  layout: 'default',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>