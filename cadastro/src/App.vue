<template >
  <div>
    <transition name="pagina">
      <router-view />
    </transition>
    <img class="logo" width="220" height="200" alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {};
</script>

<style>

body{
  background-color: black;
}*

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}

.logo{
  position: absolute; 
	left: -30px;
	top: -15px; 
}

</style>
