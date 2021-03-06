// Bloco de código que válida se uma senha é forte de 8 caracteres
// Pode ser reaproveitado a validação via lib yup como o regex de senha forte. 
password: Yup.string()
.required('Campo obrigatório')
.matches(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  'Deve conter 8 caracteres, uma maiúscula, uma minúscula, um número e um caractere especial.'
),

  // Arredodamento preciso de casas decimais
  Math.floor(7682.145908110258 * 100) / 100; //saída: 7682.14. OBS: toFixed arredonda para mais.

// Função de capitalize
capitalize: str => {
  if (str === undefined) return '';
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
},
  
// Função que remove qualquer símbolo e caractere da string
maskRemove: value => {
return value.length === 11
  ? value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  : value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
},
};

// Função que checa se o objeto é vazio ou se todos os atribusto são vazio.
  isObjectEmpty: object => {
    if (JSON.stringify(object) === '{}') {
      return false;
    }

    for (const key in object) {
      if (object[key] !== null && object[key] != '') return false;
    }
    return true;
  },
