<template>
    <section id="contact" class="section contact-us">
        <div class="container">
            <div class="section-title">
                <h2>Please<span> Login</span></h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-xs-12 col-md-6 col-md-offset-3">
                    <div class="contact-form">
                        <form id="contact_form">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="help-text text-danger">{{ errors.message }}</span> <br>
                                    <div class="form-group">
                                        <label class="sr-only">Email</label>
                                        <input name="name" placeholder="Email" v-model="email" type="text" class="form-control">
                                        <span class="help-text text-danger">{{ errorMsg.email }}</span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="sr-only">Password</label>
                                        <input name="name" placeholder="Password" v-model="password" type="password" class="form-control">
                                        <span class="help-text text-danger">{{ errorMsg.password }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Don't have account? <router-link to="/register" tag="a">register</router-link></p>
                                    </div>
                                    {{ loading }}
                                    <div class="col-md-4">
                                        <div class="form-group action">
                                            <button class="m-btn pull-right"
                                                @click.prevent="authenticatByEmailAndPassword">Login </button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                	<div class="col-md-12">
	                                    <div class="form-group action">
                                           
                                            <button class="m-btn pull-left" @click.prevent="authenticatUserByFacebook">Log In with facebook</button>
                                            
                                        </div>
                                        <div class="form-group action">
	                                    	<button class="m-btn pull-right">Log In with google</button>
	                                    </div>
	                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script type="text/javascript">
    import { mapState,mapActions } from 'vuex'
    import firebase from 'firebase'
    export default{
        name: 'Login',
        data(){
            return{
                email : '',
                password : '',
                errorMsg : {
                    email: '',
                    password: ''
                }
            }
        },

        computed:{
            ...mapState({
                user : state => state.user,
                errors: state => state.errors,
                loading: state => state.loading
            })
        },

        watch: {
          user (value) {
            if (value !== null && value !== undefined) {
              this.$router.push('/quiz')
            }
          }
        },

        methods: {
            ...mapActions(['getUserByEmailAndPassword','authenticatUserByFacebook']),

            checkRequired(){
                let error = 0;
                if(this.email ==''){
                    error++
                    this.errorMsg.email = 'Email should not be empty'
                }
                
                if(this.password ==''){
                    error++
                    this.errorMsg.password = 'Password should not be empty'
                }
                return error;
            },

            authenticatByEmailAndPassword: function(){
                if(this.checkRequired() > 0)
                    return false;

                const credentials = { email:this.email, password: this.password}
                this.getUserByEmailAndPassword(credentials)
            }
        }
    }
</script>