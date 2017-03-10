var gulp = require('gulp')
var browserify = require('browserify')
gulp.task('compileEs6',()=>{
    browserify('index.js').transform("babelify",{presets:['es2015','react']}).bundle().pipe(require('fs').createWriteStream('public/index.js'))
})
