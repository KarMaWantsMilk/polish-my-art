import { ClearanceData } from "./ClearanceForm";

interface CertificatePreviewProps {
  data: ClearanceData;
}

export const CertificatePreview = ({ data }: CertificatePreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    
    const suffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    
    return `${day}${suffix(day)} day of ${month}, ${year}`;
  };

  const fullName = [data.prefix, data.firstname, data.middleName, data.surname, data.ext]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="bg-white p-8 shadow-[var(--shadow-document)] border-4 border-[hsl(var(--document-border))] print:shadow-none print:border-2">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-[hsl(var(--official-blue))]">
        <div className="flex justify-center items-start gap-8 mb-4">
          {/* Left Seal - Placeholder for West Rembo Seal */}
          <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--official-blue))] flex items-center justify-center bg-[hsl(var(--official-gold)_/_0.1)]">
            <div className="text-center">
              <div className="text-xs font-bold text-primary">WEST</div>
              <div className="text-xs font-bold text-primary">REMBO</div>
            </div>
          </div>

          {/* Center Text */}
          <div className="flex-1 max-w-md">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              REPUBLIC OF THE PHILIPPINES
            </h3>
            <h2 className="text-base font-bold text-primary mb-1">
              CITY GOVERNMENT OF TAGUIG
            </h2>
            <h1 className="text-xl font-bold text-primary mb-2">
              BARANGAY WEST REMBO
            </h1>
            <p className="text-xs text-muted-foreground">
              Plaza Drive, A. Javier Street, West Rembo, 1644<br />
              Email Add: brgy.west.rembo@barangays@gmail.com<br />
              Hotline: 8836-9733
            </p>
          </div>

          {/* Right Seal - Placeholder for Taguig Seal */}
          <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--official-red))] flex items-center justify-center bg-[hsl(var(--official-gold)_/_0.1)]">
            <div className="text-center">
              <div className="text-xs font-bold text-destructive">TAGUIG</div>
              <div className="text-xs font-bold text-destructive">CITY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[hsl(var(--official-red))]">
        BARANGAY BUSINESS CLEARANCE
      </h2>

      {/* Certificate Body */}
      <div className="space-y-6 text-center px-8">
        <p className="text-lg font-medium">This is to certify that</p>

        <p className="text-2xl font-bold text-primary min-h-[2rem]">
          {fullName || "[Name]"}
        </p>

        <p className="text-lg font-medium min-h-[2rem]">
          {data.businessName || "[Business Name]"}
        </p>

        <p className="text-base leading-relaxed max-w-3xl mx-auto">
          is now operating a business within the jurisdiction of Barangay West Rembo, Taguig City.
          This Certification is being issued as required by the Local Government Code under
          Section 152, Paragraph C for the purpose of securing or renewing Mayor's Permit/License.
        </p>

        <p className="text-sm text-muted-foreground italic pt-4">
          Note: Any violation(s) or illegal act(s) committed by the business will be cause for
          cancellation of this Clearance.
        </p>

        <div className="pt-8 text-base">
          <p>
            Issued this{" "}
            <span className="font-semibold">
              {data.issuedDate ? formatDate(data.issuedDate) : "[Date]"}
            </span>
            {" "}at Barangay West Rembo, Taguig City.
          </p>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-16 flex justify-end px-8">
        <div className="text-center">
          <div className="mb-2 border-b-2 border-foreground w-64 h-16"></div>
          <p className="font-bold text-lg text-[hsl(var(--official-red))]">
            HON. LEO E. BES
          </p>
          <p className="text-sm text-muted-foreground">Punong Barangay</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
          <div>
            <p><span className="font-semibold">Serial No.:</span> {data.recordNo || "_______________"}</p>
          </div>
          <div className="text-right">
            <p><span className="font-semibold">O.R. No.:</span> {data.orNo || "_______________"}</p>
          </div>
        </div>
        {data.remarks && (
          <div className="mt-2">
            <p className="text-xs"><span className="font-semibold">Remarks:</span> {data.remarks}</p>
          </div>
        )}
      </div>
    </div>
  );
};
