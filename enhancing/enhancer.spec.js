const enhancer = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("enhancer", () => {
    describe("item", () => {
      it("should accept an item", () => {
        const item = {
          name: "Mjolnir",
          durability: 100,
          enhancement: 0
        };
        expect(item.name).toEqual("Mjolnir");
        expect(item.durability).toEqual(100);
        expect(item.enhancement).toEqual(0);
      });
    });

    describe("repair(item)", () => {
      it("should repair an item", () => {
        const item = {
          name: "Mjolnir",
          durability: 10,
          enhancement: 16
        };
        expect(enhancer.repair(item).name).toEqual(item.name);
        expect(enhancer.repair(item).durability).toEqual(100);
        expect(enhancer.repair(item).enhancement).toEqual(item.enhancement);
      });

      it("should not change the name of an item", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.repair(item).name).toEqual(item.name);
      });

      it("should not change the enhancement of an item", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.repair(item).enhancement).toEqual(item.enhancement);
      });

      it("should change the durability of an item to 100", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.repair(item).durability).toEqual(100);
      });
    });

    describe("succeed(item)", () => {
      it("should return an enhanced item", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.succeed(item).name).toEqual(item.name);
        expect(enhancer.succeed(item).durability).toEqual(item.durability);
        expect(enhancer.succeed(item).enhancement).toEqual(
          item.enhancement + 1
        );
      });

      it("should not increase an item's enhancement once enhancement = 20", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 20
        };
        expect(enhancer.succeed(item).enhancement).toEqual(20);
      });

      it("should not change the item name", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.succeed(item).name).toEqual(item.name);
      });

      it("should not change the durability of the item", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.succeed(item).durability).toEqual(item.durability);
      });

      it("should increase the enhancement of an item by 1", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.succeed(item).enhancement).toEqual(
          item.enhancement + 1
        );
      });
    });

    describe("fail(item)", () => {
      it("given an enhancement of 0, returns an item with durability decreased by 5", () => {
        const item = {
          name: "Mjolnir",
          durability: 100,
          enhancement: 0
        };
        expect(enhancer.fail(item).durability).toEqual(item.durability - 5);
      });

      it("given an enhancement of 14, returns an item with durability decreased by 5", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 14
        };
        expect(enhancer.fail(item).durability).toEqual(item.durability - 5);
      });

      it("given enhancement 15, returns item with durability -10", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 15
        };
        expect(enhancer.fail(item).durability).toEqual(item.durability - 10);
      });

      it("given an enhancement of 16, returns an item with durability -10 & enhancement -1", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 16
        };
        expect(enhancer.fail(item).durability).toEqual(item.durability - 10);
        expect(enhancer.fail(item).enhancement).toEqual(item.enhancement);
      });

      it("given enhancement > 16, returns item with -1 enhancement, -10 durability", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 17
        };
        expect(enhancer.fail(item).durability).toEqual(item.durability - 10);
        expect(enhancer.fail(item).enhancement).toEqual(item.enhancement - 1);
      });
    });

    describe("enhancer(get)", () => {
      it("should get an item", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.get(item)).toEqual(item);
      });

      it("should get an item with an unmodified name", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 0
        };
        expect(enhancer.get(item).name).toEqual(item.name);
      });

      it("should get an item with a new name ", () => {
        const item = {
          name: "Mjolnir",
          durability: 0,
          enhancement: 15
        };
        expect(enhancer.get(item).name).toEqual(
          `[+${item.enhancement}] ${item.name}`
        );
      });
    });
  });
});
