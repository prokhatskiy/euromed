;(function (window, document, $) {
    var app = this;

    var Global = function Global($element) {
        var _this = this instanceof Global ? this : Object.create(Global.prototype);

        _this.elems = {
            $component: $element
        };

        _this.initialize();

        return _this;
    };


    $.extend(Global.prototype, {
        initialize: function initialize() {

        }
    });

    app.Global = Global;

    return app.Global;

}).call(window.EUROMED = window.EUROMED || {}, window, document, window.jQuery);