/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import React from "react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as toastify from "react-toastify";
import CarbonSpending from "./CarbonSpending";
import { CreateSpendingMutation } from "../../gql/graphql";

jest.mock("react-toastify");

const renderCreateSpending = (
  mocks: MockedResponse<CreateSpendingMutation>[] = []
) => {
  return render(
    <MockedProvider mocks={}>
      <div></div>
    </MockedProvider>
  );
};

// const fillFormAndSubmit = () => {
//   fireEvent.change(screen.getByRole("textbox", { name: "Libellé" }), {
//     target: { value: "Test voyage" },
//   });
//   fireEvent.change(screen.getByRole("textbox", { name: "Date" }), {
//     target: { value: "" },
//   });
//   fireEvent.submit(screen.getByRole("form"));
// };

// describe("CreateSpending", () => {
//   it("renders correctly", () => {
//     renderCreateSpending();

//     expect(screen.getByTestId("wrapper")).toMatchInlineSnapshot(`
//     <>
//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();
//           await submit();
//         }}
//         className="flex flex-col items-center"
//       >
//         <div className="flex flex-col w-3/4 mt-[30px]">
//           <label>
//             <div className="flex flex-col text-[#609f39] mb-5 ">
//               <label className="font-medium text-[18px]">Libéllé</label>
//               <input
//                 className="bg-[#c3e9ac] rounded border-transparent mt-1"
//                 type="text"
//                 name="name"
//                 value={title}
//                 onChange={(event) => {
//                   setTitle(event.target.value);
//                 }}
//                 required
//               />
//             </div>
//             <div className="flex flex-col text-[#609f39]">
//               <label className="font-medium text-[18px]">Date</label>
//               <input
//                 className="bg-[#c3e9ac] rounded border-transparent mt-1"
//                 type="date"
//                 name="date"
//                 value={date}
//                 onChange={(event) => {
//                   setDate(event.target.value);
//                 }}
//                 required
//               />
//             </div>
//           </label>
//         </div>
//         <div className="w-9/12 flex flex-col mt-[30px]">
//           <h3 className="flex flex-col text-[#609f39] mb-3 font-medium text-[18px]">
//             Catégories:
//           </h3>
//           <div className="flex flex-row justify-center gap-[10px]">
//             {TRANSPORTS_PARAMS.map((el) => {
//               return (
//                 <div>
//                   <button
//                     className="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
//                     onClick={(event) => {
//                       event.preventDefault();
//                       if (selectedIcon === el.id) {
//                         setSelectedIcon(0);
//                       } else {
//                         handleSelectCategory(el.id, el.category);
//                       }
//                     }}
//                     key={el.id}
//                     value={selectedIcon}
//                   >
//                     {el.icon}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         {selectedIcon !== 0 ? (
//           <div className="flex flex-col w-9/12 mt-[30px]">
//             {TRANSPORTS_PARAMS.filter((item) => item.id === selectedIcon).map(
//               (el) => {
//                 return (
//                   <CarbonValue
//                     value={unit}
//                     setValue={setUnit}
//                     min={el.min}
//                     max={el.max}
//                     result={weight}
//                     idicon={selectedIcon}
//                   />
//                 );
//               }
//             )}
//           </div>
//         ) : (
//           ""
//         )}
//         <button className="mt-[30px] text-white self-center w-3/4 h-12 bg-[#484b8a] rounded font-semibold text-[20px] leading-[24px]">
//           Ajouter ma dépense
//         </button>
//       </form>
//     </>
//       `);<div></div>kCreateWilderSuccess: MockedResponse<CreateSpendingMutation> = {
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
//             date: "15/03/2023",
//             unit: 200,
//             weight: 600,
//             categoryName: "Train",
//           },
//         },
//       },
//     };

//     describe("when server responds with success", () => {
//       it("resets form fields", async () => {
//         renderCreateSpending([mockCreateWilderSuccess]);
//         fillFormAndSubmit();

//         await waitFor(() => {
//           expect(screen.getByRole("textbox", { name: "Prénom" })).toHaveValue(
//             ""
//           );
//         });
//         expect(screen.getByRole("textbox", { name: "Nom" })).toHaveValue("");
//       });

//       it("shows toast with success message", async () => {
//         renderCreateSpending([mockCreateWilderSuccess]);
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
//       const mockCreateSpendingError: MockedResponse<CreateSpendingMutation> = {
//         request: {
//           query: CREATE_SPENDING,
//           variables: {
//             firstName: "Jean",
//             lastName: "Wilder",
//           },
//         },
//         error: new Error(ERROR_MESSAGE),
//       };

//       it("shows toast with error message", async () => {
//         renderCreateSpending([mockCreateSpendingError]);
//         fillFormAndSubmit();

//         await waitFor(() => {
//           expect(toastify.toast.error).toHaveBeenCalledTimes(1);
//         });
//         expect(toastify.toast.error).toHaveBeenCalledWith(ERROR_MESSAGE);
//       });
//     });
//   });
// });
