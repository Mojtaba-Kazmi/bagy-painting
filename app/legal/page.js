import { getPrivacyPolicyData } from "@/utils/getPrivacyPolicyData";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

export default async function LegalPage() {
  const privacyPolicyData = await getPrivacyPolicyData();

  return <PrivacyPolicy privacyPolicyData={privacyPolicyData} />;
}