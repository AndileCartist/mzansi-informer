<template>
  <div class="cont">
    <h4 class=" header-size category-font ">{{ header }}</h4>
    <div class="divider"></div>
    <div class="divider2"></div>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
  props: {
    header: String,
  },
};
</script>

<style lang="css" scoped>
.cont {
  display: flex;
  align-items: center;
  margin: 10px;
  flex-direction: column;
  margin-bottom: 40px;
}
.category-font {
  font-family: "Playfair Display", serif;
}
.divider {
  height: 2px;
  width: 80%;
  background: rgb(66, 66, 66);
  background: linear-gradient(
    90deg,
    hsl(0, 0%, 78%),
    hsl(0, 0%, 31%),
    hsl(0, 0%, 75%)
  );
}
.divider2 {
  height: 2px;
  width: 60%;
  margin-top: 7px;
  background: rgb(66, 66, 66);
  background: linear-gradient(
    90deg,
    hsl(0, 0%, 78%),
    hsl(0, 0%, 31%),
    hsl(0, 0%, 75%)
  );
}
.flow {
  overflow: auto;
}
.header-size {
  font-size: 17px;
  margin: 20px;
  text-transform: uppercase;
}
@media only screen and (min-width: 800px) {
  .header-size {
    font-size: 38px;
  }
}
</style>
