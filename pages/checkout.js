import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

const Checkout = ({ data }) => {
  return (
    <Layout>
      <div className="checkout container mx-auto my-32 px-4 xl:px-0">
        <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
        <CheckoutForm countriesData={data?.wooCountries ?? {}} />
      </div>
    </Layout>
  );
};
export default Checkout;

export async function getStaticProps() {
  //@TODO go with HEADLESS_CMS way

  //   const { data } = await client.query({
  //     query: GET_COUNTRIES,
  //   });

  const data = {
    wooCountries: {
      billingCountries: [
        {
          countryCode: "US",
          countryName: "United States",
        },
        {
          countryCode: "TR",
          countryName: "Turkey",
        },
      ],
      shippingCountries: [
        {
          countryCode: "US",
          countryName: "United States",
        },
      ],
    },
  };

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
