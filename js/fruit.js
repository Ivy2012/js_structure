(function(MyNamespace, $, undefined) {

    // we make sure code (class definition) is executed after page load is complete:
    $(function() {

        var Fruit = Class.extend({ // extend the basic class

            // constructor (public method)
            init: function() {

                // properties
                this.description = 'A simple fruit, no specific type.';
                this.color = 'unknown';
            },

            // public method
            whoami: function() {
                console.log('I am: ' + this.description + ' and have a ' + this.color + ' color');
            }

        });

        // make the Fruit class available in our namespace
        // Without the following line, we could never have
        // created instances of `Fruit` outside this file.
        MyNamespace.Fruit = Fruit;

    });

}(window.MyNamespace = window.MyNamespace || {}, jQuery));