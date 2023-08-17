var config = {
    paths: {
        slick: 'js/slick.min'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        'slick-init': {
            deps: ['jquery', 'slick'] // yêu cầu jquery và slick được tải trước
        }
    }
};