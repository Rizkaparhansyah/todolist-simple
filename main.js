let hasil = document.getElementById("hasil");
function add() {
    let input = document.getElementById("input");

    let newTodo =
      "<div class='card shadow bg-info border-info mb-3 m-2'style='max-width: 18rem;'><h5 id='hapus'class='card-title m-4' onclick='toggle(this)' > " +
      input.value +
      "<i class='uil uil-times-circle ms-2' onclick='removeItem()'></i></h5></div";
        if (arguments == null) {
            alert('gagal')
        }
      hasil.insertAdjacentHTML("afterbegin", newTodo);
      input.value = ""
    }
function toggle(el) {
  el.classList.toggle("done");
}

function removeItem() {
  let hapus = document.getElementById("hapus");

  hapus.parentElement.remove();
}
