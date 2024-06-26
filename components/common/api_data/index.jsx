import API from "@/components/data/content/Getting_Started";
import Document_Verification from "@/components/data/content/Compilance/Document_Verification/Document_Verification";
import Email_Verification from "@/components/data/content/Compilance/Email_Verification/Email_Verification";
import Phone_Verification from "@/components/data/content/Compilance/Phone_Verification/Phone_Verification";
import Australia from "@/components/data/content/Government_Data_Source/Australia";
import Indonesia from "@/components/data/content/Government_Data_Source/Indonesia";
import Philippines from "@/components/data/content/Government_Data_Source/Phillippines";
import Anti_Money_Laundering from "@/components/data/content/Compilance/Anti-Money_Laundering";
// import Biometric_Verification from "@/components/data/content/Biometrics_Verification/Biometrics_Verification";
import Biometrics from "@/components/data/content/Compilance/Biometrics";
import API1 from "@/components/data/content/Compilance";

const APIData = [
  {
    name: "Getting Started",
    data: API,
  },
  {
    name: "Compliance",
    data: API1,
  },
  {
    name: "Anti-Money Laundering",
    data: Anti_Money_Laundering,
  },
  {
    name: "Biometrics",
    data: Biometrics,
  },
  {
    name: "Document Verification",
    data: Document_Verification,
  },
  {
    name: "Email Verification",
    data: Email_Verification,
  },
  {
    name: "Phone Verification",
    data: Phone_Verification,
  },
  {
    name: "Australia",
    data: Australia,
  },
  {
    name: "Indonesia",
    data: Indonesia,
  },
  {
    name: "Philippines",
    data: Philippines,
  },
];

export default APIData;
