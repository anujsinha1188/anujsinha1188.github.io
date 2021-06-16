(function () {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementById("demo");
    var messages = document.getElementById("messages");
    var phases = {
        1: 'capture',
        2: 'target',
        3: 'bubble'
    };

    function logClickedMessage(event) {
        var currentTarget = event.currentTarget.tagName;
        var phaseName = phases[event.eventPhase];
        var message = 'Click event triggered during <mark>' + phaseName + '</mark> phase at <mark>' + currentTarget + '</mark>.';
        message += ' This event was previously handled at <mark>' + event.previouslyHandledTagName + '</mark>';
        messages.innerHTML += message + '<br/>';
        event.previouslyHandledTagName = currentTarget;
        // event.stopImmediatePropagation();
        // if (currentTarget == 'BUTTON') {
        //     event.stopPropagation();
        // }
    }

    //capture phase
    html.addEventListener('click', logClickedMessage, true);
    body.addEventListener('click', logClickedMessage, true);

    //target phase
    button.addEventListener('click', logClickedMessage, true);
    button.addEventListener('click', logClickedMessage);

    //bubble phase
    body.addEventListener('click', logClickedMessage);
    html.addEventListener('click', logClickedMessage);
})();