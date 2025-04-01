import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Doliprane", 1, 2)]);
  });
  it("should decrease the benefit of 2 after expiration", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 0, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Doliprane", 0, 3)]);
  });
  it("should not allow benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 1, 0)]).updateBenefitValue(),
    ).toEqual([new Drug("Doliprane", 0, 0)]);
  });
  it("should Herbal Tea increases benefit of 1 before expired", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should Herbal Tea increases benefit of 2 after expired", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 0, 5)]);
  });
  it("should Fervex drop benefit to 0 at expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });
  it("should Fervex increases benefit of 1 before 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 10, 6)]);
  });
  it("should Fervex increases benefit of 2 try 5 and 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 7, 7)]);
  });
  it("should Fervex increases benefit of 3 before 5 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 2, 8)]);
  });
  it("should drug not be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 2, 50)]);
  });
  it("should Magic Pill not change benefit and expiration date", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 3, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 3, 5)]);
  });
});
