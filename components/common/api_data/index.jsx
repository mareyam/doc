import API1 from "@/components/data/content/Australia_Verification_Services";
import API2 from "@/components/data/content/Biometrics_Verification";
import API3 from "@/components/data/content/Compliance_Verification";
import API4 from "@/components/data/content/QR_Code_Verification";
import API5 from "@/components/data/content/Phillippines_Verification";
import API6 from "@/components/data/content/Indonesia_Verification_Currently_Forbidden";

const APIData = [
  {
    name: "Documents Verification Services",
    data: API1,
  },
  {
    name: "Biometric Verification",
    data: API5,
  },
  {
    name: "Compliance Verification",
    data: API3,
  },
  { name: "QR Code Verification", data: API4 },
  { name: "Philippines Verification", data: API5 },
  {
    name: "Indonesia Verification (Currently Forbidden)",
    data: API6,
  },
];

export default APIData;
