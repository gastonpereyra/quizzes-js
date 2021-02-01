# Welcome

## Problema

:info: Dada la siguiente función

```js
const welcome = message => {
	return
	'Hi, ' + message + '!';
};
```
:question: Cual es el resultado de ejecutarlo de esta forma ?

```js
console.log(welcome('Bort'));
```

## Opciones

Una de estas es la respuesta correcta

1. `undefined`
2. `null`
3. `"Hi, Bort!"`
4. `[object Object]`

## Respuesta

La respuesta es la opción `1`, es decir, `undefined`. Esto se debe a que luego del `return` no hay nada, el mensaje en la linea posterior nunca llega a ejecutarse.