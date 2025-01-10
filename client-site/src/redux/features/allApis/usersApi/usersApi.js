import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register a user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // Register as an agent
    addAgent: builder.mutation({
      query: (data) => ({
        url: "/users/agentregistration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // Login a user
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["users"],
    }),
    // Fetch authenticated user
    getAuthenticatedUser: builder.query({
      query: (token) => ({
        url: "/users/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["users"],
    }),

    // get all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    // get all agents
    getAgents: builder.query({
      query: () => "/users/agent",
      providesTags: ["users"],
    }),

    getUserById: builder.query({
      query: (id) => `/users/single-user/${id}`,
      providesTags: ["users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useAddAgentMutation,
  useLoginUserMutation,
  useLazyGetAuthenticatedUserQuery,
  useGetUsersQuery,
  useGetAgentsQuery,
  useLazyGetUserByIdQuery,
} = usersApi;
