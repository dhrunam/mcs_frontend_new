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
    report_year: number;
    reg_year: number;
    report_month: number;
    disp_nature:number;
    disposed_transfered: number | string;
    disp_name: number;
    date_of_decision: Number | string;
    transfer_est : string;
}

export function castAsDisposedCasesReportViewModel(data: any): DisposedCasesReport {
  console.log("Data passed..:", data);
  return {
        case_type: data.case_type ?? "",  // Default to 0 if missing
        type_name: data.related_casetype.desc_case ?? '',  // Default to empty string if missing
        pet_name: data.petitioner ?? '',  // Default to empty string if missing
        res_name: data.responder ?? '',  // Default to empty string if missing
        goshwara_no: data.goshwara_no ?? 0,  // Default to 0 if missing
        report_year: data.report_year ?? 0,  // Default to 0 if missing
        reg_year: data.report_year?? 0,
        report_month: data.report_month ?? 0,  // Default to 0 if missing
        disposed_transfered: data.disposed_transfered ?? '',  // Default to empty string if missing
        disp_nature: data.disposed_transfered ?? 0,
        disp_name:0,
        date_of_decision: data.disposed_transfered ?? '',
        transfer_est : data.transfer_est ?? '',

    };
  // return {
  //       case_type:  0,  // Default to 0 if missing
  //       type_name:  '',  // Default to empty string if missing
  //       pet_name:  '',  // Default to empty string if missing
  //       res_name:  '',  // Default to empty string if missing
  //       goshwara_no:  0,  // Default to 0 if missing
  //       report_year:  0,  // Default to 0 if missing
  //       reg_year: 0,
  //       report_month:  0,  // Default to 0 if missing
  //       disposed_transfered: '',  // Default to empty string if missing
  //       disp_nature:  0,
  //       disp_name:0,
  //       date_of_decision: '',
  //       transfer_est : '',

  //   };
}





export const dummydata: Case[]=[
        {
            "case_type": 5,
            "type_name": "S.T. (SADA) Case",
            "data": [

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
                    "transfer_est": "2024-10-30",
                    "report_year": 2024,
                    "report_month": 10,
                    "disposed_transfered": 1

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
                    "transfer_est": "2024-10-30",
                    "report_year": 2024,
                    "report_month": 10,
                    "disposed_transfered": 1

                }
            ]
        }
]
