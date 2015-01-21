;(function(window, document, $) {
    var app = this;

    app.$win = $(window);
    app.$doc = $(document);
    app.$html = $(document.documentElement);
    app.$body = $(document.body);

    var beforeModules = function beforeModules() {
        app.$html.removeClass('no-js');
        app.$html.addClass('js');

        $('#seo-placeholder').text($('#seotext').text());
        $('#seotext').remove();
    };

    var afterModules = function afterModules() {

    };

    app.start = function __start__() {
        app.modules = app.modules || {};

        beforeModules();

        var moduleElements = $('[data-module-type]');

        moduleElements.each(function() {
            var $module = $(this);
            app.createModule($module);
        });

        afterModules();

        app.start = function() {
            if (console && console.trace) {
                console.trace();
            }

            console.log('Warning: Attempting to run start function more than once!');
        };

        return app;
    };

    app.createModule = function __createModule__($element) {
        var moduleTypes = $element.data('moduleType').split(' ');
        var module = null;
        var modules = app.modules || {};
        var start = $.now();
        var end;

        moduleTypes.forEach(function(moduleType) {

            if (app[moduleType] && typeof app[moduleType] === 'function') {
                try {
                    module = new app[moduleType]($element);

                    $.data($element[0], moduleType, module);

                    end = $.now();
                    console.log('─', moduleType, 'module loaded in', end - start, 'ms.');
                } catch (e) {
                    console.error('Attempted to initialize a', moduleType, 'module using', $element[0], 'but there was an error:', e);
                }

            } else {
                console.error('Module', moduleType, 'not found');
            }

            if (module) {
                if (modules[moduleType] === undefined) {
                    modules[moduleType] = [];
                }

                modules[moduleType].push(module);
            }
        });

        app.modules = modules;
    };

    // Lights, Camera, Action!
    jQuery(app.start);

}).call(window.EUROMED = window.EUROMED || {}, window, document, window.jQuery);
