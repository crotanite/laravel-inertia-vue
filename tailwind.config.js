/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*{.ts,.vue}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            maxHeight: theme => theme('height'),
            maxWidth: theme => theme('width'),
            minHeight: theme => theme('height'),
            minWidth: theme => theme('width'),
        }
    },
}
