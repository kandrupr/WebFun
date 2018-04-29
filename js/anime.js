var timeline = anime.timeline();

function addSplit(id, x, y) {
    timeline.add({
        targets: id,
        translateX: [
            { value: x, duration: 1200 }
        ], translateY:[
            { value: y, duration: 1200 }
        ],
        backgroundColor: '#000',
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
            { value: distance, duration: 300, delay: 1000, easing: 'easeInSine'}
        ],
        easing: 'easeInSine',
        backgroundColor: '#000',
        duration: 300,
        offset: 2000
    });
}

addSplit('div.b.r', 75, 75);
addSplit('div.t.l', -75, -75);
addSplit('div.t.r', 75, -75);
addSplit('div.b.l', -75, 75);

timeline.add({
    targets: 'div.holder',
    rotateX: 60,
    rotateZ: 45,
    backgroundColor: '#000',
    easing: 'easeInSine',
    duration: 300,
    offset: 2000
});

addblockRotation('div.holder.ta', -123);
addblockRotation('div.holder.ba', 123);
addblockRotation('div.holder.tb', -246);
addblockRotation('div.holder.bb', 246);

timeline.play();