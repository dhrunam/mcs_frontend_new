// ex-parte-injunction-case.interface.ts

export interface ExParteInjunctionCase{
    type_name: string;
    case_type: number;
    pet_name: string;
    res_name: string;
    cino: string;
    dt_regis: string;
    reg_no: number;
    reg_year: number;
    // Assuming a key field to indicate the date the ex-parte injunction was granted
    injunction_granted_date: string | null; 
    purpose_name:string | null
}

export function castAsExParteInjunctionCase(data: any): ExParteInjunctionCase {
    return {
        type_name: data.type_name ?? '',
        case_type: data.case_type ?? 0,
        pet_name: data.pet_name ?? '',
        res_name: data.res_name ?? '',
        cino: data.cino ?? '',
        dt_regis: data.dt_regis ?? '',
        reg_no: data.reg_no ?? 0,
        reg_year: data.reg_year ?? 0,
        injunction_granted_date: data.injunction_granted_date ?? null,
        purpose_name: data.purpose_name ?? ''
    };
}