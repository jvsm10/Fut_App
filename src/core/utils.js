export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email não pode deixar em branco';
  if (!re.test(email)) return 'Ooops! É necessário um endereço de email valido';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Senha não pode deixar em branco';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Nome não pode deixar em branco';

  return '';
};
