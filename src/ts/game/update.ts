setInterval(() => {
    if (keyDown.w) cameraPosition.y -= cameraSpeed;
    if (keyDown.a) cameraPosition.x -= cameraSpeed;
    if (keyDown.s) cameraPosition.y += cameraSpeed;
    if (keyDown.d) cameraPosition.x += cameraSpeed;

    const roadElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.road');
    const roadPosition = [
        [100, 100],
        [100, 450],
        [100, 800],
        [1532, 100],
        [100, 458],
        [1532, 800],
    ];

    roadElements.forEach((e, i) => {
        e.style.top = `${roadPosition[i][1] - cameraPosition.y + 0}px`;
        e.style.left = `${roadPosition[i][0] - cameraPosition.x + 0}px`;
    });

    slots.forEach((e) => e.update());
}, 16);
