/**
 * Kontroler formularza kontaktowego
 * @type {Object}
 */
var formCtrl = {
    init: function(settings) {
        this.config = {
            //
            container: $('')
        };

        $.extend(this.config, settings);

        this.setup();
    },

    setup: function() {
        console.log('setup form');
        this.setupCustomMessages();
        this.config.container.validate();
    },

    setupCustomMessages: function() {
        $.extend($.validator.messages, {
            required: 'To pole jest wymagane'
        });
    }
};