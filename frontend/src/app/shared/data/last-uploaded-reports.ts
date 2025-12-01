export interface UploadedReport {
  month: string;
  year: string;
  uploaded_at: string;
}

export const uploadedReportsDummy: UploadedReport[] = [
  {
    month: '11',
    year: '2025',
    uploaded_at: '2025-12-01T09:30:00'
  },
  {
    month: '10',
    year: '2025',
    uploaded_at: '2025-11-15T14:20:00'
  },
  {
    month: '09',
    year: '2025',
    uploaded_at: '2025-10-05T08:45:00'
  }
];
