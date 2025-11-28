export interface CaseStatement {
    id:number;
    //desc_case_id:number;
    case_type_id:number;
    desc_case: string;
    pending_start_of_month: number;
    instituted_during_the_month: number;
    total_count: number;
    count_disposed_contested: number;
    count_disposed_uncontested: number;
    count_disposed_transferred: number;
    pending_in_hand: number;
    pending_more_then_2yrs:number;
    pending_more_then_4yrs:number;
    date_of_oldest_case:Date;
    unit:number;
    no_of_working_days:number;
    report_year:number;
    report_month:string,
    remarks:string;    
    is_draft:boolean;
    related_casetype:any;
    organization:number;
    updated_at: string;
    report_id:number;
  }