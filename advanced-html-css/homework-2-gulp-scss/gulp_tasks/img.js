const {src, dest} = require ("gulp");
const imagemin = require('gulp-imagemin');

const image = () => src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/images'))

exports.image = image;

