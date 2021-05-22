const click = (cls) => {
    const buttons = document.getElementsByClassName(cls);
    for (const button of buttons) {
      button.click();
      console.log("skip button clicked");
    }
  }
  
  setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
  }, 300);
