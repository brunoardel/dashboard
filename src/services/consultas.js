import {URL_API} from './base'

export function ConsultarConsultas(Callback){
    return fetch(`${URL_API}/consultas`)
    .then(resultado => resultado.json().then(Callback));
}