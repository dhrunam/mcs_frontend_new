export interface Case {
    case_type: number;
    type_name: string;
    data: DisposedCasesReport[];
}


export interface DisposedCasesReport {
    case_type: number;
    type_name: string;
    pet_name: string;
    res_name: string;
    goshwara_no: number;
    reg_year: number;
    disp_nature: number;
    disp_name: number | string;
    date_of_decision: string;
    transfer_est: string;
}

export function castAsDisposedCasesReportViewModel(data: any): DisposedCasesReport {
    return {
        case_type: data.case_type ?? 0,  // Default to 0 if missing
        type_name: data.type_name ?? '',  // Default to empty string if missing
        pet_name: data.pet_name ?? '',  // Default to empty string if missing
        res_name: data.res_name ?? '',  // Default to empty string if missing
        goshwara_no: data.goshwara_no ?? 0,  // Default to 0 if missing
        reg_year: data.reg_year ?? 0,  // Default to 0 if missing
        disp_nature: data.disp_nature ?? 0,  // Default to 0 if missing
        disp_name: data.disp_name ?? '',  // Default to empty string if missing
        date_of_decision: data.date_of_decision ?? '',  // Default to empty string if missing
        transfer_est: data.transfer_est ?? ''  // Default to empty string if missing
    };
}



export const dummydata: Case[]=[
        {
            "case_type": 5,
            "type_name": "S.T. (SADA) Case",
            "data": [
                {
                    "case_type": 5,
                    "type_name": "S.T. (SADA) Case",
                    "pet_name": "State",
                    "res_name": "Bimal Gurung",
                    "goshwara_no": 2,
                    "reg_year": 2021,
                    "disp_nature": 1,
                    "disp_name": 49,
                    "date_of_decision": "ACQUITTED",
                    "transfer_est": "2024-10-30"
                },
                {
                    "case_type": 5,
                    "type_name": "S.T. (SADA) Case",    
                    "pet_name": "State",
                    "res_name": "Jyoti Rai",
                    "goshwara_no": 10,
                    "reg_year": 2021,
                    "disp_nature": 1,
                    "disp_name": 49,
                    "date_of_decision": "ACQUITTED",
                    "transfer_est": "2024-10-30"
                },
                {
                    "case_type": 5,
                    "type_name": "S.T. (SADA) Case",
                    "pet_name": "State",
                    "res_name": "Suren Rai",
                    "goshwara_no": 21,
                    "reg_year": 2021,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-30"
                }
            ]
        },
        {
            "case_type": 6,
            "type_name": "S.T. (ndps) Case",
            "data": [
                {
                    "case_type": 6,
                    "type_name": "S.T. (ndps) Case",
                    "pet_name": "State",
                    "res_name": "Suren Rai",
                    "goshwara_no": 9,
                    "reg_year": 2021,
                    "disp_nature": 1,
                    "disp_name": 49,
                    "date_of_decision": "ACQUITTED",
                    "transfer_est": "2024-10-30"
                },
                {
                    "case_type": 6,
                    "type_name": "S.T. (ndps) Case",
                    "pet_name": "State",
                    "res_name": "Jyoti Rai",
                    "goshwara_no": 4,
                    "reg_year": 2021,
                    "disp_nature": 1,
                    "disp_name": 49,
                    "date_of_decision": "ACQUITTED",
                    "transfer_est": "2024-10-30"
                }
            ]
        },
        {
            "case_type": 12,
            "type_name": "Crl. Appeal Case",
            "data": [
                {
                    "case_type": 12,
                    "type_name": "Crl. Appeal Case",
                    "pet_name": "DIPEN CHETTRI",
                    "res_name": "STATE",
                    "goshwara_no": 5,
                    "reg_year": 2023,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-30"
                }
            ]
        },
        {
            "case_type": 14,
            "type_name": "Crl. Misc. Case",
            "data": [
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Biman Rai",
                    "res_name": "State",
                    "goshwara_no": 56,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-28"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "LAXUMAN RAI",
                    "res_name": "STATE OF SIKKIM",
                    "goshwara_no": 51,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-01"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Osiur Rahaman Khan",
                    "res_name": "State",
                    "goshwara_no": 9,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-01"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "KHARKA PRASAD PRADHAN",
                    "res_name": "STATE",
                    "goshwara_no": 50,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-21"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Tika Lall Karki",
                    "res_name": "State",
                    "goshwara_no": 77,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-22"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Suraj Chhetri",
                    "res_name": "State",
                    "goshwara_no": 82,
                    "reg_year": 2024,
                    "disp_nature": 2,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-22"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Nelson Gurung",
                    "res_name": "State",
                    "goshwara_no": 84,
                    "reg_year": 2024,
                    "disp_nature": 2,
                    "disp_name": 10,
                    "date_of_decision": "WITHDRAWN",
                    "transfer_est": "2024-10-22"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Karma",
                    "res_name": "State",
                    "goshwara_no": 79,
                    "reg_year": 2024,
                    "disp_nature": 2,
                    "disp_name": 10,
                    "date_of_decision": "WITHDRAWN",
                    "transfer_est": "2024-10-23"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "dolmu",
                    "res_name": "State",
                    "goshwara_no": 80,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-22"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Dolmu Tamang",
                    "res_name": "State",
                    "goshwara_no": 81,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-22"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "NIKHIL PRADHAN",
                    "res_name": "STATE",
                    "goshwara_no": 29,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-28"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "DAVID RAI",
                    "res_name": "State",
                    "goshwara_no": 76,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-28"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "CHETRAJ AGARWAL",
                    "res_name": "STATE",
                    "goshwara_no": 40,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-21"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "BHA BISHAL TAMANG",
                    "res_name": "STATE",
                    "goshwara_no": 47,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-23"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "HEMANT SHARMA",
                    "res_name": "STATE",
                    "goshwara_no": 28,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-28"
                },
                {
                    "case_type": 14,
                    "type_name": "Crl. Misc. Case",
                    "pet_name": "Saroj Thapa",
                    "res_name": "State",
                    "goshwara_no": 61,
                    "reg_year": 2024,
                    "disp_nature": 1,
                    "disp_name": 31,
                    "date_of_decision": "ALLOWED",
                    "transfer_est": "2024-10-30"
                }
            ]
        }
]