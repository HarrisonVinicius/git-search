<template>
    <div class="search-user-form">
        <span class="search-user-form__title"> Search for github users </span>
        <div class="search-user-form__form">
            <search-input dark hideButton/>
            <br/>
            <basic-button> SEARCH REPOSITORY </basic-button>
        </div>
    </div>
</template>

<script>
import { SearchInput , BasicButton } from "@/components/atoms";
export default {
    name: 'SearchUserForm',
    components: {
        SearchInput,
        BasicButton
    }
}
</script>

<style lang="scss" scoped>
.search-user-form{
    margin-top: 15px;
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__title{
        font-size: 27px;
        font-weight: 600;
        color: black;
        display: flex;
        justify-content: center;
    }
    &__form{
        width: 100%;
        padding-left: 5px;
    }
}
</style>