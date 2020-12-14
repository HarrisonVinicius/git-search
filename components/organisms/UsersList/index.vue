<template>
    <div class="users-list">
        <div class="users-list__header">
            <span class="users-list__header__text-decoration"> @{{listItems[0].owner}}'s Repositories </span>
            <basic-button class="users-list__header__button" @click.native="returnHandler"> VOLTAR </basic-button>
        </div>
        <div class="users-list__repositories-list">
            <repositories-list-item v-for="(item, index) in listItems" :key="index" :itemData="item"/>
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
    computed: {
        ...mapState({
            listData: state => state.userData.userData
        }),
        listItems() {
            return (this.listData || []).map(item => ({
                title: (item.name || {} || ''),
                description: (item.description || ''),
                stars: (item.stargazers_count),
                owner: (item.owner.login || '')
            }))
        },

    },
    mounted() {
        console.log(this.listItems)
        console.log(this.listData)
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