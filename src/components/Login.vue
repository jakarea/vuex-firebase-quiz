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
                                {{ error.message }}
                                {{ user }}
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Email</label>
                                    <input name="name" placeholder="Email" v-model="email" type="text" class="form-control"></div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Password</label>
                                    <input name="name" placeholder="Plassword" v-model="password" type="password" class="form-control"></div>
                                </div>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Don't have account? <router-link to="/register" tag="a">register</router-link></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group action">
                                            <button class="m-btn pull-right"
                                                @click.prevent="authenticatByEmaailAndPassword">Login </button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                	<div class="col-md-12">
	                                    <div class="form-group action">
                                            <button class="m-btn pull-left">Log In with facebook</button>
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
        name: 'Quiz',
        data(){
            return{
                email : null,
                password : null,
                error : ''
            }
        },

        computed:{
            ...mapState({
                user : state => state.user
            })
        },

        methods: {

            ...mapActions(['getUser']),

            authenticatByEmaailAndPassword(){
              const credentials = { email:this.email, password: this.password}
              this.getUserByEmaailAndPassword(credentials)
            },
        }
    }
</script>
