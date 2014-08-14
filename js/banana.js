(function(MyNamespace, $, undefined) {

    // we make sure code (class definition) is executed after page load is complete:
    $(function() {

        var Banana = MyNamespace.Fruit.extend({ // extend the fruit class

            // constructor (public method)
            init: function() {

                // properties
                this.description = 'A delicious banana.';
                this.color = 'yellow';
            }

        });

        // make the Banana class available in our namespace
        // Without the following line, we could never have
        // created instances of `Fruit` outside the current scope.
        MyNamespace.Banana = Banana;

    });

}(window.MyNamespace = window.MyNamespace || {}, jQuery));