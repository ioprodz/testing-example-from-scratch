const { test, expect } = require("./testing.tools"); // testing tools
const { Invoice } = require("./invoice"); // unit under test

test("Test: when list is empty then result is 0", () => {
  const invoice = new Invoice([]);
  expect(invoice.total()).toBe(0);
});

test("Test: when list has one element then result is price*qty+shipping", () => {
  const invoice = new Invoice([
    {
      price: 100,
      qty: 2,
    },
  ]);
  expect(invoice.total()).toBe(215);
});

test("Test: when list has one element then result is price*qty+shipping", () => {
  const invoice = new Invoice([
    {
      price: 100,
      qty: 2,
    },
    {
      price: 150,
      qty: 3,
    },
  ]);
  expect(invoice.total()).toBe(665);
});

test("when all items have free shipping then shipping is not added", () => {
  const invoice = new Invoice([
    {
      price: 100,
      qty: 2,
      freeShipping: true,
    },
    {
      price: 150,
      qty: 3,
      freeShipping: true,
    },
  ]);
  expect(invoice.total()).toBe(650);
});

test("when not all items have free shipping then shipping is added", () => {
  const invoice = new Invoice([
    {
      price: 100,
      qty: 2,
      freeShipping: true,
    },
    {
      price: 150,
      qty: 3,
    },
  ]);
  expect(invoice.total()).toBe(665);
});

test("when not all items have free shipping then shipping is added", () => {
  const invoice = new Invoice([
    {
      price: 1000,
      qty: 2,
      freeShipping: true,
    },
    {
      price: 150,
      qty: 3,
    },
  ]);
  expect(invoice.total()).toBe(2205);
});

test("if all purchaces are over 2000 then shipping is free + 10% discount", () => {
  const invoice = new Invoice([
    {
      price: 1000,
      qty: 2,
      freeShipping: true,
    },
    {
      price: 100,
      qty: 3,
    },
  ]);
  expect(invoice.total()).toBe(2070);
});
