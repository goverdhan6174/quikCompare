import client from "../components/ApolloClient";
import { isEmpty, isArray } from "lodash";
import { createCheckoutSession } from "next-stripe/client"; // @see https://github.com/ynnoj/next-stripe
import { loadStripe } from "@stripe/stripe-js";

import GET_STATES from "../queries/get-states";
import { createTheOrder, getCreateOrderData } from "./order";
import { clearTheCart } from "./cart";

/**
 * Get states
 *
 * @param {String} countryCode Country code
 *
 * @returns {Promise<void>}
 */
export const getStates = async (countryCode) => {
  //@TODO work with HEADLESS_CMS

  // const { data } = await client.query( {
  //     query: GET_STATES,
  //     variables: { countryCode: countryCode || '' }
  // } )

  let states = {
    US: [
      {
        stateCode: "AL",
        stateName: "Alabama",
      },
      {
        stateCode: "AK",
        stateName: "Alaska",
      },
      {
        stateCode: "AZ",
        stateName: "Arizona",
      },
      {
        stateCode: "AR",
        stateName: "Arkansas",
      },
      {
        stateCode: "CA",
        stateName: "California",
      },
      {
        stateCode: "CO",
        stateName: "Colorado",
      },
      {
        stateCode: "CT",
        stateName: "Connecticut",
      },
      {
        stateCode: "DE",
        stateName: "Delaware",
      },
      {
        stateCode: "DC",
        stateName: "District Of Columbia",
      },
      {
        stateCode: "FL",
        stateName: "Florida",
      },
      {
        stateCode: "GA",
        stateName: "Georgia",
      },
      {
        stateCode: "HI",
        stateName: "Hawaii",
      },
      {
        stateCode: "ID",
        stateName: "Idaho",
      },
      {
        stateCode: "IL",
        stateName: "Illinois",
      },
      {
        stateCode: "IN",
        stateName: "Indiana",
      },
      {
        stateCode: "IA",
        stateName: "Iowa",
      },
      {
        stateCode: "KS",
        stateName: "Kansas",
      },
      {
        stateCode: "KY",
        stateName: "Kentucky",
      },
      {
        stateCode: "LA",
        stateName: "Louisiana",
      },
      {
        stateCode: "ME",
        stateName: "Maine",
      },
      {
        stateCode: "MD",
        stateName: "Maryland",
      },
      {
        stateCode: "MA",
        stateName: "Massachusetts",
      },
      {
        stateCode: "MI",
        stateName: "Michigan",
      },
      {
        stateCode: "MN",
        stateName: "Minnesota",
      },
      {
        stateCode: "MS",
        stateName: "Mississippi",
      },
      {
        stateCode: "MO",
        stateName: "Missouri",
      },
      {
        stateCode: "MT",
        stateName: "Montana",
      },
      {
        stateCode: "NE",
        stateName: "Nebraska",
      },
      {
        stateCode: "NV",
        stateName: "Nevada",
      },
      {
        stateCode: "NH",
        stateName: "New Hampshire",
      },
      {
        stateCode: "NJ",
        stateName: "New Jersey",
      },
      {
        stateCode: "NM",
        stateName: "New Mexico",
      },
      {
        stateCode: "NY",
        stateName: "New York",
      },
      {
        stateCode: "NC",
        stateName: "North Carolina",
      },
      {
        stateCode: "ND",
        stateName: "North Dakota",
      },
      {
        stateCode: "OH",
        stateName: "Ohio",
      },
      {
        stateCode: "OK",
        stateName: "Okanhoma",
      },
      {
        stateCode: "OR",
        stateName: "Oregon",
      },
      {
        stateCode: "PA",
        stateName: "Pennsylvania",
      },
      {
        stateCode: "RI",
        stateName: "Rhode Island",
      },
      {
        stateCode: "SC",
        stateName: "South Carolina",
      },
      {
        stateCode: "SD",
        stateName: "South Dakota",
      },
      {
        stateCode: "TN",
        stateName: "Tennessee",
      },
      {
        stateCode: "TX",
        stateName: "Texas",
      },
      {
        stateCode: "UT",
        stateName: "Utah",
      },
      {
        stateCode: "VT",
        stateName: "Vermont",
      },
      {
        stateCode: "VA",
        stateName: "Virginia",
      },
      {
        stateCode: "WA",
        stateName: "Washington",
      },
      {
        stateCode: "WV",
        stateName: "West Virginia",
      },
      {
        stateCode: "WI",
        stateName: "Wisconsin",
      },
      {
        stateCode: "WY",
        stateName: "Wyoming",
      },
      {
        stateCode: "(AA)AA",
        stateName: "Armed Forces",
      },
      {
        stateCode: "(AE)AE",
        stateName: "Armed Forces",
      },
      {
        stateCode: "(AP)AP",
        stateName: "Armed Forces",
      },
      {
        stateCode: "AS",
        stateName: "American Samoa",
      },
      {
        stateCode: "GU",
        stateName: "Guam",
      },
      {
        stateCode: "MP",
        stateName: "Northern Mariana Islands",
      },
      {
        stateCode: "PR",
        stateName: "Puerto Rico",
      },
      {
        stateCode: "UM",
        stateName: "Us Minor Outlying Island",
      },
      {
        stateCode: "VI",
        stateName: "Us Virgin IslandsVI",
      },
    ],
    TR: [
      {
        stateCode: "TR01",
        stateName: "Adana",
      },
      {
        stateCode: "TR02",
        stateName: "Adiyaman",
      },
      {
        stateCode: "TR03",
        stateName: "Afyon",
      },
      {
        stateCode: "TR04",
        stateName: "Ağrı",
      },
      {
        stateCode: "TR05",
        stateName: "Amasya",
      },
      {
        stateCode: "TR06",
        stateName: "Ankara",
      },
      {
        stateCode: "TR07",
        stateName: "Antalya",
      },
      {
        stateCode: "TR08",
        stateName: "Artvin",
      },
      {
        stateCode: "TR09",
        stateName: "Aydın",
      },
      {
        stateCode: "TR10",
        stateName: "Balıkesir",
      },
      {
        stateCode: "TR11",
        stateName: "Bilecik",
      },
      {
        stateCode: "TR12",
        stateName: "Bingöl",
      },
      {
        stateCode: "TR13",
        stateName: "Bitlis",
      },
      {
        stateCode: "TR14",
        stateName: "Bolu",
      },
    ],
  };

  let data = {
    wooStates: {
      states: [],
    },
  };

  if (typeof states === "object" && states.hasOwnProperty(countryCode)) {
    data.wooStates.states = states[countryCode];
  }

  return data?.wooStates?.states ?? [];
};

