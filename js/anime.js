anime({
    targets: 'div.b.r',
    translateX: [
        { value: 75, duration: 1200 }
    ], translateY:[
        { value: 75, duration: 1200 }
    ], opacity: [
        {value: 0.0, duration: 800, delay: 1200, easing: 'easeOutExpo'},
        {value: 1.0, duration: 800, easing: 'easeOutExpo'}
    ],
    backgroundColor: '#000',
    duration: 2800
});

anime({
    targets: 'div.t.l',
    translateX: [
        { value: -75, duration: 1200 }
    ], translateY:[
        { value: -75, duration: 1200 }
    ], opacity: [
        {value: 0.0, duration: 800, delay: 1200, easing: 'easeOutExpo'},
        {value: 1.0, duration: 800, easing: 'easeOutExpo'}
    ],
    backgroundColor: '#000',
    duration: 2800
});

anime({
    targets: 'div.t.r',
    translateX: [
        { value: 75, duration: 1200 }
    ], translateY:[
        { value: -75, duration: 1200 }
    ], opacity: [
        {value: 0.0, duration: 800, delay: 1200, easing: 'easeOutExpo'},
        {value: 1.0, duration: 800, easing: 'easeOutExpo'}
    ],
    backgroundColor: '#000',
    duration: 2800
});

anime({
    targets: 'div.b.l',
    translateX: [
        { value: -75, duration: 1200 }
    ], translateY:[
        { value: 75, duration: 1200 }
    ], opacity: [
        {value: 0.0, duration: 800, delay: 1200, easing: 'easeOutExpo'},
        {value: 1.0, duration: 800, easing: 'easeOutExpo'}
    ],
    backgroundColor: '#000',
    duration: 2800
});

anime({
    targets: 'div.holder',
    rotateX: 60,
    rotateZ: 45,
    delay: 2800,
    easing: 'easeInSine',
    duration: 300
});

anime({
    targets: 'div.holder.ta',
    rotateX: 60,
    rotateZ: 45,
    translateZ: [
        { value: -125, duration: 500, delay: 3300, easing: 'easeInSine'}
    ],
    easing: 'easeInSine',
    delay: 2800,
    duration: 300
});

anime({
    targets: 'div.holder.ba',
    rotateX: 60,
    rotateZ: 45,
    translateZ: [
        { value: 125, duration: 500, delay: 3300, easing: 'easeInSine'}
    ],
    easing: 'easeInSine',
    delay: 2800,
    duration: 300
});

anime({
    targets: 'div.holder.tb',
    rotateX: 60,
    rotateZ: 45,
    translateZ: [
        { value: -250, duration: 500, delay: 3300, easing: 'easeInSine'},
    ],
    easing: 'easeInSine',
    delay: 2800,
    duration: 300
});

anime({
    targets: 'div.holder.bb',
    rotateX: 60,
    rotateZ: 45,
    translateZ: [
        { value: 250, duration: 500, delay: 3300, easing: 'easeInSine'}
    ],
    easing: 'easeInSine',
    delay: 2800,
    duration: 300
});
