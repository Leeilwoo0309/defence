class Slot {
    public position: Position = { x: 0, y: 0 };

    /** 빌드 시 실행 */
    public build() {
        const newSlot: HTMLDivElement = document.createElement('div');

        newSlot.classList.add('slot');
        newSlot.style.top = `${this.position.y - slotSize / 2}px`;
        newSlot.style.left = `${this.position.x - slotSize / 2}px`;

        slotParentDiv?.appendChild(newSlot);

        setInterval(() => {
            this.update();
        }, 16);

        newSlot.addEventListener('click', () => {
            this.onClick();
        });
    }

    /** 초당 60회 실행할 코드 */
    public update() {}

    /** 클릭시 실행할거 */
    public onClick() {}
}

/** Slot 만드는거 */
class SlotBuilder {
    private slot: Slot;

    constructor() {
        this.slot = new Slot();
    }

    /**
     * Slot의 위치 정함
     * @param position Slot의 위치를 정함
     */
    public setPosition(position: Position): SlotBuilder {
        this.slot.position = position;
        return this;
    }

    /**
     * 설정 완료한 Slot 반환함
     * @returns Slot 클래스
     */
    public build(): Slot {
        this.slot.build();
        return this.slot;
    }
}
