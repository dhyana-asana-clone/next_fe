module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontSize: {
            xs: ['0.75rem', '1rem'],
            sm: ['0.875rem', '1.25rem'],
            base: ['1rem', '1.5rem'],
            lg: ['1.25rem', '1.75rem'],
            xl: ['1.5rem', '2rem'],
        },
        fontWeight: {
            light: '300',
            base: '500',
            bold: '700',
        },
        colors: {
            black: '#000000',
            white: '#ffffff',

            'grey-muted': '#F8FAFC',
            'grey-light': '#E7EDF2',
            grey: '#8B96A5',
            'grey-dark': '#485166',

            'primary-muted': '#EDF2FB',
            'primary-light': '#1D62CB',
            primary: '#144EA5',
            'primary-dark': '#121F3E',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
