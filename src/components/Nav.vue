  <template>
    <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <h1 class="logo">
              <a href="#">Jakarea <span>Parvez</span></a>
              <p>how did i solve</p>
            </h1>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/" tag="a" exact>Home</router-link></li>
              <li><router-link to="/about" tag="a">About Me</router-link></li>
              <li><router-link to="/services" tag="a">Services</router-link></li>
              <li><router-link to="/projects" tag="a">Projects</router-link></li>
              <li><router-link to="/quiz" tag="a">Quiz</router-link></li>
              <li><router-link to="/contact" tag="a">Contact</router-link></li>
              <li><router-link to="/login" tag="a">Login</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
  </template>
<script type="text/javascript">
  
  export default {
    name: 'Nav',
    data () {
      return {}
    }
  }
    
</script>