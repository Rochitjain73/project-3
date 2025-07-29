import { FileText } from 'lucide-react';

function ResumeDownloadButton() {
  return (
    <a
      href="/resume.pdf" // Path to your PDF in the public folder
      download // This tells the browser to download the file
    >
      <button
        type="button"
        className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-full flex items-center gap-2"
      >
        <FileText className="h-4 w-4" />
        Resume
      </button>
    </a>
  );
}

export default ResumeDownloadButton;
