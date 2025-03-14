import { Ciudad } from "./ciudad.model";

export interface Historial {
    id?: number;
    presupuesto_original: number;
    presupuesto_convertido: number;
    tasa_cambio: string;
    clima: string;
    temperatura: string;
    ciudad_id: number;
    created_at?: string;
    updated_at?: string;
    ciudad?: Ciudad;
}