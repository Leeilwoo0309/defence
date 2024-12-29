setInterval(() => {
    if (keyDown.w) cameraPosition.y -= 5;
    if (keyDown.a) cameraPosition.x -= 5;
    if (keyDown.s) cameraPosition.y += 5;
    if (keyDown.d) cameraPosition.x += 5;
}, 16);
