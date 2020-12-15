<template>
  <!-- this is the component responsible for receiving the user's username and requesting the consultation at api -->
  <!-- this component has child components -->
  <div class="search-user-form">
    <span class="search-user-form__title"> Search for github users </span>
    <div class="search-user-form__form">
      <!-- here the user enters his username -->
      <search-input
        v-model="inputData"
        dark
        hideButton
        placeHolder="enter username here"
      />
      <!-- this feedback message is shown if the user has not entered any username -->
      <span v-if="showFeedback" class="search-user-form__form__feedback">
        username is required
      </span>
      <br />
      <!-- this button calls the function that will request the api search -->
      <div class="search-user-form__form__button">
        <basic-button @click="searchHandler"> SEARCH REPOSITORY </basic-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SearchInput, BasicButton } from "@/components/atoms";
export default {
  name: "SearchUserForm",
  // declaration of child components
  components: {
    SearchInput,
    BasicButton,
  },
  data: () => ({
    //   here the data emitted by the input component is stored
    inputData: null,
    //   this boolean controls the visibility of the feedback message
    showFeedback: false,
  }),
  watch: {
    // this watcher listens if any data has been emitted by the input component and decides whether or not to show the feedback message
    inputData: {
      handler() {
        this.inputData
          ? (this.showFeedback = false)
          : (this.showFeedback = true);
      },
    },
  },
  methods: {
    // here is the location of the action responsible for making the request to the api and retrieving the data
    ...mapActions({
      getUserData: "userData/FETCH_USER_DATA",
    }),
    // this asynchronous function checks if any data has been entered by the user and if so makes the action call when the form button is clicked
    async searchHandler() {
      if (this.inputData) {
        await this.getUserData(this.inputData);
        // here the username is set in sessionstorage so it can be used again
        sessionStorage.setItem("userName", this.inputData);
        // after completing the request the user is directed to the repository page
        this.$router.push("/users");
      } else {
        // the feedback message will be displayed if the function enters this condition
        this.showFeedback = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-user-form {
  margin-top: 15px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__title {
    font-size: 27px;
    font-weight: 600;
    color: black;
    display: flex;
    justify-content: center;
  }
  &__form {
    width: 100%;
    padding-left: 5px;
    &__feedback {
      color: red;
      padding-left: 22px;
    }
    &__button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
