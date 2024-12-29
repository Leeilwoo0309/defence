const body: HTMLElement = document.body;
/** Slot 상위 Div */
const slotParentDiv: HTMLDivElement | null = document.querySelector('#slot');

// 상수 선언하는데
const slotSize: number = 100;

// 카메라 관련
let cameraPosition: Position = { x: 0, y: 0 };
let cameraSpeed: number = 5;

// 키 관련
let keyDown: { [ket in string]: boolean } = {
    w: false,
    a: false,
    s: false,
    d: false,
};

const slots: Slot[] = [
    new SlotBuilder().setPosition({ x: 200, y: 215 }).build(),
    new SlotBuilder().setPosition({ x: 600, y: 215 }).build(),
    new SlotBuilder().setPosition({ x: 1000, y: 215 }).build(),
    new SlotBuilder().setPosition({ x: 1400, y: 215 }).build(),
    new SlotBuilder().setPosition({ x: 400, y: 335 }).build(),
    new SlotBuilder().setPosition({ x: 800, y: 335 }).build(),
    new SlotBuilder().setPosition({ x: 1200, y: 335 }).build(),

    new SlotBuilder().setPosition({ x: 250, y: 565 }).build(),
    new SlotBuilder().setPosition({ x: 650, y: 565 }).build(),
    new SlotBuilder().setPosition({ x: 1050, y: 565 }).build(),
    new SlotBuilder().setPosition({ x: 1450, y: 565 }).build(),
    new SlotBuilder().setPosition({ x: 450, y: 685 }).build(),
    new SlotBuilder().setPosition({ x: 850, y: 685 }).build(),
    new SlotBuilder().setPosition({ x: 1250, y: 685 }).build(),
];
