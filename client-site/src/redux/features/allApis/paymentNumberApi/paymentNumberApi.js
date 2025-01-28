import baseApi from "../../baseApi";

const paymentNumberApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add a payment number
    addPaymentNumber: builder.mutation({
      query: (data) => ({
        url: "/paymentnumber",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["paymentNumber"],
    }),

    // get all payment numbers
    getAllPaymentNumbers: builder.query({
      query: () => "/paymentnumber",
      providesTags: ["paymentNumber"],
    }),

    // get payment number by id
    getPaymentNumberById: builder.query({
      query: (id) => `/paymentnumber/single-number/${id}`,
      providesTags: ["paymentNumber"],
    }),
  }),
});

export const {
  useAddPaymentNumberMutation,
  useGetAllPaymentNumbersQuery,
  useGetPaymentNumberByIdQuery,
} = paymentNumberApi;
