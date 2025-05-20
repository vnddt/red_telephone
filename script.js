var typed = new Typed(".multiple-text", {strings: ["Nice to meet u....."], typeSpeed: 60,backSpeed: 30, backDelay: 600, loop: true});




  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwT4Ef5XzxGtJW7ze3RUpA0qMLcB7v_nSS6Ics5GROYFsBAslPPs_mYxZivJecwBtc/exec'
  const form = document.forms['submit-to-google-sheet']
  const tb = document.getElementById('tb')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[name="submit-to-google-sheet"]');
    const inputBox = document.getElementById("Noidungtinnhan");
    const toast = document.getElementById("toast");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn reload trang khi submit

        if (inputBox.value.trim() !== "") {
            // Hiển thị thông báo
            showToast("Got your message!");

            // Xóa nội dung ô input
            inputBox.value = "";
        } else {
            showToast("Oops, write something!");
        }
    });

    function showToast(message) {
        toast.textContent = message; 
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); // Ẩn sau 3 giây
    }
});

