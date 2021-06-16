(function () {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementById("demo");
    var pause = 500;


    function clickEvent(event) {
        var ms = event.timeout = (event.timeout + pause) || 0;
        var target = event.currentTarget;

        setTimeout(function () {
            target.classList.add('highlight');
            setTimeout(function () {
                target.classList.remove('highlight');
            }, pause);
        }, ms);
    }

    //capture phase
    html.addEventListener('click', clickEvent, true);
    body.addEventListener('click', clickEvent, true);

    //target phase
    button.addEventListener('click', clickEvent);

    //bubble phase
    body.addEventListener('click', clickEvent);
    html.addEventListener('click', clickEvent);

})();