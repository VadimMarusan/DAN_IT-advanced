const { watch } = require("gulp");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { image } = require("./img");
const { browsersync } = require("./serv");


const watchTask = () => {
    watch("./index.html", (cb) => {
        browsersync.reload();
        cb();
    });
    watch("./src/styles/*.scss", styles);
    watch("./src/js/*.js", scripts);
    watch("./src/img/*", image);
};

exports.watch = watchTask;
