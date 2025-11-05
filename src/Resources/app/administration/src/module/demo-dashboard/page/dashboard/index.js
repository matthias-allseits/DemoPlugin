import template from './dashboard.html.twig';

const {Component, Mixin} = Shopware;

Component.register('dashboard', {
    template,

    mixins: [
        Mixin.getByName('notification')
    ],
    
    data() {
        return {
            isLoading: true,
        };
    },

    created() {
        setTimeout(() => {
            this.isLoading = false;
        }, 5000);
    },

    methods: {
    }
});