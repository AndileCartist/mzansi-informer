<template>
  <div class="parent-wrapper">
    <span class="close-btn glyphicon glyphicon-remove"></span>
    <div class="subscribe-wrapper">
      <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
      <input
        type="email"
        name="email"
        class="subscribe-input"
        placeholder="Your e-mail"
        v-model="userEmail"
      />
      <div class="submit-btn" @click="submitNewsletter()">SUBMIT</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apiUrl = process.env.API_URL || "http://localhost:1337/";
export default {
  name: "newsletter",
  data() {
    return {
      userEmail: ''
    }
  },
  methods: {
     submitNewsletter() {
      axios
          .post(
            `${apiUrl}newsletters`,
            {
              email: this.userEmail,
            }
          )
          .catch((err) => {
            return console.log(err.message);
          });
    },
  },
};
</script>

<style lang="css" scoped>
body {
  background-color: #ffb7b7;
}

.parent-wrapper {
  position: relative;
  width: 220px;
  height: 310px;
  margin: 40px auto 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.5);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-image: url("https://i.imgur.com/MRjF1PL.png?1");
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 4px;
  color: #333;
  box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.4);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #7149c7;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 28px;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all 0.25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  border-bottom: 1px solid #a77cf4;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 30px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: #a77cf4;
  color: #fff;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: -5px 6px 20px 0px rgba(51, 51, 51, 0.4);
}

.subscribe-wrapper .submit-btn:hover {
  background-color: #8e62dc;
}
@media only screen and (min-width: 965px){
  .parent-wrapper {
  width: 250px;

}
}
</style>
