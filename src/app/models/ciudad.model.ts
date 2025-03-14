import { Pais } from "./pais.model";

export interface Ciudad {
    id: number;
    nombre: string;
    codigo_clima: string;
    pais: Pais;
}