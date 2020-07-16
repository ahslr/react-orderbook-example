let animationRemoved = false;
const FADE_OUT_DURATION = 165;

const getLoadingElement = () => {
  return document.querySelector('.app-booting');
};

const removeLoadingAnimation = () => {
  if (!animationRemoved && getLoadingElement()) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (getLoadingElement()) {
        document.body.classList.remove('initial-boot');
        getLoadingElement().classList.add('fade-out');
      }
      setTimeout(() => {
        if (getLoadingElement()) {
          getLoadingElement().remove();
          animationRemoved = true;
        }
      }, FADE_OUT_DURATION);
    }));
  }
};

export default removeLoadingAnimation;
