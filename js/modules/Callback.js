;(function (window, document, $) {
    var app = this;

    var Callback = function Callback($element) {
        var _this = this instanceof Callback ? this : Object.create(Callback.prototype);

        _this.elems = {
            $component: $element
        };

        _this.initialize();

        return _this;
    };


    $.extend(Callback.prototype, {
        initialize: function initialize() {

        }
    });

    app.Callback = Callback;

    return app.Callback;

}).call(window.EUROMED = window.EUROMED || {}, window, document, window.jQuery);