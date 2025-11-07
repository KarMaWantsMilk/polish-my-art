import { useState } from "react";
import { ClearanceForm, ClearanceData } from "@/components/ClearanceForm";
import { CertificatePreview } from "@/components/CertificatePreview";
import { Button } from "@/components/ui/button";
import { Printer, Save, RefreshCw, FileSearch, FilePlus } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [clearanceData, setClearanceData] = useState<ClearanceData>({
    recordNo: "",
    brgyBusinessNo: "",
    issuedDate: new Date().toISOString().split('T')[0],
    prefix: "",
    firstname: "",
    middleName: "",
    surname: "",
    ext: "",
    businessName: "",
    businessType: "",
    businessDetails: "",
    capital: "",
    orNo: "",
    remarks: "",
    houseBlockLotNo: "",
    street: "",
    zone: "",
    inspectedBy: "",
    dateOfInspection: "",
    inspectionRemarks: "",
    inspectedRemarks: "",
    dateInspected: "",
    inspectedNote: "",
  });

  const handleSave = () => {
    toast.success("Record saved successfully");
  };

  const handleNewRecord = () => {
    setClearanceData({
      recordNo: "",
      brgyBusinessNo: "",
      issuedDate: new Date().toISOString().split('T')[0],
      prefix: "",
      firstname: "",
      middleName: "",
      surname: "",
      ext: "",
      businessName: "",
      businessType: "",
      businessDetails: "",
      capital: "",
      orNo: "",
      remarks: "",
      houseBlockLotNo: "",
      street: "",
      zone: "",
      inspectedBy: "",
      dateOfInspection: "",
      inspectionRemarks: "",
      inspectedRemarks: "",
      dateInspected: "",
      inspectedNote: "",
    });
    toast.info("New record created");
  };

  const handlePrint = () => {
    window.print();
    toast.success("Preparing certificate for printing");
  };

  const handleRefresh = () => {
    toast.info("Form refreshed");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] print:hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Barangay Business Clearance</h1>
              <p className="text-sm opacity-90">City Government of Taguig - Barangay West Rembo</p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={handleNewRecord}>
                <FilePlus className="w-4 h-4 mr-2" />
                New Record
              </Button>
              <Button variant="secondary" size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="secondary" size="sm" onClick={handleRefresh}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="secondary" size="sm" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 print:py-0">
        <div className="grid lg:grid-cols-2 gap-8 print:grid-cols-1">
          {/* Form Section */}
          <div className="print:hidden">
            <ClearanceForm data={clearanceData} onChange={setClearanceData} />
          </div>

          {/* Certificate Preview */}
          <div className="print:col-span-2">
            <div className="sticky top-8 print:static">
              <h2 className="text-xl font-semibold mb-4 text-foreground print:hidden">
                Certificate Preview
              </h2>
              <CertificatePreview data={clearanceData} />
            </div>
          </div>
        </div>
      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            margin: 1cm;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
