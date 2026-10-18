javascript
document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("bookingForm");
    const message = document.getElementById("message");

    if (form && message) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const name = document.getElementById("hoten").value;

            message.textContent =
                "Cảm ơn " + name +
                "! Thông tin đăng ký mẫu đã được ghi nhận trên trang.";

            form.reset();
        });
    }

    document.querySelectorAll(".gallery img").forEach(function (img) {
        img.addEventListener("click", function () {
            const popup = window.open("", "_blank");

            if (popup) {
                popup.document.write(
                    '<img src="' + img.src +
                    '" style="max-width:100%;height:auto;">'
                );
            }
        });
    });

});
