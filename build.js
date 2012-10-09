var handlebars = require('handlebars');
var fs = require('fs');

handlebars.registerHelper('include', function(tpl_name) {
    var html = compile(load_file(tpl_name));
    return new handlebars.SafeString(html);
});

function compile(tpl) {
    var hdbl = handlebars.compile(tpl);
    return hdbl();
}

function load_file(fname) {
    return fs.readFileSync(fname, 'utf8');
}


console.log(compile(load_file('page.html')));