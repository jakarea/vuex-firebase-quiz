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
                                    <span class="help-text text-danger text-center">{{ errors.message }}</span>
                                    <div class="form-group">
                                        <label class="sr-only">Email</label>
                                        <input name="name" placeholder="Email" v-model="email" type="text" class="form-control">
                                        <span class="help-text text-danger">{{ error.email }}</span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Password</label>
                                    <input name="name" placeholder="Password" v-model="password" type="password" class="form-control"></div>
                                    <span class="help-text text-danger">{{ error.password }}</span>
                                </div>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Don't have account? <router-link to="/register" tag="a">register</router-link></p>
                                    </div>
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
    export default{
        name: 'Login',
        data(){
            return{
                email : '',
                password : '',
                error : {
                    email : '',
                    password : ''
                },
                countErrors: 0
            }
        },

        computed:{
            ...mapState({
                user : state => state.user,
                errors: state => state.errors
            })
        },

        methods: {
            ...mapActions(['getUserByEmailAndPassword','authenticatUserByFacebook']),
            checkRequired(){
                if(this.email ==''){
                    this.countErrors++
                    this.error.email = 'Email should not be empty'
                }
                
                if(this.password ==''){
                    this.countErrors++
                    this.error.password = 'Password should not be empty'
                }

                if(!this.countErrors > 0)
                    return false
            },
            authenticatByEmailAndPassword: function(){
                if(this.checkRequired())
                    return false
                
                const credentials = { email:this.email, password: this.password }
                this.getUserByEmailAndPassword(credentials)
                .then(() => {
                    if(this.user.email){
                        console.log('User:',this.user.email)
                        this.$router.push('/home')
                        console.log('Do it first')
                    }
                    console.log('Do it later')
                })
                .catch(() => {})
               
            }
        }
    }
</script>