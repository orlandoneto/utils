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

