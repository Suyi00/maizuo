export default {
    path:'/film',
    component:() => import('@/views/Film/Film.vue'),
    redirect:'/film/nowPlaying',
    children:[
        {
            path:'nowPlaying',
            component: () => import("@/views/Film/NowPlaying"),
        },
        {
            path:'comingSoon',
            component: () => import('@/views/Film/ComingSoon'),
        }
    ],

}