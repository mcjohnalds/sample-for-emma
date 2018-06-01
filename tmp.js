const Home = {
  template: `
  	<div>
  		<p>On home page</p>
      <iframe src="https://fiddle.jshell.net/mcjohnalds45/pb0apqtz/8/show/light/" frameborder="0"></iframe>
    </div>
  `
};

const Attendance = {
  template: `
  	<div>
    	<p>On attendance page</p>
      <router-link to="/">Home</router-link>
    </div>
  `
};

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/attendance", component: Attendance },
    { path: "*", redirect: "/" }
  ]
});

new Vue({
  router,
  el: "#app"
});

window.addEventListener("message", event => {
  console.log(event.data);
  router.push(event.data);
});
