export class HelpersMakers {
  public combinatorics(numberOfElements: number): boolean[][] {
    // Creates a list of all possible true, false combinations for a three-element form
    const combinations: boolean[][] = [];
    this.generateCombinations([], numberOfElements, combinations);
    return combinations;
  }

  private generateCombinations(
    currentCombination: boolean[],
    numberOfElements: number,
    combinations: boolean[][]
  ): void {
    if (currentCombination.length === numberOfElements) {
      combinations.push(currentCombination.slice());
      return;
    }

    for (const value of [false, true]) {
      this.generateCombinations(
        [...currentCombination, value],
        numberOfElements,
        combinations
      );
    }
  }
}
