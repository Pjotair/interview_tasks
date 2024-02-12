export class HelpersMakers {
  // Creates a list of all possible true, false combinations for a three-element form
  public combinatorics(): boolean[][] {
    const combinations: Array<[boolean, boolean, boolean]> = [];
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 2; y++) {
        for (let z = 0; z < 2; z++) {
          combinations.push([Boolean(x), Boolean(y), Boolean(z)]);
        }
      }
    }
    return combinations;
  }
}
