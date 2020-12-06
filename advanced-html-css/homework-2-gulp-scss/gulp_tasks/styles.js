const {src, dest} = require ("gulp");
const { browsersync } = require("./serv");
const minify = require('gulp-minify');
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require('gulp-clean-css');
const uncss = require('gulp-clean-css');



const styles = () =>
    src("./src/styles/styles.scss")
        .pipe(sass())
        .pipe(minify())
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(uncss({
            html: ['index.html'],
}))
        .pipe(dest("./dist/css/"))
        .pipe(browsersync.reload({stream: true}));

exports.styles = styles;