/**
 * Set states for the country.
 *
 * @param {Object} target Target.
 * @param {Function} setTheStates React useState function to set the value of the states basis country selection.
 * @param {Function} setIsFetchingStates React useState function, to manage loading state when request is in process.
 *
 * @return {Promise<void>}
 */
export const setStatesForCountry = async (
  target,
  setTheStates,
  setIsFetchingStates
) => {
  if ("country" === target.name) {
    setIsFetchingStates(true);
    const countryCode = target[target.selectedIndex].getAttribute(
      "data-countrycode"
    );
    const states = await getStates(countryCode);
    setTheStates(states || []);
    setIsFetchingStates(false);
  }
};

export const handleBillingDifferentThanShipping = (input, setInput, target) => {
  const newState = {
    ...input,
    [target.name]: !input.billingDifferentThanShipping,
  };
  setInput(newState);
};

export const handleCreateAccount = (input, setInput, target) => {
  const newState = { ...input, [target.name]: !input.createAccount };
  setInput(newState);
};

/**
 * Handle Stripe checkout.
 *
 * 1. Create Formatted Order data.
 * 2. Create Order using Next.js create-order endpoint.
 * 3. Clear the cart session.
 * 4. On success set show stripe form to true
 *
 * @param input
 * @param products
 * @param setRequestError
 * @param setShowStripeForm
 * @param clearCartMutation
 * @param setIsStripeOrderProcessing
 *
 */
export const handleStripeCheckout = async (
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  setCreatedOrderData
) => {
  setIsStripeOrderProcessing(true);
  const orderData = getCreateOrderData(input, products);
  const createCustomerOrder = await createTheOrder(
    orderData,
    setRequestError,
    ""
  );
  const cartCleared = await clearTheCart(
    clearCartMutation,
    createCustomerOrder?.error
  );
  setIsStripeOrderProcessing(false);

  if (isEmpty(createCustomerOrder?.orderId) || cartCleared?.error) {
    console.log("came in");
    setRequestError("Clear cart failed");
    return null;
  }

  // On success show stripe form.
  setCreatedOrderData(createCustomerOrder);
  await createCheckoutSessionAndRedirect(
    products,
    input,
    createCustomerOrder?.orderId
  );

  return createCustomerOrder;
};

const createCheckoutSessionAndRedirect = async (products, input, orderId) => {
  const sessionData = {
    success_url:
      window.location.origin +
      `/thank-you?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
    cancel_url: window.location.href,
    customer_email: input.billingDifferentThanShipping
      ? input?.billing?.email
      : input?.shipping?.email,
    line_items: getStripeLineItems(products),
    metadata: getMetaData(input, orderId),
    payment_method_types: ["card"],
    mode: "payment",
  };
  const session = await createCheckoutSession(sessionData);
  try {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  } catch (error) {
    console.log(error);
  }
};

const getStripeLineItems = (products) => {
  if (isEmpty(products) && !isArray(products)) {
    return [];
  }

  return products.map((product) => {
    return {
      quantity: product?.qty ?? 0,
      name: product?.name ?? "",
      images: [product?.image?.sourceUrl ?? ""],
      amount: Math.round(product?.price * 100),
      currency: "usd",
    };
  });
};

/**
 * Get meta data.
 *
 * @param input
 * @param {String} orderId Order Id.
 *
 * @returns {{lineItems: string, shipping: string, orderId, billing: string}}
 */
export const getMetaData = (input, orderId) => {
  return {
    billing: JSON.stringify(input?.billing),
    shipping: JSON.stringify(
      input.billingDifferentThanShipping
        ? input?.billing?.email
        : input?.shipping?.email
    ),
    orderId,
  };

  // @TODO
  // if ( customerId ) {
  //     metadata.customerId = customerId;
  // }
};
