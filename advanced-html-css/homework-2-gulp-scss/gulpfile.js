
const { series, parallel } = require("gulp");
const { scripts } = require("./gulp_tasks/scripts");
const { styles } = require("./gulp_tasks/styles");
const { serv } = require("./gulp_tasks/serv");
const { watch } = require("./gulp_tasks/watch");
const {image} = require("./gulp_tasks/img")
const {del} = require("./gulp_tasks/del")

exports.dev = parallel(serv, watch, series(styles, image, scripts));
exports.build = series(del, styles, image, scripts);