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
                                    <div class="form-group"><label class="sr-only">Email</label> 
                                    <input name="name" placeholder="Email" type="text" class="form-control"></div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group"><label class="sr-only">Password</label> 
                                    <input name="name" placeholder="Plassword" type="password" class="form-control"></div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-8">    
                                        <p>Allready have account? <router-link to="/login" tag="a">login</router-link></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group action">
                                        	<button class="m-btn pull-right">Rregiste</button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                	<div class="col-md-12">
	                                    <div class="form-group action">
                                            <button class="m-btn pull-left">Registe with facebook</button>
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