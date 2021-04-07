
window.onload = function() {

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Gracias por el mensaje!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Hay un problema con el formulario";
      });
    }
    form.addEventListener("submit", handleSubmit); 
}

const btnChange = document.querySelector("#change");

  btnChange.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.getElementById("switch").classList.toggle('active');
  });