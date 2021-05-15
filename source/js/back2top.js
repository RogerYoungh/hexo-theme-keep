KEEP.initBack2Top = () => {

  KEEP.utils = {

    ...KEEP.utils,

    back2BottomButton_dom: document.querySelector('.tool-scroll-to-bottom'),

    back2top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    back2Bottom() {
      let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth"
      });
    },

    initBack2Top() {
      this.back2TopButton_dom.addEventListener('click', () => {
        this.back2top();
      });
    },

    initBack2Bottom() {
      this.back2BottomButton_dom.addEventListener('click', () => {
        this.back2Bottom();
      });
    },
  }

  KEEP.utils.initBack2Top();
  KEEP.utils.initBack2Bottom();

}
