var Lib = require('../../../src/lib');

module.exports = function(type, x, y, opts) {
    var el = (opts && opts.element) || document.elementFromPoint(x, y),
        ev;

    var touchObj = new Touch({
        identifier: Date.now(),
        target: el,
        clientX: x,
        clientY: y,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5,
    });

    var fullOpts = {
        touches: [touchObj],
        targetTouches: [],
        changedTouches: [touchObj],
        bubbles: true
    };

    if(opts && opts.altKey) {
        fullOpts.altKey = opts.altKey;
    }
    if(opts && opts.ctrlKey) {
        fullOpts.ctrlKey = opts.ctrlKey;
    }
    if(opts && opts.metaKey) {
        fullOpts.metaKey = opts.metaKey;
    }
    if(opts && opts.shiftKey) {
        fullOpts.shiftKey = opts.shiftKey;
    }


    ev = new window.TouchEvent(type, Lib.extendFlat({}, fullOpts, opts));

    el.dispatchEvent(ev);

    return el;
};
