import { useRouter } from "next/router";
import { message } from "antd";

export default function PaymentSuccessful() {
  const router = useRouter();
  if (router.query.oid) {
    const splittedData = router.query.oid.split("-");
    if (splittedData[2]) {
      (async function updateSlotInfo() {
        let response = await fetch("/api/payment-sucessful", {
          method: "POST",
          body: JSON.stringify({
            id: splittedData[2],
          }),
        });
        response = await response.json();
        console.log(response);
        if (response.error) {
          message.error(response.message);
        } else {
          message.success(response.message);
          router.push("/dashboard");
          // setTimeout(() => {
          // }, 1000);
        }
      })();
    }
  }
  return <>Successufl</>;
}
