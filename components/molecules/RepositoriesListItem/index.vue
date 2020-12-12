<template>
    <div class="repositories-list-item">
        <div class="avatar-card">
            <img class="avatar-card__image" src="@/assets/hub.png" alt="avatar">
        </div>
        <div class="repositories-list-item__title">
            <span class="repositories-list-item__title__text-decoration"> Repository title </span>
        </div>
        <div class="repositories-list-item__action">
            <span> salvar </span>
        </div>  
    </div>  
</template>

<script>
export default {
    name:'RepositoriesListItem'
}
</script>

<style lang="scss" scoped>
.repositories-list-item{
    height: 200px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: #ededed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &__title{
        height: 100%;
        width: 85%;
        &__text-decoration{
            color: black;
            font-size: 20px;
            margin-left: 15px;
        }
    }
    &__action{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.repositories-list-item:hover{
    opacity: 0.7;
}

.avatar-card{
    height: 100%;
    width: 190px;
    &__image{
        height: 100%;
        width: 100%;
    }
}
</style>