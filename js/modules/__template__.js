;(function (window, document, $, _, dust, CQ, undefined) {
    var app = this;

    /*
     * Default Variables
     */
    var DEFAULTS = {
        SERVICES_URLS: {
        },
        SELECTORS: {
            TEMPLATE_ID: '#'
        }
    };

    /*
     * Helper Functions
     */

    /*
     * Constructor
     */
    var ModuleTemplate = function ModuleTemplate($element) {
        var _this = this instanceof ModuleTemplate ? this : Object.create(ModuleTemplate.prototype);

        _this.elems = {
            $component: $element
        };

        _this.initialize();

        return _this;
    };


    $.extend(ModuleTemplate.prototype, {
        initialize: function initialize() {
            this.bindEvents();
            this.render();
        },

        bindEvents: function bindEvents() {

        },

        render: function render() {

        },

        /**
         * @private
         */
        _privateMethod: function _privateMethod() {

        }
    });

    app.ModuleTemplate = ModuleTemplate;

    return app.ModuleTemplate;

}).call(window.EUROMED = window.EUROMED || {}, window, document, window.jQuery);