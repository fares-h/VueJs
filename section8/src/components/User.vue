<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My Name is: {{ userName }}</p>
        <p>My Age is: {{ userAge }}</p>
        <button @click="changeNameAndAge">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :userName="userName"
                                 :userAge="userAge"
                                 @userNameReseted=" userName = $event"
                                 :resetNameParent="resetName">

                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="userAge"
                               :userName="userName"
                                @ageChanged=" userAge = $event">

                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
          return {
              userName: 'Hani',
              userAge: 26
          };
        },
        methods:{
          changeNameAndAge() {
              this.userName = 'Rami';
              this.userAge = 24;
          },
          resetName() {
              this.userName = 'Hani';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
