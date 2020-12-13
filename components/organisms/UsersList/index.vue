<template>
    <div class="users-list">
        <div class="users-list__header">
            <span class="users-list__header__text-decoration"> @user's Repositories </span>
            <basic-button class="users-list__header__button" @click.native="returnHandler"> VOLTAR </basic-button>
        </div>
        <div class="users-list__repositories-list">
            <repositories-list-item v-for="(item, index) in listItems" :key="index"/>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { BasicButton } from "@/components/atoms";
import { RepositoriesListItem } from "@/components/molecules";
export default {
    name: 'UsersList',
    components: {
        BasicButton,
        RepositoriesListItem
    },
    data: () => ({
        items: [1,2,3,4,5,6]
    }),
    computed: {
        ...mapState({
            listData: state => state.userData.userData
        }),
        listItems() {
            return (this.listData || []).map(item => ({
                title: (item.name || {}),
                description: (item.description)
            }))
        }

    },
    mounted() {
        console.log(this.listItems)
    },
    methods: {
        returnHandler(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.users-list {
    padding: 20px;
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__text-decoration{
            font-size: 22px;
            font-weight: 600;
            color: black
        }
        &__button{
            width: 100px;
        }
    }
    &__repositories-list{
        margin-top: 15px;
    }
}

</style>