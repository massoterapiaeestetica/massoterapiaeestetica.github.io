document.getElementById('reserva-form').addEventListener('submit', function(e) {
   e.preventDefault();

   const form = e.target;
   const formData = new FormData(form);

   fetch('https://formspree.io/f/{your-form-id}', {
       method: 'POST',
       body: formData,
       headers: {
           'Accept': 'application/json'
       }
   }).then(response => {
       if (response.ok) {
           alert('Reserva enviada com sucesso!');
           form.reset();
       } else {
           alert('Ocorreu um erro ao enviar sua reserva. Tente novamente.');
       }
   }).catch(error => {
       alert('Ocorreu um erro ao enviar sua reserva. Tente novamente.');
   });
});
