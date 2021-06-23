<template>
  <div>
    <div class="">
      <div
        class="grid-container product-des"
        v-for="feed of news"
        :key="feed.id"
      >
        <div class="head">
          <a :href="feed.url" target="_blank" rel="noopener noreferrer">
            <h6>{{ feed.title }}</h6>
          </a>
        </div>
        <div class="des">
          <div>
            <div class="time-slot" style="">
              <p>{{ timeformater(feed.publishedAt) }}</p>
              <img src="../assets/bookmark.svg" alt="bookmark" />
            </div>
            <h5 class="card-des">{{ feed.description }}</h5>
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="image"><img :src="feed.image" alt="image" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    news: Array,
  },
  methods: {
    timeformater(time) {
      let date = time.split("T"),
        months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Novermber",
          "December",
        ],
        hours = date[1].split(":"),
        month = date[0].split("-"),
        year = new Date().getFullYear();
      if (year === Number(month[0])) {
        return ` ${month[2]} ${months[Number(month[1] - 1)]} ${hours[0]}:${
          hours[1]
        }`;
      } else {
        ` ${month[2]} ${months[Number(month[1] - 1)]} ${month[0]} ${hours[0]}:${
          hours[1]
        }`;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.product-des {
  box-shadow: 1px 0px 20px rgb(0 0 0 / 7%);
  background-color: #fff;
  min-height: 190px;
  width: 93%;
  margin: auto;
  margin-top: 30px;
  font-family: "Playfair Display", serif;
  text-align: center;
}
.head > a > h6 {
  padding: 5px 5px;
  padding-bottom: 0;
  font-size: 17px;
  margin-bottom: 5px;
  border-bottom: 1px solid #e4e4e4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  margin-top: 0px;
  padding-top: 15px;
}
.head > a > h6:hover {
  color: #7433c1;
}
.head > a {
  text-decoration: none;
  color: initial;
}
.grid-container {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  grid-template-rows: 70px 120px;
  gap: 0 0;
  grid-template-areas:
    "head head head"
    "image des des";
  border-radius: 5px;
}
.head {
  grid-area: head;
  overflow: hidden;
}
.des {
  grid-area: des;
  overflow: hidden;
}
.card-des {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 15px;
  font-family: "PT Serif", serif;
  padding: 3px 5px;
  text-align: start;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
  max-height: 79px;
}
.image {
  grid-area: image;
}
.image > img {
  width: 100%;
  height: 120px;
  border-bottom-left-radius: 5px;
}
.time-slot {
  height: 26px;
  width: 100%;
  background: inherit;
  display: flex;
  justify-content: space-between;
  height: 26px;
  width: 100%;
}
.time-slot > p {
  display: inline;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 10px;
  color: gray;
  font-size: 14px;
}
.time-slot > img {
  width: 10%;
  /* padding-top: 3px; */
  padding-right: 10px;
}

@media only screen and (min-width: 440px) {
  .time-slot > img {
    width: 7%;
  }
}

@media only screen and (min-width: 780px) {
  .grid-container {
    grid-template-columns: 1.5fr 2fr 2fr;
    grid-template-areas:
      "image head head"
      "image des des";
  }
  .image > img {
    height: 190px;
    border-top-left-radius: 5px;
  }
  .head > a > h6 {
    font-size: 19px;
  }
  .product-des {
    width: 83%;
  }
  .card-des {
    font-size: 17px;
  }
  .time-slot > img {
    width: 2.4%;
  }
  .time-slot > p {
    font-size: 18px;
  }
}
</style>
