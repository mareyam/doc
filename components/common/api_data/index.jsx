import API from "@/components/data/content/Getting_Started";
import Document_Verification from "@/components/data/content/Compilance/Document_Verification/Document_Verification";
import Email_Risk_Verification from "@/components/data/content/Compilance/Email_Verification/Email_Verification";
import Phone_Risk_Verification from "@/components/data/content/Compilance/Phone_Verification/Phone_Verification";
import Australia from "@/components/data/content/Government_Data_Source/Australia";
import Indonesia from "@/components/data/content/Government_Data_Source/Indonesia";
import Philippines from "@/components/data/content/Government_Data_Source/Phillippines";
import Anti_Money_Laundering from "@/components/data/content/Compilance/Anti-Money_Laundering";
import Biometric_Verification from "@/components/data/content/Biometrics_Verification/Biometrics_Verification";

const APIData = [
  {
    name: "Getting Started",
    data: API,
  },
  {
    name: "Anti-Money Laundering",
    data: Anti_Money_Laundering,
  },
  {
    name: "Biometrics",
    data: Biometric_Verification,
  },
  {
    name: "Document Verification",
    data: Document_Verification,
  },
  {
    name: "Email Verification",
    data: Email_Risk_Verification,
  },
  {
    name: "Phone Verification",
    data: Phone_Risk_Verification,
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
