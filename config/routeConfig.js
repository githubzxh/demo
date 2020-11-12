export default [
    {
        path: '/',
        component: '../layout',
        icon: "",
        routes: [
            { path: 'helloworld', component: './HelloWorld' },
            { path: 'puzzlecards', component: './PuzzleCards' },

        ]
    },
    {
        path: '/user',
        routes: [
            {path: '/user/acct', component: './user/account'},
            {path: '/user/stu', component: './user/student'},
        ]
    }
]