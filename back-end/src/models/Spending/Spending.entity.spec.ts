// import School from "../School/School.entity";
// import Skill from "../Skill/Skill.entity";
// import Wilder from "./Wilder.entity";

// describe("Wilder", () => {
//   describe("getDisplayName", () => {
//     describe("when wilder has no school name", () => {
//       it("returns name with empty brackets", () => {
//         const wilder = new Wilder("Jean", "Wilder");
//         expect(wilder.getDisplayName()).toEqual("[] Jean Wilder");
//       });
//     });

//     describe("when wilder has school name", () => {
//       it("returns name with school name inside brackets", () => {
//         const school = new School("Paris");
//         const wilder = new Wilder("Jean", "Wilder", school);
//         expect(wilder.getDisplayName()).toEqual("[Paris] Jean Wilder");
//       });
//     });

//     describe("when wilder has no skills", () => {
//       it("returns name without parentheses", () => {
//         const wilder = new Wilder("Jean", "Wilder");
//         expect(wilder.getDisplayName()).toEqual("[] Jean Wilder");
//       });
//     });

//     describe("when wilder has skills", () => {
//       it("returns name with skill count in parentheses", () => {
//         const skill1 = new Skill("JavaScript");
//         const skill2 = new Skill("TypeScript");
//         const wilder = new Wilder("Jean", "Wilder", undefined, [
//           skill1,
//           skill2,
//         ]);
//         expect(wilder.getDisplayName()).toEqual("[] Jean Wilder (2)");
//       });
//     });
//   });
// });
