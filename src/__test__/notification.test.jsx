import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GiftCard from "../Components/GiftNotification/GiftCard";

const fakeGift = {
  book: {
    id: 36,
    name: "خاطرات یک استاد",
    summary:
      "این کتاب روایتی است از سال‌های واپسین زندگی یک استاد رشته پزشکی. او که روزگاری استاد معروفی بوده است در آستانه مرگ خویش روایتگر خاطرات زندگی خود است.",
    price: 300000,
    publisher: "کتاب امروز",
    image_url: "https://bayanbox.ir/view/790562465759322940/36.jpg",
    created: "2022-04-27T13:43:23Z",
    pdf_url:
      "https://bayanbox.ir/view/6828080026109620313/Khaterat-yek-ostad.pdf",
    genre_name: "داستانی",
  },
  sender: {
    username: "username",
    id: 1,
  },
  is_read: false,
  message: "این پیام تست است",
  id: 23,
};

test("Testing render with no error", async () => {
  render(<GiftCard gift={fakeGift} />);
});

test("Testing mark as read btn", async () => {
  render(<GiftCard gift={fakeGift} />);
  const btn = await screen.findByText("متوجه شدم");
  expect(btn).toBeInTheDocument;
});

test("Testing show book btn", async () => {
  render(<GiftCard gift={fakeGift} />);
  const btn = await screen.findByText("مشاهده کتاب");
  expect(btn).toBeInTheDocument;
});

test("Testing static contents", async () => {
  render(<GiftCard gift={fakeGift} />);
  const giftedTxt = await screen.findByTestId("main-message-gift");
  expect(giftedTxt).toBeInTheDocument;
});

test("Testing dynamic contents", async () => {
  render(<GiftCard gift={fakeGift} />);
  const username = await screen.findByText(/username/);
  const message = await screen.findByText(/این پیام تست است/);
  expect(username).toBeInTheDocument;
  expect(message).toBeInTheDocument;
});

test("Functional test if show book btn works currectly", async () => {
  const mockFunction = jest.fn();
  render(<GiftCard goToBookById={mockFunction} gift={fakeGift} />);
  const showbookbtn = await screen.findByText("مشاهده کتاب");
  fireEvent.click(showbookbtn);
  expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalledWith(fakeGift.book.id);
});

test("Functional test if mark as read btn works currectly", async () => {
  const mockFunction = jest.fn();
  render(<GiftCard markAsRead={mockFunction} gift={fakeGift} />);
  const markAsRead = await screen.findByText("متوجه شدم");
  fireEvent.click(markAsRead);
  expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalledWith(fakeGift.id);
});
