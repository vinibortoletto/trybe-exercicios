const validate = new JustValidate('#form');

validate
  .addField('#fullName', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Campo deve ter no mínimo 10 letras',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Campo deve ter no máximo 40 letras',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido',
    },
  ])
  .addRequiredGroup('#destination', 'Campo obrigatório')
  .addField('#question', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#trip-date', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addField('#agreement', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .onSuccess((event) => {
    alert('Enviado com sucesso!');
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');

    for (const input of inputs) {
      input.value = '';
      input.checked = false;
    }

    textarea.value = '';
  });
