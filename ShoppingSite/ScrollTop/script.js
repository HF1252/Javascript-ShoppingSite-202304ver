const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight);

// ボタン表示 or 非表示
function checkHeight() {
    if (window.scrollY > 40) {
        goTopBtn.style.display = 'flex';
    } else {
        goTopBtn.style.display = 'none';
    }
}

// トップへ自動スクロール
goTopBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});
