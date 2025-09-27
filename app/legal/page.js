import { getPrivacyPolicyData } from "@/utils/getPrivacyPolicyData";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy and Terms | Bagy Painting",
  description:
    "Read Bagy Painting privacy policy and terms and conditions. Learn how we handle your data, your rights, and the rules for using our services.",
  pathname: "/legal",
});

export default async function LegalPage() {
  const privacyPolicyData = await getPrivacyPolicyData();

  return <PrivacyPolicy privacyPolicyData={privacyPolicyData} />;
}