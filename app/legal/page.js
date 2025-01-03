import { getPrivacyPolicyData } from "@/utils/getPrivacyPolicyData";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy & Terms | Bagy Painting",
  description:
    "Read Bagy Painting's Privacy Policy and Terms & Conditions to understand how we protect your data, your rights, and the rules for using our services.",
  openGraph: {
    title: "Privacy Policy & Terms | Bagy Painting",
    description:
      "Explore Bagy Painting's Privacy Policy and Terms & Conditions for insights into how we handle your data and the terms of using our services.",
  },
});

export default async function LegalPage() {
  const privacyPolicyData = await getPrivacyPolicyData();

  return <PrivacyPolicy privacyPolicyData={privacyPolicyData} />;
}