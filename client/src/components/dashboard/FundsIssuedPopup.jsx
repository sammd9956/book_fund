import { useEffect, useState } from "react";
import Barcode from "react-barcode";
import { Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function FundsIssuedPopup({
  open,
  setOpen,
}) {
  const [redeemCode, setRedeemCode] = useState("");

  // Generate new code every popup open
  useEffect(() => {
    if (open) {
      generateCode();
    }
  }, [open]);

  const generateCode = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let random = "";

    for (let i = 0; i < 7; i++) {
      random += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRedeemCode(`FUND-${random}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl rounded-[32px] border-0 p-0 overflow-hidden">
        <div className="bg-[#fffdf8] p-8 md:p-10">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">
              <Gift className="h-8 w-8 text-violet-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-center text-4xl font-extrabold text-black">
            Funds Issued!
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-center text-[17px] leading-7 text-gray-600">
            Your funds have been successfully converted.
            Use the code below at your Bookworm
            Central fair.
          </p>

          {/* Barcode Box */}
          <div className="mt-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-center text-lg font-semibold text-gray-700">
              Redemption Code
            </p>

            <div className="mt-5 flex justify-center overflow-hidden">
              <Barcode
                value={redeemCode}
                format="CODE128"
                width={2}
                height={90}
                displayValue={false}
                background="transparent"
                lineColor="#111827"
                margin={0}
              />
            </div>

            <h2 className="mt-5 text-center text-4xl font-black tracking-wide text-black">
              {redeemCode}
            </h2>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={handlePrint}
              className="h-14 flex-1 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-lg font-semibold hover:opacity-90"
            >
              Print Code
            </Button>

            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-14 flex-1 rounded-2xl border-gray-300 text-lg font-semibold"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}