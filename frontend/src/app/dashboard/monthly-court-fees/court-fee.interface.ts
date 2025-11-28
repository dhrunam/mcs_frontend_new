export interface CourtFee {
    type_name: string | null;
    pet_name: string | null;
    res_name: string | null;
    cino: string | null;
    dt_regis: string | null; // YYYY-MM-DD format
    reg_no: number | null;
    reg_year: number | null;
    pet_age: number | null;
    res_age: number | null;
    court_fees: number | null;
    other_fees: number | null;
    document_type: number | null;
    record_date: string | null; // YYYY-MM-DD format
    filing: string | null; // 'Y' or other string values
    type: number | null;
    bank_code: string | null;
    paymode: number | null;
    dd_num: string | null;
    dd_date: string | null; // Can be null
    receipt_no: number | null;
    casenotype: string | null; // Can be null
    receipt_status: string | null;
  }
  

  export function castDataAsCourtFeeModel(data: any): CourtFee {
    return {
      type_name: data.type_name ?? null,
      pet_name: data.pet_name ?? null,
      res_name: data.res_name ?? null,
      cino: data.cino ?? null,
      dt_regis: data.dt_regis ?? null,
      reg_no: data.reg_no ?? null,
      reg_year: data.reg_year ?? null,
      pet_age: data.pet_age ?? null,
      res_age: data.res_age ?? null,
      court_fees: data.court_fees ?? null,
      other_fees: data.other_fees ?? null,
      document_type: data.document_type ?? null,
      record_date: data.record_date ?? null,
      filing: data.filing ?? null,
      type: data.type ?? null,
      bank_code: data.bank_code ?? null,
      paymode: data.paymode ?? null,
      dd_num: data.dd_num ?? null,
      dd_date: data.dd_date ?? null,
      receipt_no: data.receipt_no ?? null,
      casenotype: data.casenotype ?? null,
      receipt_status: data.receipt_status ?? null,
    };
  }

  export const dummyData: CourtFee[]=[
    {
        "type_name": "Succession Case",
        "pet_name": "BEDU MAYA CHETTRI  BASNET",
        "res_name": "GENERAL PUBLIC",
        "cino": "SKNM010001682024",
        "dt_regis": "2024-06-26",
        "reg_no": 24,
        "reg_year": 2024,
        "pet_age": 58,
        "res_age": 0,
        "court_fees": 250.0,
        "other_fees": 0.0,
        "document_type": 0,
        "record_date": "2024-06-18",
        "filing": "Y",
        "type": 1,
        "bank_code": "1              ",
        "paymode": 5,
        "dd_num": "0",
        "dd_date": null,
        "receipt_no": 230,
        "casenotype": null,
        "receipt_status": "T"
    },
    {
        "type_name": "Succession Case",
        "pet_name": "PHIP RANI SUBBA",
        "res_name": "GENERAL PUBLIC",
        "cino": "SKNM010001602024",
        "dt_regis": "2024-06-19",
        "reg_no": 23,
        "reg_year": 2024,
        "pet_age": 48,
        "res_age": 0,
        "court_fees": 200.0,
        "other_fees": 0.0,
        "document_type": 0,
        "record_date": "2024-06-10",
        "filing": "Y",
        "type": 1,
        "bank_code": "0              ",
        "paymode": 5,
        "dd_num": "0",
        "dd_date": null,
        "receipt_no": 228,
        "casenotype": null,
        "receipt_status": "T"
    }

  ]
  