<template>
  <div>
   <div id="loading">
      <div class="load-circle"><span class="one"></span></div>
    </div>
    <header class="header fixed-header">
      <Nav/>
    </header>
    <section id="resume" class="section blog-style">
        <div class="container">
            <div class="row">
              <router-view></router-view>
            </div>
        </div>
    </section>
    <footer class="footer">
        <!-- <div class="main-footer text-center">
            <h4 class="footer-logo">Jakarea Parvez</h4
            <div class="social-link">
                <ul>
                    <li><a href="#"><i class="fa fa-guru" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-upwork" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-freelancer" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-fiverr" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div> -->
        <div class="sub-footer  text-center">
          <p>Copy Right © By Jakarea Parvez 2014-17 | All Rights Reserved.</p>
        </div>
    </footer>
  </div>
</template>
<script type="text/javascript">
  import Nav from './components/Nav.vue';
  export default {
    name: 'app',
    components: {
      Nav
    }
  }
</script>
