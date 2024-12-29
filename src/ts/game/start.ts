body.addEventListener('keydown', (e) => {
    keyDown[e.key] = true;
});

body.addEventListener('keyup', (e) => {
    keyDown[e.key] = false;
});
