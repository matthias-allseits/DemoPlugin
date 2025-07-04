import './page/dashboard';

const {Module} = Shopware;

Module.register('demo-dashboard', {
    type: 'plugin',
    name: 'DemoDashboard',
    title: 'demoDashboard',
    description: 'composerDemo',
    color: '#b3922b',

    routes: {
        overview: {
            component: 'dashboard',
            path: 'overview'
        }
    },

    navigation: [
        {
            id: 'dashboard',
            label: 'demoDashboard',
            color: '#0080ff',
            path: 'demo.dashboard.overview',
            parent: 'sw-catalogue',
            position: 20
        },
    ]
});
