define(['uiComponent'], function (Component) {
    'use strict';
    console.log("click");
    return Component.extend({
        defaults: {
            tasks: [
                {label: "Task 1"},
                {label: "Task 2"},
                {label: "Task 3"},
                {label: "Task 4"},
                {label: "Task 5"},
            ]
        }
    });
});
