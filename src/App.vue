<template>
  <div id="app">
    <div>
      <b-navbar id="nav" toggleable="lg" type="dark">
        <b-navbar-brand to="/"> <h2>Oni Ramen</h2></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <b-nav-item to="/menu">Menu</b-nav-item>
              <b-nav-item to="/Order">Order</b-nav-item>
              <b-nav-item to="/User">LogIn / LogOut</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view style="margin-top: 20px;" />
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(131, 171, 207);
}

#nav {
  padding: 30px;
  background: #000;
}

#nav a {
  font-weight: bold;
  color: #6e7f8f;
}

#nav a.router-link-exact-active {
  color: #1784e9;
}
</style>