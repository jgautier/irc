var jade = require("./runtime.min.js");
var views = {};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/ircpanel.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('container-fluid') + ' ' + ('irc-panel') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('><h1>' + escape((interp = sideBarHeader) == null ? '' : interp) + '</h1><input');
        buf.push(attrs({ 'type':('text') }));
        buf.push('/><div');
        buf.push(attrs({ "class": ('irc-list') + ' ' + ('irc-content') }));
        buf.push('>&nbsp</div></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('><h1>' + escape((interp = mainHeader) == null ? '' : interp) + '</h1><div');
        buf.push(attrs({ "class": ('irc-main') + ' ' + ('irc-content') }));
        buf.push('>&nbsp;</div><input');
        buf.push(attrs({ 'type':('text'), "class": ('main-input') }));
        buf.push('/></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/layout.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('http://twitter.github.com/bootstrap/1.3.0/bootstrap.min.css') }));
        buf.push('/><link');
        buf.push(attrs({ 'rel':('stylesheet'), 'href':('css/custom.css') }));
        buf.push('/><script');
        buf.push(attrs({ 'src':('/socket.io/socket.io.js') }));
        buf.push('></script><script');
        buf.push(attrs({ 'src':('browserify.js') }));
        buf.push('></script><title>Node IRC Client</title></head><body></body></html>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/Room.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('fluid-container') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('sidebar') }));
        buf.push('></div><div');
        buf.push(attrs({ "class": ('content') }));
        buf.push('></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/topbar.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ "class": ('topbar') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('topbar-inner') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('container-fluid') }));
        buf.push('><h3><a');
        buf.push(attrs({ 'href':('#') }));
        buf.push('>irc.no.de</a></h3><ul');
        buf.push(attrs({ "class": ('nav') }));
        buf.push('><li');
        buf.push(attrs({ "class": ('active') }));
        buf.push('><a');
        buf.push(attrs({ 'href':('#'), 'data-room-id':('#console') }));
        buf.push('>#console</a></li></ul></div></div></div>');
    }
    return buf.join("");
};
views["/Users/juliangautier/Documents/irc/templates/modals/login.jade"] = function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
    var buf = [];
    with (locals || {}) {
        var interp;
        buf.push('<div');
        buf.push(attrs({ 'id':('login'), "class": ('modal') + ' ' + ('hide') + ' ' + ('fade') }));
        buf.push('><div');
        buf.push(attrs({ "class": ('modal-header') }));
        buf.push('><h3>Log On</h3></div><div');
        buf.push(attrs({ "class": ('modal-body') }));
        buf.push('><form');
        buf.push(attrs({ "class": ('form-stacked') }));
        buf.push('><label');
        buf.push(attrs({ 'for':('nickName') }));
        buf.push('>Nick Name:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('nickName'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('channels') }));
        buf.push('>Channels:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('channels'), "class": ('span4') }));
        buf.push('/><label');
        buf.push(attrs({ 'for':('server') }));
        buf.push('>Server:</label><input');
        buf.push(attrs({ 'type':('text'), 'id':('server'), "class": ('span4') }));
        buf.push('/></form></div><div');
        buf.push(attrs({ "class": ('modal-footer') }));
        buf.push('><button');
        buf.push(attrs({ 'id':('logOn'), "class": ('success') + ' ' + ('btn') }));
        buf.push('>Log On</button></div></div>');
    }
    return buf.join("");
};
module.exports = function(view, locals) {
    return (views["/Users/juliangautier/Documents/irc/templates/" + view + ".jade"])(locals);
};