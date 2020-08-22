class RoomInfo {
    constructor(outerContainerElement, currentPhotoIndex = 0) {
        this.outerContainerElement = outerContainerElement;
        this.currentPhotoIndex = currentPhotoIndex;

        this._handleLeftArrowClick = this._handleLeftArrowClick.bind(this);
        this._handleRightArrowClick = this._handleRightArrowClick.bind(this);

        this._initialize();
    }

    _initialize() {
        this.containerElement = this.outerContainerElement.querySelector('.js-room-info');
        this.arrows = this.containerElement.querySelector('.js-room-info__arrows');
        if (this.arrows) {
            this.leftArrow = this.arrows.querySelector('.js-room-info__arrow-back');
            this.rightArrow = this.arrows.querySelector('.js-room-info__arrow-forward');
        }

        this.radioButtons = Array.from(this.containerElement.querySelectorAll('.js-room-info__radio-button'));
        this.photos = Array.from(this.containerElement.querySelectorAll('.js-room-info__photo'));

        if (this.leftArrow && this.rightArrow) {
            this.leftArrow.addEventListener('click', this._handleLeftArrowClick);
            this.rightArrow.addEventListener('click', this._handleRightArrowClick);
        }

        this._update();
    }

    _move(isDirectionForward) {
        if (isDirectionForward) {
            if (this.currentPhotoIndex === this.radioButtons.length - 1) return;
            this.currentPhotoIndex += 1;
        } else {
            if (this.currentPhotoIndex === 0) return;
            this.currentPhotoIndex -= 1;
        }
    }

    _update() {
        this.radioButtons.forEach((button, index) => {
            if (index === this.currentPhotoIndex) button.classList.toggle('room-info__radio-button_checked', true);
            else button.classList.toggle('room-info__radio-button_checked', false);
        });
        this.photos.forEach((photo, index) => {
            if (index === this.currentPhotoIndex) photo.classList.toggle('room-info__photo_current', true);
            else photo.classList.toggle('room-info__photo_current', false);
        });
    }

    _handleLeftArrowClick() {
        this._move(false);
        this._update();
    }

    _handleRightArrowClick() {
        this._move(true);
        this._update();
    }
}

export default RoomInfo;
