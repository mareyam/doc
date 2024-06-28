import API from "@/components/data/content/Getting_Started";
import Document_Verification from "@/components/data/content/Compilance/Document_Verification/Document_Verification";
import Email from "@/components/data/content/Compilance/Email/";
import Australia from "@/components/data/content/Government_Data_Source/Australia";
import Indonesia from "@/components/data/content/Government_Data_Source/Indonesia";
import Philippines from "@/components/data/content/Government_Data_Source/Phillippines";
import Anti_Money_Laundering from "@/components/data/content/Compilance/Anti_Money_Laundering";
// import Biometric_Verification from "@/components/data/content/Biometrics_Verification/Biometrics_Verification";
import Biometrics from "@/components/data/content/Compilance/Biometrics";
import API1 from "@/components/data/content/Compilance";
import Phone from "@/components/data/content/Compilance/Phone_Verification";
import Doc from "@/components/data/content/Compilance/Documents";
// import Test from "@/components/data/content/Compilance/Test";

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
    name: "Anti_Money_Laundering",
    data: Anti_Money_Laundering,
  },
  {
    name: "Biometrics",
    data: Biometrics,
  },
  {
    name: "Email Verification",
    data: Email,
  },
  {
    name: "Phone Verification",
    data: Phone,
  },
  {
    name: "Documents Verification",
    data: Doc,
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
