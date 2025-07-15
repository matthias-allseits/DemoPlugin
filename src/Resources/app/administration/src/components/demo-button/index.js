const { Component, Mixin } = Shopware;
import template from './demo-button.html.twig';

Component.register('demo-button', {
    template,

    props: ['label'],
    inject: ['demoTest'],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
        };
    },

    methods: {
        saveFinish() {
            this.isSaveSuccessful = false;
        },

        check() {
            this.isLoading = true;
            this.demoTest.check().then((res) => {
                if (res.success) {
                    this.isSaveSuccessful = true;
                    this.createNotificationSuccess({
                        title: this.$tc('demo-button.title'),
                        message: this.$tc('demo-button.success')
                    });
                } else {
                    this.createNotificationError({
                        title: this.$tc('demo-button.title'),
                        message: this.$tc('demo-button.error')
                    });
                }

                this.isLoading = false;
            });
        }
    }
})
