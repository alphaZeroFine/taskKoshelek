export default [
    {
        path: '/',
        component: () => import('@/components/List.vue')
    },
    {
        path: '/dropdown',
        component: () => import('@/components/Dropdown.vue'),
    },
];
