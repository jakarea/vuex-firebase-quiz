<template>
    <section id="contact" class="section contact-us">
        <div class="container">
            <div class="section-title">
                <h2>Please<span> Register</span></h2>
            </div>

            <div class="row">
                <div class="col-sm-6 col-xs-12 col-md-6 col-md-offset-3">
                    <div class="contact-form">
                        <form id="contact_form">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Name</label>
                                        <input name="name" placeholder="Your name" v-model="name" type="text" class="form-control">
                                        <span class="help-text text-danger">{{ errorMsg.name }}</span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Email</label>
                                        <input name="email" placeholder="Email" v-model="email" type="text" class="form-control">
                                        <span class="help-text text-danger">{{ errorMsg.email }}</span>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Password</label>
                                        <input name="password" placeholder="Password" v-model="password" type="password" class="form-control">
                                        <span class="help-text text-danger">{{ errorMsg.email }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Allready have account? <router-link to="/login" tag="a">login</router-link></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group action">
                                        	<button class="m-btn pull-right" @click.prevent="registerByEmailAndPassword">Rregiste</button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                	<div class="col-md-12">
	                                    <div class="form-group action">
                                            <button class="m-btn pull-left" @click.prevent="authenticatUserByFacebook">Registe with facebook</button>
                                        </div>
                                        <div class="form-group action">
	                                    	<button class="m-btn pull-right">Registe with google</button>
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
        name: 'Register',
        data(){
            return{
                email : '',
                password : '',
                name :'',
                errorMsg : {
                    email : '',
                    name : '',
                    password : ''
                }
            }
        },

        computed:{
            ...mapState({
                user : state => state.user
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

            ...mapActions(['registerUserByEmailAndPassword','authenticatUserByFacebook']),
            checkRequired(){
                let error = 0;
                if(this.email ==''){
                    error++
                    this.errorMsg.email = 'Email should not be empty'
                }
                if(this.name ==''){
                    error++
                    this.errorMsg.name = 'Name should not be empty'
                }
                if(this.password ==''){
                    error++
                    this.errorMsg.password = 'Password should not be empty'
                }

                if(error > 0)
                    return true;

                return false;
            },

            registerByEmailAndPassword(){
                if(this.checkRequired())
                    return false;

                const credentials = { email:this.email, password: this.password, name:this.name}
                this.registerUserByEmailAndPassword(credentials)
            }
        }
    }
</script>
