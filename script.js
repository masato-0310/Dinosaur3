// ページロード後に.fade-inクラスを順に表示
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });
});

// script.js の中にこれ入れてね！
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", function (e) {
    e.preventDefault(); // aタグのリンクジャンプをキャンセル
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズスクロール
    });
  });
});

  //右下矢印のスクロール
  const backToTopBtn = document.querySelector(".back-to-top");
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });