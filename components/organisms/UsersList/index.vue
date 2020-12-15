<template>
  <!-- 
        this component is responsible for showing the user's list of repositories. 
        this component is filled with data from the store.
        this component has child components.
    -->
  <div class="users-list">
    <div class="users-list__header">
      <!-- here the username saved in sessionstorage is being retrieved -->
      <span class="users-list__header__text-decoration">
        @{{ userNameFromStorage }}'s Repositories
      </span>
      <!-- when clicked this button redirects the user to the initial page of the application -->
      <basic-button
        class="users-list__header__button"
        @click.native="returnHandler"
      >
        VOLTAR
      </basic-button>
    </div>
    <div class="users-list__repositories-list">
      <!-- 
                here is the list of user repositories. 
                the data for each item in the list is passed through the itemData prop.
            -->
      <repositories-list-item
        v-for="(item, index) in listItems"
        :key="index"
        :itemData="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { BasicButton } from "@/components/atoms";
import { RepositoriesListItem } from "@/components/molecules";
export default {
  name: "UsersList",
  components: {
    BasicButton,
    RepositoriesListItem,
  },
  data: () => ({
    // here the username from sessionstorage is stored
    userNameFromStorage: "",
    // this boolean only records if there is data in the store
    hasData: false,
  }),
  computed: {
    // here is the location where the list data is stored in the store
    ...mapState({
      listData: (state) => state.userData.userData,
    }),
    // this computed property returns a list of data adapted for the child component that will use it
    listItems() {
      return (this.listData || []).map((item) => ({
        title: item.name || {} || "",
        description: item.description || "",
        stars: item.stargazers_count,
        owner: item.owner.login || "",
      }));
    },
  },
  mounted() {
    // here sessionstorage is accessed as soon as the component is assembled
    this.userNameFromStorage = sessionStorage.getItem("userName");
    // here it is decided if a new request is made if the username saved in sessionstorage will be used
    // first checking for data in the store
    this.listData.length !== 0
      ? (this.hasData = true)
      : this.getUserData(this.userNameFromStorage);
  },
  methods: {
    // this action is called if the store is empty to ensure that there is data
    ...mapActions({
      getUserData: "userData/FETCH_USER_DATA",
    }),
    // this method redirects the user to the home page when called
    returnHandler() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  padding: 20px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text-decoration {
      font-size: 22px;
      font-weight: 600;
      color: black;
    }
    &__button {
      width: 100px;
    }
  }
  &__repositories-list {
    margin-top: 15px;
  }
}
</style>
