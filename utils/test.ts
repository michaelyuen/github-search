import { validateQuery } from ".";

describe("Utils", () => {
  describe("validateQuery", () => {
    test("'atom' is not valid", () => {
      expect(validateQuery("atom").isValid).toBe(false);
    });

    describe("user qualifier queries", () => {
      test("'user' is not valid", () => {
        expect(validateQuery("user").isValid).toBe(false);
      });

      test("'user stars' is not valid", () => {
        expect(validateQuery("user stars").isValid).toBe(false);
      });

      test("'user:' is not valid", () => {
        expect(validateQuery("user:").isValid).toBe(false);
      });

      test("'user:stars' is not valid", () => {
        expect(validateQuery("user:stars").isValid).toBe(false);
      });

      test("'user:about' is not valid", () => {
        expect(validateQuery("user:about").isValid).toBe(false);
      });

      test("'user:help' is not valid", () => {
        expect(validateQuery("user:help").isValid).toBe(false);
      });

      test("'user:pricing' is not valid", () => {
        expect(validateQuery("user:pricing").isValid).toBe(false);
      });

      test("'user:@me' is not valid", () => {
        expect(validateQuery("user:@me").isValid).toBe(false);
      });

      test("'user:michael:yuen' is not valid", () => {
        expect(validateQuery("user:michael:yuen").isValid).toBe(false);
      });

      test("'user:michaelyuen' is valid", () => {
        expect(validateQuery("user:michaelyuen").isValid).toBe(true);
      });

      test("'user:michael1' is valid", () => {
        expect(validateQuery("user:michaelyuen").isValid).toBe(true);
      });

      test("'user:michael-1' is valid", () => {
        expect(validateQuery("user:michaelyuen").isValid).toBe(true);
      });

      test("'user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' is valid", () => {
        expect(
          validateQuery("user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").isValid
        ).toBe(true);
      });

      test("'user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' is not valid", () => {
        expect(
          validateQuery("user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").isValid
        ).toBe(false);
      });
    });

    describe("stars qualifiers", () => {
      test("'stars' is not valid", () => {
        expect(validateQuery("stars").isValid).toBe(false);
      });

      test("'stars user' is not valid", () => {
        expect(validateQuery("stars user").isValid).toBe(false);
      });

      test("'stars:' is not valid", () => {
        expect(validateQuery("stars:").isValid).toBe(false);
      });

      test("'stars:user' is not valid", () => {
        expect(validateQuery("stars:user").isValid).toBe(false);
      });

      test("'stars:anything' is not valid", () => {
        expect(validateQuery("stars:anything").isValid).toBe(false);
      });

      test("'stars:10' is valid", () => {
        expect(validateQuery("stars:10").isValid).toBe(true);
      });

      test("'stars:10x' is valid", () => {
        expect(validateQuery("stars:10x").isValid).toBe(false);
      });

      test("'stars:>10' is valid", () => {
        expect(validateQuery("stars:>10").isValid).toBe(true);
      });

      test("'stars:10>' is not valid", () => {
        expect(validateQuery("stars:10>").isValid).toBe(false);
      });

      test("'stars:>>10' is valid", () => {
        expect(validateQuery("stars:>>10").isValid).toBe(false);
      });

      test("'stars:>==10' is valid", () => {
        expect(validateQuery("stars:>==10").isValid).toBe(false);
      });

      test("'stars:>=10' is valid", () => {
        expect(validateQuery("stars:>=10").isValid).toBe(true);
      });

      test("'stars:=>10' is not valid", () => {
        expect(validateQuery("stars:=>10").isValid).toBe(false);
      });

      test("'stars:<10' is valid", () => {
        expect(validateQuery("stars:<10").isValid).toBe(true);
      });

      test("'stars:<=10' is valid", () => {
        expect(validateQuery("stars:<=10").isValid).toBe(true);
      });

      test("'stars:10..500' is valid", () => {
        expect(validateQuery("stars:10..500").isValid).toBe(true);
      });

      test("'stars:10...500' is not valid", () => {
        expect(validateQuery("stars:10...500").isValid).toBe(false);
      });

      test("'stars:10-500' is not valid", () => {
        expect(validateQuery("stars:10-500").isValid).toBe(false);
      });

      test("'stars:10..*' is valid", () => {
        expect(validateQuery("stars:10..*").isValid).toBe(true);
      });

      test("'stars:10--*' is not valid", () => {
        expect(validateQuery("stars:10--*").isValid).toBe(false);
      });

      test("'stars:*..500' is valid", () => {
        expect(validateQuery("stars:*..500").isValid).toBe(true);
      });
    });

    describe("combined user and stars qualifiers", () => {
      test("'user:atom stars:10..25' is valid", () => {
        expect(validateQuery("user:atom stars:10..25").isValid).toBe(true);
      });

      test("'stars:10..25 user:atom' is valid", () => {
        expect(validateQuery("stars:10..25 user:atom").isValid).toBe(true);
      });

      test("'user:atom stars:10..25 user:react' is valid'", () => {
        expect(validateQuery("user:atom stars:10..25 user:react").isValid).toBe(
          true
        );
      });

      test("'user:atom  user:react user:foo stars:10..25 stars:>500' is valid'", () => {
        expect(
          validateQuery(
            "user:atom  user:react user:foo stars:10..25 stars:>500"
          ).isValid
        ).toBe(true);
      });

      test("'user:atom stars:10-25' is valid'", () => {
        expect(validateQuery("user:atom stars:10-25").isValid).toBe(false);
      });
    });
  });
});
