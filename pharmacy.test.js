import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("should not allow benefit below 0", () => {
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)],
    );
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
});
