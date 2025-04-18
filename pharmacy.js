export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      switch (drug.name) {
        case "Herbal Tea":
          if (drug.expiresIn > 0) {
            drug.benefit += 1;
          } else {
            drug.benefit += 2;
          }
          break;

        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn <= 5) {
            drug.benefit += 3;
          } else if (drug.expiresIn <= 10) {
            drug.benefit += 2;
          } else {
            drug.benefit += 1;
          }
          break;

        case "Magic Pill":
          break;

        case "Dafalgan":
          if (drug.expiresIn > 0) {
            drug.benefit -= 2;
          } else {
            drug.benefit -= 4;
          }
          break;

        default:
          if (drug.expiresIn > 0) {
            drug.benefit -= 1;
          } else {
            drug.benefit -= 2;
          }
          break;
      }

      this.updateExpireDate(drug);
      this.checkBenefitValue(drug);
    });

    return this.drugs;
  }

  updateExpireDate(drug) {
    // Je bloque expiresIn à 0 minimum en considérant que cela décompte seulement le nombre de jour avant expiration
    if (drug.name != "Magic Pill" && drug.expiresIn > 0) {
      drug.expiresIn -= 1;
    }
  }

  checkBenefitValue(drug) {
    if (drug.benefit < 0) drug.benefit = 0;
    if (drug.benefit > 50) drug.benefit = 50;
  }
}
