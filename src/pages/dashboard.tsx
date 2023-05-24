import Link from "next/link";
import { useState, useEffect } from "react";
import { message } from "antd";

async function payViaEsewa(name: any, phone: any, id: any) {
  var path = "https://uat.esewa.com.np/epay/main";
  var params = {
    amt: 25,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 25,
    pid: name + "-" + phone + "-" + id,
    scd: "EPAYTEST",
    su: "http://localhost:3000/successful",
    fu: "http://localhost:3000/dashboard",
  };

  function post(path: any, params: any) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }
  await post(path, params);
}

export default function Dashboard() {
  const [slotDetails, setSlotDetails] = useState<any>([]);
  useEffect(() => {
    (async function fetchSlotDetails() {
      let result = await fetch("/api/get-dashboard-details");
      result = await result.json();
      setSlotDetails(result);
    })();
  });
  return (
    <section className="min-h-screen bg-slate-100 py-12">
      <div className="mb-8 flex container mx-auto gap-20">
        <div className="text-4xl font-bold text-center">
          Parking Slot Status
        </div>
        <Link
          href={"/"}
          className="border bg-blue-500 text-white flex justify-center items-center px-6 rounded-md shadow-lg"
        >
          Return Home
        </Link>
      </div>
      <div className="container mx-auto flex flex-wrap gap-8 h-full justify-center">
        {slotDetails.map((data: any, index: number) => {
          return (
            <div
              key={data.id}
              className={`${
                data.isEmpty ? "bg-green-500" : "bg-red-500"
              }  p-20 rounded-xl text-white font-bold text-2xl flex justify-center items-center shadow-xl flex-col gap-4`}
            >
              {data.status}
              {data.isEmpty && (
                <button
                  className="px-6 border text-xl rounded-full hover:bg-green-500 transition-all py-2"
                  onClick={async () => {
                    let response = (await fetch("/api/marked-booked", {
                      method: "POST",
                      body: JSON.stringify({
                        id: data.id,
                      }),
                    })) as any;
                    response = await response.json();
                    console.log(response);
                    if (response.error) {
                      message.error(response.message);
                    } else {
                      message.success(response.message);
                    }
                  }}
                >
                  Mark Booked
                </button>
              )}
              {!data.isEmpty && (
                <>
                  <button
                    className="px-6 border text-xl rounded-full hover:bg-green-500 transition-all py-2"
                    onClick={async () => {
                      console.log("click");
                      await payViaEsewa(data.name, data.phone, data.id);
                    }}
                  >
                    Pay Via Esewa
                  </button>
                  <button
                    className="px-6 border text-xl rounded-full hover:bg-green-500 transition-all py-2"
                    onClick={async () => {
                      (async function updateSlotInfo() {
                        let response = await fetch("/api/payment-sucessful", {
                          method: "POST",
                          body: JSON.stringify({
                            id: data.id,
                          }),
                        }) as any;
                        response = await response.json();
                        console.log(response);
                        if (response.error) {
                          message.error(response.message);
                        } else {
                          message.success(response.message);
                        }
                      })();
                    }}
                  >
                    Pay Via Cash
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
