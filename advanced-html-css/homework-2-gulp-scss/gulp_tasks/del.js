
const gulp = require("gulp");
const del = require('del');

const delPath = (cb) => {
    del.sync('./dist');
    cb();
}


exports.del = delPath



