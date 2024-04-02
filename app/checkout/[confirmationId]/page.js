import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ConfirmationId() {
  return (
    <div className="flex justify-center items-center p-20">
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <CheckCircleIcon className="text-green-600 text-4xl"/>
        <p className="text-4xl">Thank you!</p>
        <p className="text-lg">Your order has been confirmed.</p>
        <p className="text-lg">Your shipping order number is : 123123123</p>
      </div>
    </div>
  );
}
