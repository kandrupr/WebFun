var timeline = anime.timeline();

function addSplit(id, x, y) {
    timeline.add({
        targets: id,
        translateX: [
            { value: x, duration: 1200 }
        ], translateY:[
            { value: y, duration: 1200 }
        ],
        duration: 1500,
        delay: 500,
        offset: 0
    })
}

function addblockRotation(id, distance) {
    timeline.add({
        targets: id,
        rotateX: 60,
        rotateZ: 45,
        translateZ: [
            { value: distance, duration: 300, delay: 1000, easing: 'easeInSine'},
        ],
        easing: 'easeInSine',
        backgroundColor: "#000",
        duration: 300,
        offset: 2000,
        complete: function(anim) {
           $(id).children().each(function () {
               $(this).css("background-color", "transparent");
           });
            $(id).css("background-image", "url(../assets/icons/dog.jpg)");
            $(id).css("background-size", "contain");
        }
    });
}

function selectPage(id, distance, xScale, yScale) {
    timeline.add({
        targets: id,
        rotateX: [
            {value: 60, duration: 300, easing: 'easeInSine'},
            {value: 0, duration: 300, delay: 1300, easing: 'easeInSine'}
        ],
        rotateZ: [
            {value: 45, duration: 300, easing: 'easeInSine'},
            {value: 0, duration: 300, delay: 1300, easing: 'easeInSine'}
        ],
        translateZ: [
            { value: distance, duration: 300, delay: 1000, easing: 'easeInSine'},
        ],
        scaleX: [
            {value: xScale, delay: 1600}
        ],
        scaleY: [
            {value: yScale, delay: 1600}
        ],
        easing: 'easeInSine',
        backgroundColor: '#000',
        duration: 300,
        offset: 2000,
        update: function(anim) {
            if(anim.currentTime > 2600 && anim.currentTime < 2650){
                $(id).children().each(function () {
                    $(this).css("background-color", "transparent");
                });
                $(id).siblings().each(function () {
                    $(this).remove();
                });
            }
            console.log(anim.currentTime + 'ms');
        }
    });
}

addSplit('div.b.r', 75, 75);
addSplit('div.t.l', -75, -75);
addSplit('div.t.r', 75, -75);
addSplit('div.b.l', -75, 75);

selectPage('div.holder.c', 0, getXScale(), getYScale());
addblockRotation('#center', 0);
addblockRotation('#mtop', 123);
addblockRotation('#mbot', -123);
addblockRotation('#top', 246);
addblockRotation('#bot', -246);

timeline.add({
    targets: '#anim',
    offset: 3500,
    complete: function(anim) {
        var all = document.getElementById("anim");
    }
});
function getXScale() {
    return Math.round(screen.width/250);
}

function getYScale() {
    return Math.round(screen.height/250);
}
timeline.play();