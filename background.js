var ytPitch;
void 0 === ytPitch && (ytPitch = {
    playbackRate: 1,
    preservesPitch: !1,
    init: function() {
        new MutationObserver(function(a) {
            ytPitch.updateVideos()
        }).observe(document.querySelector("body"), {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }), ytPitch.updateVideos()
    },
    updateVideos: function() {
        for (var a = document.getElementsByTagName("video"), b = 0; b < a.length; ++b) {
            var c = a[b];
            c.playbackRate = this.playbackRate, c.mozPreservesPitch = this.preservesPitch && 1 != this.playbackRate
        }
    },
    PitchUp: function() {
        this.playbackRate *= 1.05, ytPitch.updateVideos()
    },
    PitchDown: function() {
        this.playbackRate /= 1.05, ytPitch.updateVideos()
    },
    reset: function() {
        this.playbackRate = 1, ytPitch.updateVideos()
    },
    prompt: function() {
        var a = prompt("New playback speed:", this.playbackRate);
        a && (this.playbackRate = a, ytPitch.updateVideos())
    }
}, ytPitch.init());

