class Fullscreen {
  request(elm) {
    if (elm.requestFullscreen) {
      elm.requestFullscreen();
    } else if (elm.webkitRequestFullscreen) {
      elm.webkitRequestFullscreen();
    } else if (elm.mozRequestFullScreen) {
      elm.mozRequestFullScreen();
    } else if (elm.msRequestFullscreen) {
      elm.msRequestFullscreen();
    }
  }

  exit() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  get isFullscreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  get enabled() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }

  addEventListener(handler, domRef) {
    domRef.addEventListener('fullscreenchange', handler);
    domRef.addEventListener('webkitfullscreenchange', handler);
    domRef.addEventListener('mozfullscreenchange', handler);
    domRef.addEventListener('MSFullscreenChange', handler);
  }

  removeEventListener(handler, domRef) {
    domRef.removeEventListener('fullscreenchange', handler);
    domRef.removeEventListener('webkitfullscreenchange', handler);
    domRef.removeEventListener('mozfullscreenchange', handler);
    domRef.removeEventListener('MSFullscreenChange', handler);
  }
}

export default new Fullscreen();
