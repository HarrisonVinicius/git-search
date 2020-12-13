<template>
    <div class="search-user-form">
        <span class="search-user-form__title"> Search for github users </span>
        <div class="search-user-form__form">
            <search-input v-model="inputData" dark hideButton placeHolder="enter @username"/>
            <span v-if="showFeedback" class="search-user-form__form__feedback"> username is required </span>
            <br/>
            <basic-button @click.native="searchHandler"> SEARCH REPOSITORY </basic-button>
        </div>
    </div>
</template>

<script>
import { mapState , mapActions } from "vuex";
import { SearchInput , BasicButton } from "@/components/atoms";
export default {
    name: 'SearchUserForm',
    components: {
        SearchInput,
        BasicButton
    },
    data: () => ({
      inputData: null,
      showFeedback: false
    }),
    watch: {
        inputData: {
            handler(){
                this.inputData ? this.showFeedback = false : this.showFeedback = true
            }
        }
    },
    methods: {
        ...mapActions({
            getUserData: 'userData/FETCH_USER_DATA'
        }),
        async searchHandler(){
            if(this.inputData){
                await this.getUserData(this.inputData)
                this.$router.push('/users')
            } else {
                this.showFeedback = true
            }
        }
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
        &__feedback{
            color: red;
            padding-left: 22px;
        }
    }
}
</style>