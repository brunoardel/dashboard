import { URL_API } from './base';

export function ConsultarFaturamento(Callback) {
  return fetch(`${URL_API}/faturamento.json`).then((resultado) =>
    resultado.json().then(Callback),
  );
}
