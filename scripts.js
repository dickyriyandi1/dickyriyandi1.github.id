document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Terima kasih sudah memilih produk kami!');
        });
    });
});
