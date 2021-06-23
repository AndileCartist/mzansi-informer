import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage")
  },
  {
    path: "/sports",
    name: "sports",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/science",
    name: "science",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/health",
    name: "health",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/business",
    name: "business",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/technology",
    name: "technology",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/entertainment",
    name: "entertainment",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/general",
    name: "general",
    component: () => import("../components/FeedContainer")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../pages/SignIn")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../pages/SignIn")
  },
  {
    path: "/welcome",
    name: "welcome-page",
    component: () => import("../pages/WelcomePage")
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../pages/ResetPassword")
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else {
            return { x: 0, y: 0, behavior: 'smooth' }
    }
    
  }
});

export default router;
