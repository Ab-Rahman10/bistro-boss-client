import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  return (
    <div>
      <div>
        <SectionTitle
          subTitle="Please pay to eat"
          title="Payment"
        ></SectionTitle>
      </div>
      <div className="w-7/12 mx-auto mt-20">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
