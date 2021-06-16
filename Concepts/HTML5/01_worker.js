/* you can import more scripts inside the worker context and run them. */
importScripts("01_add.js");

//triggered when parent sends the message using postMessage().
self.onmessage = function (event) {
    var n = event.data.value;

    if (isNaN(n)) {
        //send a custom error message to the main thread
        postMessage({ errorMessage: 'Not a number.', value: NaN });

        //worker termiantes itself.
        self.close();
    }
    else {
        n = add(n);
        //send the result to the parent thread.
        postMessage({ value: n });

        //worker termiantes itself.
        self.close();
    }
}