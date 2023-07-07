import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/Login.vue'
import Resume from '../views/Resume.vue'
import WorldOfClocks from '../views/WorldOfClocks.vue'
import Movie from '../views/Movie.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MovieRatings from '../views/MovieRatings.vue'
import UserRatings from '../views/UserRatings.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/world-of-clocks',
      name: 'WorldOfClocks',
      component: WorldOfClocks
    },
    {
      path: '/movies',
      children:[{
        path:'',
        name:'movies',
        component: Movie,
        beforeEnter() {          
          if($cookies.get('isAuthenticate') != 1){
            return '/login'
          }
        }
      },
      {
        path:':id',
        name:'movie-detail',
        component: MovieDetail,
      },
      {
        path:':id/movie-ratings',
        children:[{
          path:'',
          name:'movie-ratings',
          component: MovieRatings,
        },
        {
          path:':userId',
          name:'user-ratings',
          component: UserRatings,
          beforeEnter() {
            console.log(77777);
          }
        }
      ]
        
      }
    ]
    }
  ]
})

export default router
