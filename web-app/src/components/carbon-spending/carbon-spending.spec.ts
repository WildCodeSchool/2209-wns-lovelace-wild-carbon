// import { MockedProvider, MockedResponse } from "@apollo/client/testing";
// import { BrowserRouter } from "react-router-dom";
// import { CreateSpendingMutation } from "../../gql/graphql";
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { CREATE_SPENDING } from "./carbon-spending";

// jest.mock("react-toastify");

// describe("CreateSpending", () => {
//   describe("when form submitted with fields filled-in", () => {
//     const mockCreateWilderSuccess: MockedResponse<CreateSpendingMutation> = {
//       request: {
//         query: CREATE_SPENDING,
//         variables: {
//           title: "Test voyage",
//           date: new Date("15/03/2023"),
//           unit: 200,
//           weight: 600,
//           categoryName: "Train",
//         },
//       },
//       result: {
//         data: {
//           createWilder: {
//             title: "Test voyage",
//             unit: 200
//           },
//         },
//       },
//     };

//     describe("when server responds with success", () => {
//       it("resets form fields", async () => {
//         renderCreateWilder([mockCreateWilderSuccess]);
//         fillFormAndSubmit();

//         await waitFor(() => {
//           expect(screen.getByRole("textbox", { name: "Prénom" })).toHaveValue(
//             ""
//           );
//         });
//         expect(screen.getByRole("textbox", { name: "Nom" })).toHaveValue("");
//       });

//       it("shows toast with success message", async () => {
//         renderCreateWilder([mockCreateWilderSuccess]);
//         fillFormAndSubmit();

//         await waitFor(() => {
//           expect(toastify.toast.success).toHaveBeenCalledTimes(1);
//         });
//         expect(toastify.toast.success).toHaveBeenCalledWith(
//           "Wilder Jean Wilder créé avec succès."
//         );
//       });
//     });

//     describe("when server responds with error", () => {
//       const ERROR_MESSAGE = "ERROR_MESSAGE";
//       const mockCreateWilderError: MockedResponse<CreateWilderMutation> = {
//         request: {
//           query: CREATE_WILDER,
//           variables: {
//             firstName: "Jean",
//             lastName: "Wilder",
//           },
//         },
//         error: new Error(ERROR_MESSAGE),
//       };

//       it("shows toast with error message", async () => {
//         renderCreateWilder([mockCreateWilderError]);
//         fillFormAndSubmit();

//         await waitFor(() => {
//           expect(toastify.toast.error).toHaveBeenCalledTimes(1);
//         });
//         expect(toastify.toast.error).toHaveBeenCalledWith(ERROR_MESSAGE);
//       });
//     });
//   });
// });
