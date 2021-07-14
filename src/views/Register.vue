<template>
  <div>
      <b-container class="bv-example-row mt-5">
          <h1>Register here</h1>
        <b-row>
          <b-col>
            <div class="mb-2">
                    <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" width="420" alt="" class="image-effect">
             </div>
          </b-col>
          <b-col>
                <div>
                    <b-container>
                        <b-row class="justify-content-md-center mt-4">
                            <b-col col md="12">
                                <b-card header="Register Here"
                                    header-bg-variant="primary"
                                    header-text-variant="white"
                                >
                                <b-card-text class="text-left">
                                    <b-form @submit="onSubmit">
                                        <b-form-group description="Enter your username"
                                            label="Username">
                                        <b-form-input v-model="form.username" required></b-form-input>
                                        
                                        </b-form-group>
                                            <b-form-group description="Enter your password"
                                            label="Password">
                                        <b-form-input v-model="form.password" type="password" required></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-button type="submit" variant="outline-primary" :disabled="acceptableSubmition">Submit </b-button>
                                        </b-form-group>
                                    </b-form>
                                    <b-col col md="12" class="justify-content-center text-center d-block">
                                        <small>Don't have an account?</small>
                                        <a href="">Signup</a>
                                    </b-col>
                                </b-card-text>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row class="mt-5">
                        </b-row>
                    </b-container>    
                </div>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = '',
        this.form.password = ''
      }
    },
    computed:{
        acceptableSubmition(){
            return this.form.username.length > 0 && this.form.password.length > 0 ? false:true;
        }
    }
  }
</script>
<style scoped>
    .image-effect{
      border:7px solid rgb(151, 189, 238);
    }
</style>
