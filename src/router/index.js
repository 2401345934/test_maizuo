import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Banner",
    component: () => import("@/views/Banner/index.vue"),
    redirect: "/received",
    children: [
      {
        path: "/received",
        name: "Received",
        component: () => import("@/views/Banner/Child/received.vue")
      },
      {
        path: "/release",
        name: "Release",
        component: () => import("@/views/Banner/Child/Release.vue")
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("@/views/Reg/index.vue")
  },
  {
    path: "/my",
    name: "My",
    component: () => import("@/views/My/index.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/Details/index.vue"),
  },
  {
    path: "/city",
    name: "City",
    component: () => import("@/views/City/index.vue"),
  },
  {
    path: "/information/:id",
    name: "Information",
    component: () => import("@/views/Information/index.vue"),
    props:true
  },
  {
    path: "/cdetails/:id",
    name: "Cdetails",
    component: () => import("@/views/Cdetails/index.vue"),
    props:true
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search/index.vue"),
    props:true
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next) => {
  if (to.name === "Information" || to.name === "Details" ) {
    if (localStorage.getItem("token")) {
      next()
    }else {
      alert("请先去登陆")
      next("/login")
    }

  } else {
    next()
  }
})

export default router;
