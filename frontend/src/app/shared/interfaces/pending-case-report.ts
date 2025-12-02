export interface Case {
    case_type: number;
    type_name: string;
    data: PendingCaseReport[];
}




export interface PendingCaseReport {
    case_type: number;
    type_name: string;
    pet_name: string;
    res_name: string;
    // goshwara_no: number;
    reg_year: number;
    // disp_nature: number;
    // disp_name: number | string;
    // date_of_decision: string;
    // transfer_est: string;
    cino:string,
    ext_respondents:any[]| null,
    dt_regis:string|null,
    reg_no:number,
    relief_offense:string|null,
    act_section:any[] | null,
    purpose_name:string|null
    
}

export function castAsMonthlyCasesReportViewModel(data: any): PendingCaseReport {
    return {
        case_type: data.case_type ?? 0,  // Default to 0 if missing
        type_name: data.type_name ?? '',  // Default to empty string if missing
        pet_name: data.pet_name ?? '',  // Default to empty string if missing
        res_name: data.res_name ?? '',  // Default to empty string if missing
        // goshwara_no: data.goshwara_no ?? 0,  // Default to 0 if missing
        reg_year: data.reg_year ?? 0,  // Default to 0 if missing
        // disp_nature: data.disp_nature ?? 0,  // Default to 0 if missing
        // disp_name: data.disp_name ?? '',  // Default to empty string if missing
        // date_of_decision: data.date_of_decision ?? '',  // Default to empty string if missing
        // transfer_est: data.transfer_est ?? '',  // Default to empty string if missing,
        cino:data.cino??'',
        ext_respondents:data.ext_respondents?? [],
        dt_regis:data.dt_regis??'',
        reg_no:data.reg_no,
        relief_offense:data.relief_offense??'',
        act_section:data.act_section,
        purpose_name:data.purpose_name??''

        
    };
}



