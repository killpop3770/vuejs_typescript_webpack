'use strict'

import Cam from "./target/Cam";

let app = new Vue({

    el: '#app',
    data: {
        message: "Camera Model"
    },
    methods: {
        iterCounter: function () {
            this.message = new Cam("hiwatch DS-I214W");
        }
    }
})