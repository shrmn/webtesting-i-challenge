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

    describe("fail(item)", () => {});
  });
});
