export interface Case {
    case_type: number;
    type_name: string;
    data: VulnerableGroupPendingCase[];
}




export interface VulnerableGroupPendingCase {
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
    cino: string,
    ext_respondents: any[] | null,
    dt_regis: string | null,
    reg_no: number,
    relief_offense: string | null,
    act_section: any[] | null,

}
export function castAsVulnerableGroupPendingCase(data: any): VulnerableGroupPendingCase {
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
        cino: data.cino ?? '',
        ext_respondents: data.ext_respondents ?? [],
        dt_regis: data.dt_regis ?? '',
        reg_no: data.reg_no,
        relief_offense: data.relief_offense ?? '',
        act_section: data.act_section,

    };
}


export const dummyData: Case[] = [
    {
        "case_type": 5,
        "type_name": "S.T. (SADA) Case",
        "data": [
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sandeep Tamang",
                "cino": "SKNM010000632023",
                "ext_respondents": null,
                "dt_regis": "2023-02-28",
                "reg_no": 6,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Prava Rai",
                "cino": "SKNM010001422024",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Bishal Gurung"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Sishir Rai"
                    }
                ],
                "dt_regis": "2024-05-28",
                "reg_no": 6,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Suren Rai",
                "cino": "SKNM010003082021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Pemba Tamang"
                    }
                ],
                "dt_regis": "2021-07-31",
                "reg_no": 21,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Pankaj Agarwal",
                "cino": "SKNM010001962023",
                "ext_respondents": null,
                "dt_regis": "2023-05-29",
                "reg_no": 12,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(c),10 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Swadhin Rai",
                "cino": "SKNM010004352023",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Rashdeep Rai"
                    }
                ],
                "dt_regis": "2023-11-01",
                "reg_no": 24,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b),9(1)(d) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Dinesh Chettri",
                "cino": "SKNM010002942023",
                "ext_respondents": null,
                "dt_regis": "2023-08-04",
                "reg_no": 20,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/9/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bir Bahadur Bhujel",
                "cino": "SKNM010002782021",
                "ext_respondents": null,
                "dt_regis": "2021-07-20",
                "reg_no": 18,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b),  9(d) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Hari Kumar Pradhan",
                "cino": "SKNM010002432022",
                "ext_respondents": null,
                "dt_regis": "2022-04-21",
                "reg_no": 5,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ram Kumar Subba",
                "cino": "SKNM010000692023",
                "ext_respondents": null,
                "dt_regis": "2023-03-01",
                "reg_no": 7,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ram Chettri",
                "cino": "SKNM010002602023",
                "ext_respondents": null,
                "dt_regis": "2023-07-12",
                "reg_no": 18,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 9(1)(b)/9(4)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Nazir Alam",
                "cino": "SKNM010002562022",
                "ext_respondents": null,
                "dt_regis": "2022-04-22",
                "reg_no": 6,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sandeep Sewa",
                "cino": "SKNM010003252021",
                "ext_respondents": null,
                "dt_regis": "2021-08-09",
                "reg_no": 22,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Tshering Wangdi Bhutia",
                "cino": "SKNM010003032021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Prakash Tamang"
                    }
                ],
                "dt_regis": "2021-07-29",
                "reg_no": 20,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 34 INDIAN PENAL CODE"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 17/14,9(d),9(1)(a) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Abhinoy Basnett",
                "cino": "SKNM010002572023",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Prajal Chettri"
                    }
                ],
                "dt_regis": "2023-07-11",
                "reg_no": 17,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) , 9(1)(a) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Pranish Tamang",
                "cino": "SKNM010005722022",
                "ext_respondents": null,
                "dt_regis": "2022-11-14",
                "reg_no": 18,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(d),9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Kumar Sarki",
                "cino": "SKNM010004802022",
                "ext_respondents": null,
                "dt_regis": "2022-08-23",
                "reg_no": 14,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d) , 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Renu Sarki",
                "cino": "SKNM010001632024",
                "ext_respondents": null,
                "dt_regis": "2024-06-19",
                "reg_no": 8,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9,1,a,14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sandeep Tamang",
                "cino": "SKNM010000292021",
                "ext_respondents": null,
                "dt_regis": "2021-02-10",
                "reg_no": 4,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Chandan Tamang",
                "cino": "SKNM010001752023",
                "ext_respondents": null,
                "dt_regis": "2023-05-12",
                "reg_no": 10,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Jyoti Rai",
                "cino": "SKNM010001942021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Juleeyan Rai"
                    }
                ],
                "dt_regis": "2021-06-26",
                "reg_no": 10,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Saroj Gurung",
                "cino": "SKNM010003942023",
                "ext_respondents": null,
                "dt_regis": "2023-09-28",
                "reg_no": 22,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Rabin Rai",
                "cino": "SKNM010003182022",
                "ext_respondents": null,
                "dt_regis": "2022-05-11",
                "reg_no": 7,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Rajendra Karki @ Rajendra Chettri",
                "cino": "SKNM010001812024",
                "ext_respondents": null,
                "dt_regis": "2024-07-05",
                "reg_no": 9,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 7/9/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ganesh Chettri",
                "cino": "SKNM010003502022",
                "ext_respondents": null,
                "dt_regis": "2022-06-03",
                "reg_no": 9,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Diwas Kami @ Rohit Gajmer",
                "cino": "SKNM010005302022",
                "ext_respondents": null,
                "dt_regis": "2022-09-28",
                "reg_no": 15,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14 , 9 (1) (b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Suraj Basnett @ Lal and others",
                "cino": "SKNM010002622021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Himalaya  @ Dipen Chettri"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Sishir Tamang"
                    }
                ],
                "dt_regis": "2021-07-15",
                "reg_no": 17,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Suman Tamang",
                "cino": "SKNM010003872023",
                "ext_respondents": null,
                "dt_regis": "2023-09-26",
                "reg_no": 21,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Solbin Rai",
                "cino": "SKNM010001812022",
                "ext_respondents": null,
                "dt_regis": "2022-03-29",
                "reg_no": 3,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/9/14  Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Mahesh Tamang",
                "cino": "SKNM010002222023",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Bishal Kumal"
                    }
                ],
                "dt_regis": "2023-06-15",
                "reg_no": 14,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) & 10 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Tarik Ansari",
                "cino": "SKNM010004872023",
                "ext_respondents": null,
                "dt_regis": "2023-12-06",
                "reg_no": 26,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(c),17/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Suraj Rai",
                "cino": "SKNM010000432023",
                "ext_respondents": null,
                "dt_regis": "2023-02-14",
                "reg_no": 5,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14 Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 9(d),9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Pukar Kalikotay",
                "cino": "SKNM010001432023",
                "ext_respondents": null,
                "dt_regis": "2023-04-20",
                "reg_no": 9,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/9/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Amber Manger",
                "cino": "SKNM010005682021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Bikky Rai"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Bikky Rawat"
                    },
                    {
                        "sl_no": 3,
                        "respondent": "Doyen Rai"
                    },
                    {
                        "sl_no": 4,
                        "respondent": "Jeereld Rai"
                    }
                ],
                "dt_regis": "2021-11-18",
                "reg_no": 26,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Chetraj Agarwal",
                "cino": "SKNM010001472024",
                "ext_respondents": null,
                "dt_regis": "2024-06-03",
                "reg_no": 7,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section  Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 7(a), 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Santa Prasad Khati @ Ajay Khati",
                "cino": "SKNM010003392022",
                "ext_respondents": null,
                "dt_regis": "2022-05-25",
                "reg_no": 8,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Santosh Rai",
                "cino": "SKNM010001302023",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Lalit Kumar Prasad@Lalit Gupta."
                    }
                ],
                "dt_regis": "2023-04-10",
                "reg_no": 8,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sumit Chettri",
                "cino": "SKNM010000312023",
                "ext_respondents": null,
                "dt_regis": "2023-02-07",
                "reg_no": 2,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Roshan Chettri",
                "cino": "SKNM010000642022",
                "ext_respondents": null,
                "dt_regis": "2022-02-23",
                "reg_no": 2,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Dipen Gadaily",
                "cino": "SKNM010000812021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Phurmit Lepcha"
                    }
                ],
                "dt_regis": "2021-03-05",
                "reg_no": 7,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Hemant Sharma",
                "cino": "SKNM010000622024",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Nikhil Pradhan"
                    }
                ],
                "dt_regis": "2024-03-14",
                "reg_no": 4,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sapana Tamang",
                "cino": "SKNM010002932021",
                "ext_respondents": null,
                "dt_regis": "2021-07-26",
                "reg_no": 19,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Chandan Tamang",
                "cino": "SKNM010002002024",
                "ext_respondents": null,
                "dt_regis": "2024-07-30",
                "reg_no": 10,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9 (1) (c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Gautam Rai",
                "cino": "SKNM010000022024",
                "ext_respondents": null,
                "dt_regis": "2024-02-01",
                "reg_no": 1,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Aita Raj Subba",
                "cino": "SKNM010002092023",
                "ext_respondents": null,
                "dt_regis": "2023-06-06",
                "reg_no": 13,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Tek Bahadur Chettri @ Arjun Chettri",
                "cino": "SKNM010001042024",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Rashmi Rai @ Kanchi"
                    }
                ],
                "dt_regis": "2024-04-23",
                "reg_no": 5,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(a) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Shivijan Subba and Ors.",
                "cino": "SKNM010002382021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Dhan Bahadur Pradhan"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Dilli Ram Lohar"
                    },
                    {
                        "sl_no": 3,
                        "respondent": "Kalpana Limboo"
                    },
                    {
                        "sl_no": 4,
                        "respondent": "Pratik Biswakarma"
                    }
                ],
                "dt_regis": "2021-07-03",
                "reg_no": 12,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(c) r/w 34 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Yuraj Darjee",
                "cino": "SKNM010004562023",
                "ext_respondents": null,
                "dt_regis": "2023-11-16",
                "reg_no": 25,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b)  Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Krishna Psd Gupta",
                "cino": "SKNM010005982022",
                "ext_respondents": null,
                "dt_regis": "2022-11-28",
                "reg_no": 19,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/9/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Dil Kr. Rai",
                "cino": "SKNM010005172021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Benjamin Lepcha"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Dupchen Lepcha"
                    }
                ],
                "dt_regis": "2021-10-20",
                "reg_no": 25,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 34 of IPC, r/w 7(a)(b),9,14 SADA 2006 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Man Kumar Tamang",
                "cino": "SKNM010000062024",
                "ext_respondents": null,
                "dt_regis": "2024-02-03",
                "reg_no": 2,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d),9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ajit Baithak",
                "cino": "SKNM010004892023",
                "ext_respondents": null,
                "dt_regis": "2023-12-07",
                "reg_no": 27,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bimal Pradhan",
                "cino": "SKNM010002442021",
                "ext_respondents": null,
                "dt_regis": "2021-07-07",
                "reg_no": 14,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(d),9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Rohit Tamang and others",
                "cino": "SKNM010001922021",
                "ext_respondents": null,
                "dt_regis": "2021-07-06",
                "reg_no": 13,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bimal Gurung",
                "cino": "SKNM010000252021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Dharmean Rai"
                    }
                ],
                "dt_regis": "2021-02-09",
                "reg_no": 2,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bishwajeet Jung Gurung",
                "cino": "SKNM010003672022",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Abhisek Gurung"
                    }
                ],
                "dt_regis": "2022-06-16",
                "reg_no": 10,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Yashuda Rai",
                "cino": "SKNM010000102022",
                "ext_respondents": null,
                "dt_regis": "2022-02-03",
                "reg_no": 1,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Aita Singh Chettri",
                "cino": "SKNM010000652023",
                "ext_respondents": null,
                "dt_regis": "2023-05-17",
                "reg_no": 11,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(d), 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Birkha Bahadur Tamang",
                "cino": "SKNM010001902021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Akhil Raj Shreshtha"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Mandeep Rai"
                    },
                    {
                        "sl_no": 3,
                        "respondent": "Padam Bahadur Sanyasi"
                    },
                    {
                        "sl_no": 4,
                        "respondent": "Ram Bahaudr Rai"
                    },
                    {
                        "sl_no": 5,
                        "respondent": "Sanjay Subba"
                    }
                ],
                "dt_regis": "2021-07-08",
                "reg_no": 16,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Pravin Pradhan",
                "cino": "SKNM010001382021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Pravin pradhan"
                    }
                ],
                "dt_regis": "2021-04-09",
                "reg_no": 9,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Mingma Topgey Sherpa alias Mingma",
                "cino": "SKNM010002352022",
                "ext_respondents": null,
                "dt_regis": "2022-04-19",
                "reg_no": 4,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sanshad Rai",
                "cino": "SKNM010000232023",
                "ext_respondents": null,
                "dt_regis": "2023-02-07",
                "reg_no": 1,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(c) Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Takendra Rai @ Chaptey",
                "cino": "SKNM010002822023",
                "ext_respondents": null,
                "dt_regis": "2023-07-27",
                "reg_no": 19,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ranjit Sharma",
                "cino": "SKNM010000452023",
                "ext_respondents": null,
                "dt_regis": "2023-02-14",
                "reg_no": 4,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Yogesh Sundas (Damai)",
                "cino": "SKNM010005392022",
                "ext_respondents": null,
                "dt_regis": "2022-10-11",
                "reg_no": 17,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(d), 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Gautam Rai",
                "cino": "SKNM010002352023",
                "ext_respondents": null,
                "dt_regis": "2023-06-26",
                "reg_no": 16,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bisan Tamang",
                "cino": "SKNM010004902021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Sanchaman Rai alias Sandeep"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Shabir Ansari"
                    }
                ],
                "dt_regis": "2021-10-07",
                "reg_no": 24,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Milan Darjee",
                "cino": "SKNM010004102022",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Preety Darjee"
                    }
                ],
                "dt_regis": "2022-07-20",
                "reg_no": 11,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Ganesh Kumar Gurung",
                "cino": "SKNM010000352023",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Havil Rai"
                    }
                ],
                "dt_regis": "2023-02-10",
                "reg_no": 3,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b), 9(4)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bhim Gupta",
                "cino": "SKNM010002342024",
                "ext_respondents": null,
                "dt_regis": "2024-08-21",
                "reg_no": 11,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Sudhir Gupta",
                "cino": "SKNM010004452022",
                "ext_respondents": null,
                "dt_regis": "2022-08-04",
                "reg_no": 12,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14,9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Manoj Tamang",
                "cino": "SKNM010003982023",
                "ext_respondents": null,
                "dt_regis": "2023-10-04",
                "reg_no": 23,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 7/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Nima Dorjee Tamang alias Bishal",
                "cino": "SKNM010004492022",
                "ext_respondents": null,
                "dt_regis": "2022-08-05",
                "reg_no": 13,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 17/14, 9(1)(c) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Chandan Rawat",
                "cino": "SKNM010002312023",
                "ext_respondents": null,
                "dt_regis": "2023-06-22",
                "reg_no": 15,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    }
                ]
            },
            {
                "case_type": 5,
                "type_name": "S.T. (SADA) Case",
                "pet_name": "State",
                "res_name": "Bishal Tamang @ Bishan",
                "cino": "SKNM010000082024",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Biman Rai"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Sadip Rai @ Sancha Man Rai"
                    }
                ],
                "dt_regis": "2024-02-03",
                "reg_no": 3,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 9(1)(b) Sikkim Anti Drugs Act 2006"
                    },
                    {
                        "sl_no": 2,
                        "act_section": "Section 17/14 Sikkim Anti Drugs Act 2006"
                    }
                ]
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
                "res_name": "Dron Rai",
                "cino": "SKNM010003342023",
                "ext_respondents": null,
                "dt_regis": "2023-08-24",
                "reg_no": 6,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(B) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Bha Bishal Tamang",
                "cino": "SKNM010000132024",
                "ext_respondents": null,
                "dt_regis": "2024-02-13",
                "reg_no": 1,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Javed Ansari",
                "cino": "SKNM010005522021",
                "ext_respondents": null,
                "dt_regis": "2021-11-09",
                "reg_no": 15,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Nabin Majhi",
                "cino": "SKNM010003162022",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Nicholas Mukhia"
                    }
                ],
                "dt_regis": "2022-05-10",
                "reg_no": 3,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b),20(b)(ii)(A) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Sandeep Tamang",
                "cino": "SKNM010002382024",
                "ext_respondents": null,
                "dt_regis": "2024-08-27",
                "reg_no": 5,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Tara Man Newar @ Bikash",
                "cino": "SKNM010002082024",
                "ext_respondents": null,
                "dt_regis": "2024-08-02",
                "reg_no": 4,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Sapana Tamang",
                "cino": "SKNM010002942021",
                "ext_respondents": null,
                "dt_regis": "2021-07-26",
                "reg_no": 8,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Prem Kumar Rai @ Pujan",
                "cino": "SKNM010005192022",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Diwas Pradhan"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Sunny Kumar Rawat"
                    }
                ],
                "dt_regis": "2022-09-22",
                "reg_no": 10,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Devi Psd Katwal",
                "cino": "SKNM010002952022",
                "ext_respondents": null,
                "dt_regis": "2022-04-28",
                "reg_no": 1,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Gopal Sharma",
                "cino": "SKNM010004462023",
                "ext_respondents": null,
                "dt_regis": "2023-11-08",
                "reg_no": 8,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Kumar Sarki",
                "cino": "SKNM010004782022",
                "ext_respondents": null,
                "dt_regis": "2022-08-23",
                "reg_no": 7,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Suraj Basnett and others",
                "cino": "SKNM010002602021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Himalaya @ Dipen Chettri"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Sishir Tamang"
                    }
                ],
                "dt_regis": "2021-07-15",
                "reg_no": 7,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Abishek Tamang",
                "cino": "SKNM010004022023",
                "ext_respondents": null,
                "dt_regis": "2023-10-06",
                "reg_no": 7,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Jyoti Rai",
                "cino": "SKNM010001982021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Juleeyan Rai"
                    }
                ],
                "dt_regis": "2021-06-26",
                "reg_no": 4,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Ramesh Chettri",
                "cino": "SKNM010004722021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Jiten Rai"
                    },
                    {
                        "sl_no": 2,
                        "respondent": "Manoj Tamang"
                    },
                    {
                        "sl_no": 3,
                        "respondent": "Ningma Sherpa@ Nigma"
                    }
                ],
                "dt_regis": "2021-09-28",
                "reg_no": 12,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Renu Sarki",
                "cino": "SKNM010001242024",
                "ext_respondents": null,
                "dt_regis": "2024-05-15",
                "reg_no": 3,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Dawa Tshering Sherpa",
                "cino": "SKNM010001872023",
                "ext_respondents": null,
                "dt_regis": "2023-05-23",
                "reg_no": 2,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 21/22/27 Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Amit Rai",
                "cino": "SKNM010001282021",
                "ext_respondents": null,
                "dt_regis": "2021-04-03",
                "reg_no": 3,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Nima Tshering Sherpa",
                "cino": "SKNM010004762022",
                "ext_respondents": null,
                "dt_regis": "2022-08-23",
                "reg_no": 8,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 21(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Dirgan Chettri",
                "cino": "SKNM010004512022",
                "ext_respondents": null,
                "dt_regis": "2022-08-05",
                "reg_no": 6,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Bhanu Kumar Chettri",
                "cino": "SKNM010002792023",
                "ext_respondents": null,
                "dt_regis": "2023-07-25",
                "reg_no": 4,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 21(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Abishek Thapa",
                "cino": "SKNM010000252024",
                "ext_respondents": null,
                "dt_regis": "2024-02-21",
                "reg_no": 2,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Tenzing Bhutia",
                "cino": "SKNM010005262022",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Anjolosh Rai"
                    }
                ],
                "dt_regis": "2022-09-27",
                "reg_no": 11,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 21(b)/25 Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Dilip Rai",
                "cino": "SKNM010003552022",
                "ext_respondents": null,
                "dt_regis": "2022-06-04",
                "reg_no": 4,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Subash Gurung",
                "cino": "SKNM010003112022",
                "ext_respondents": null,
                "dt_regis": "2022-05-09",
                "reg_no": 2,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(c) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Krishna Darjee @ Aniket Darjee",
                "cino": "SKNM010002122023",
                "ext_respondents": null,
                "dt_regis": "2023-06-08",
                "reg_no": 3,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 21(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Ritesh Thapa",
                "cino": "SKNM010004972022",
                "ext_respondents": null,
                "dt_regis": "2022-09-08",
                "reg_no": 9,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Chandan Prasad",
                "cino": "SKNM010004122022",
                "ext_respondents": null,
                "dt_regis": "2022-07-20",
                "reg_no": 5,
                "reg_year": 2022,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 22(b) Narcotic Drugs and Psychotropic Substances Act"
                    }
                ]
            },
            {
                "case_type": 6,
                "type_name": "S.T. (ndps) Case",
                "pet_name": "State",
                "res_name": "Suren Rai",
                "cino": "SKNM010003102021",
                "ext_respondents": [
                    {
                        "sl_no": 1,
                        "respondent": "Pemba Tamang"
                    }
                ],
                "dt_regis": "2021-07-31",
                "reg_no": 9,
                "reg_year": 2021,
                "relief_offense": null,
                "act_section": null
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
                "pet_name": "Kundan Sharma",
                "res_name": "State",
                "cino": "SKNM010001952024",
                "ext_respondents": null,
                "dt_regis": "2024-07-19",
                "reg_no": 1,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 12,
                "type_name": "Crl. Appeal Case",
                "pet_name": "DIPEN CHETTRI",
                "res_name": "STATE",
                "cino": "SKNM010003852023",
                "ext_respondents": null,
                "dt_regis": "2023-09-26",
                "reg_no": 5,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 12,
                "type_name": "Crl. Appeal Case",
                "pet_name": "BALA BHADRA THATAL",
                "res_name": "NITESH AGARWAL @LALLU",
                "cino": "SKNM010004242023",
                "ext_respondents": null,
                "dt_regis": "2023-10-20",
                "reg_no": 7,
                "reg_year": 2023,
                "relief_offense": null,
                "act_section": null
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
                "pet_name": "Saroj Thapa",
                "res_name": "State",
                "cino": "SKNM010001992024",
                "ext_respondents": null,
                "dt_regis": "2024-07-30",
                "reg_no": 61,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Sadip Rai",
                "res_name": "State",
                "cino": "SKNM010003022024",
                "ext_respondents": null,
                "dt_regis": "2024-09-07",
                "reg_no": 72,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Jiten Rai",
                "res_name": "State",
                "cino": "SKNM010002912024",
                "ext_respondents": null,
                "dt_regis": "2024-09-02",
                "reg_no": 68,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Rajendra Karki @ Rajendra  Chettri",
                "res_name": "State",
                "cino": "SKNM010002922024",
                "ext_respondents": null,
                "dt_regis": "2024-09-02",
                "reg_no": 69,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Biman Rai",
                "res_name": "State",
                "cino": "SKNM010001902024",
                "ext_respondents": null,
                "dt_regis": "2024-07-12",
                "reg_no": 56,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Karan Tamang",
                "res_name": "State",
                "cino": "SKNM010002942024",
                "ext_respondents": null,
                "dt_regis": "2024-09-03",
                "reg_no": 71,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Man Kumar Tamang",
                "res_name": "State",
                "cino": "SKNM010002932024",
                "ext_respondents": null,
                "dt_regis": "2024-09-02",
                "reg_no": 70,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Osiur Rahaman Khan",
                "res_name": "State",
                "cino": "SKNM010000722024",
                "ext_respondents": null,
                "dt_regis": "2024-03-21",
                "reg_no": 9,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "BHA BISHAL TAMANG",
                "res_name": "STATE",
                "cino": "SKNM010001612024",
                "ext_respondents": null,
                "dt_regis": "2024-06-19",
                "reg_no": 47,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Abishek Tamang",
                "res_name": "State",
                "cino": "SKNM010002022024",
                "ext_respondents": null,
                "dt_regis": "2024-07-31",
                "reg_no": 62,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "LAXUMAN RAI",
                "res_name": "STATE OF SIKKIM",
                "cino": "SKNM010001752024",
                "ext_respondents": null,
                "dt_regis": "2024-07-01",
                "reg_no": 51,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "NIKHIL PRADHAN",
                "res_name": "STATE",
                "cino": "SKNM010001162024",
                "ext_respondents": null,
                "dt_regis": "2024-05-02",
                "reg_no": 29,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "DAVID RAI",
                "res_name": "State",
                "cino": "SKNM010003132024",
                "ext_respondents": null,
                "dt_regis": "2024-09-23",
                "reg_no": 76,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "Sishir Rai",
                "res_name": "State",
                "cino": "SKNM010003042024",
                "ext_respondents": null,
                "dt_regis": "2024-09-09",
                "reg_no": 73,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": [
                    {
                        "sl_no": 1,
                        "act_section": "Section 483 Bharatiya Nagarik Suraksha Sanhita"
                    }
                ]
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "CHETRAJ AGARWAL",
                "res_name": "STATE",
                "cino": "SKNM010001462024",
                "ext_respondents": null,
                "dt_regis": "2024-06-03",
                "reg_no": 40,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "HEMANT SHARMA",
                "res_name": "STATE",
                "cino": "SKNM010001152024",
                "ext_respondents": null,
                "dt_regis": "2024-05-02",
                "reg_no": 28,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "PRAVA RAI",
                "res_name": "STATE",
                "cino": "SKNM010001062024",
                "ext_respondents": null,
                "dt_regis": "2024-04-29",
                "reg_no": 23,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            },
            {
                "case_type": 14,
                "type_name": "Crl. Misc. Case",
                "pet_name": "KHARKA PRASAD PRADHAN",
                "res_name": "STATE",
                "cino": "SKNM010001732024",
                "ext_respondents": null,
                "dt_regis": "2024-06-28",
                "reg_no": 50,
                "reg_year": 2024,
                "relief_offense": null,
                "act_section": null
            }
        ]
    }


]