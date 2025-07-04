import template from './dashboard.html.twig';

const {Component, Mixin} = Shopware;

Component.register('dashboard', {
    template,

    mixins: [
        Mixin.getByName('notification')
    ],
    
    data() {
        return {
            isLoading: false,
        };
    },

    methods: {
    }
});