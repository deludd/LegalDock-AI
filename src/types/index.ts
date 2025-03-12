export interface AnalysisResult {
    summary: string;
    keyPoints: string[];
    simplifiedText: string;
  }
  
  export interface DocumentUploadProps {
    onUploadComplete?: (result: AnalysisResult) => void;
  }
  
  export interface DocumentAnalysisProps {
    result: AnalysisResult | null;
    isLoading: boolean;
  }