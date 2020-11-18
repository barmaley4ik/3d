module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./resources/views/front.blade.php', './resources/js/Front/app.vue'],
    theme: {
        screens: {
            'smm': '320px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        fontFamily: {
            'roboto': ['Roboto'],
            'mono': ['Roboto Mono'],
        },
        fontSize: {
            xs: ['11px'],
            sm: ['12px'],
            smm: ['14px'],
            base: ['16px', '24px'],
            medium: ['18px'],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
            twomedium: ['36px'],
        },
        maxWidth: {
            'smm': '11rem',
            'logosm': '60%',
            '6xl': '36rem',
            'lg': '26rem',
            'md': '20rem'

        },
        minHeight: {
            '40': '40%'

        },
        extend: {},
    },
    variants: {
        maxWidth: ['responsive', 'hover', 'focus'],
        minHeight: ['responsive', 'hover', 'focus'],
        backgroundColor: ['focus'],
        borderColor: ['responsive', 'focus', 'hover'],
        outline: ['responsive', 'focus', 'hover', 'active']
    },
    plugins: [],
}