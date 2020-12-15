<template>
    <!-- here is the screen where the component that lists the user's repositories is located -->
    <users-list/>
</template>

<script>
import { UsersList } from "@/components/organisms";
export default {
    name: 'Users',
    components: {
        UsersList
    }
}
</script>
