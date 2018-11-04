console.clear();

var app = new Vue({
    el: '#app',
    data: {
        hue: 0,
        saturation: 1,
        contrast: 1,
        blur: 0,
        sepia: 0
    },
    computed: {
        filter: function() {
            console.log("filtering");
            return {"filter": `hue-rotate(${this.hue}deg) saturate(${this.saturation}) contrast(${this.contrast}) blur(${this.blur}px) sepia(${this.sepia}%)`};
        }
    }
});
