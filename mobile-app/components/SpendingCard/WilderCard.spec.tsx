// import React from "react";

// import { render, screen } from "@testing-library/react-native";
// import renderer from "react-test-renderer";
// import WilderCard from "./WilderCard";

// jest.mock("./Icon", () => {
//   return "mocked-check";
// });

// describe("Wilders", () => {
//   describe("when wilder is not approved", () => {
//     const wilderNotApproved = {
//       id: "1234",
//       firstName: "Jean",
//       lastName: "Fictif",
//       isApproved: false,
//     };

//     it("displays Approve button", () => {
//       render(<WilderCard {...wilderNotApproved} />);
//       expect(screen.getByRole("button", { name: "Approuver" })).toBeTruthy();
//     });
//   });

//   describe("when wilder is approved", () => {
//     const wilderApproved = {
//       id: "1234",
//       firstName: "Jean",
//       lastName: "Fictif",
//       isApproved: true,
//     };

//     it("displays Checked icon", async () => {
//       render(<WilderCard {...wilderApproved} />);
//       expect(
//         screen.queryAllByRole("button", { name: "Approuver" })
//       ).toHaveLength(0);

//       const tree = renderer.create(<WilderCard {...wilderApproved} />).toJSON();

//       const children = (tree as any).children as Array<any>;
//       expect(
//         children.find((element) => element.type === "mocked-check")
//       ).toBeTruthy();
//     });
//   });

//   describe("when Approve button is clicked", () => {
//     it("sends mutation to server", () => {});
//   });
// });
