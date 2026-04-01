import { type MouseEvent, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type LegalDocumentLinkProps = {
  href: string;
  downloadName: string;
  label: string;
  title: string;
  className?: string;
};

export function LegalDocumentLink({
  href,
  downloadName,
  label,
  title,
  className,
}: LegalDocumentLinkProps) {
  const [open, setOpen] = useState(false);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = downloadName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(true);
    triggerDownload();
  };

  return (
    <>
      <a href={href} download={downloadName} onClick={handleOpen} className={className}>
        {label}
      </a>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-[92vh] w-[min(1200px,96vw)] max-w-none flex-col gap-0 overflow-hidden p-0"
          showCloseButton
        >
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
            <DialogTitle className="text-sm font-medium">{title}</DialogTitle>
            <a
              href={href}
              download={downloadName}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Download
            </a>
          </div>
          <iframe
            src={`${href}#view=FitH`}
            title={title}
            className="h-full min-h-0 w-full flex-1 border-0 bg-white"
            loading="lazy"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
