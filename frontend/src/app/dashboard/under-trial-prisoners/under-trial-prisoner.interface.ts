export interface UnderTrialPrisoner {
    type_name: string;
    case_type: number;
    pet_name: string;
    res_name: string;
    cino: string;
    dt_regis: string;
    reg_no: number;
    reg_year: number;
    pet_age: number;
    res_age: number;
    arrest_date: string | null;
}


export function castAsUnderTrialPrisoner(data: any): UnderTrialPrisoner {
    return {
        type_name: data.type_name ?? '',
        case_type: data.case_type ?? 0,
        pet_name: data.pet_name ?? '',
        res_name: data.res_name ?? '',
        cino: data.cino ?? '',
        dt_regis: data.dt_regis ?? '',
        reg_no: data.reg_no ?? 0,
        reg_year: data.reg_year ?? 0,
        pet_age: data.pet_age ?? 0,
        res_age: data.res_age ?? 0,
        arrest_date: data.arrest_date ?? null
    };
}



