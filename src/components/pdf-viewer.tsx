"use client";

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full h-dvh">
      <iframe
        src={`${pdfUrl}#view=FitH`}
        className="w-full h-dvh border-0 shadow-lg rounded-lg"
        title="PDF Viewer"
      />
    </div>
  );
}