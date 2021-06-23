<template>
  <div class="banner">
    <p class="line-1 anim-typewriter centered">
      the independent news curator
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.line-1 {
  width: 92%;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 15.5px;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
  color: #f0f8ff;
  font-weight: 600;
  text-transform: uppercase;
}
.centered {
  position: absolute;
  top: 25%;
  left: 5%;
}
.banner {
  height: 300px;
  background-image: url("../assets/banner/calvin.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 92%;
  }
}
@media only screen and (min-width: 391px) {
  .line-1 {
    font-size: 20px;
  }
}
@media only screen and (min-width: 1000px) {
  .line-1 {
    font-size: 38px;
  }
}
@media only screen and (min-width: 1400px) {
  .line-1 {
    font-size: 58px;
  }
}

@media only screen and (min-width: 769px) {
  .line-1 {
    width: 68%;
  }
  .banner {
    height: 380px;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 68%;
    }
  }
}


/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(24) 0.8s 1 normal both,
    blinkTextCursor 700ms steps(24) infinite normal;
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
