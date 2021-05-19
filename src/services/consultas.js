import { URL_API } from './base';

export function ConsultarConsultas(Callback) {
  return fetch(`${URL_API}/consultas.json`).then((resultado) =>
    resultado.json().then(Callback),
  );
}
