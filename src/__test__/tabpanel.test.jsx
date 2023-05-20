import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { baseUrl } from "../Variable";
import BasicTabs from "../Components/Comment/tab";
import axios from "axios";

const fakeShowProfile = {
  data: {
    profile: {
      username: "u214506",
      email: "amirhosseinizadi79@gmail.com",
      nickname: "امیرحسین",
      profile: {
        fullname: null,
        bio: null,
        gender: null,
        born_date: null,
        image: "https://api.ketabbazan.ml/media/profileimages/u214506.jpg",
      },
    },
    read_books: [
      {
        id: 41,
        name: "یادداشت‌های یک دیوانه",
        summary:
          "وجه مشخصه داستان‌های گوگول سادگی قصه‌نویسی، ویژگی قومی، امانت محض نسبت به زندگی، و بکر بودن و سرزندگی خنده‌آور آن‌هاست که همیشه تحت‌تأثیر احساس عمیق غم و دلتنگی قرار می‌گیرد. همه این ویژگی‌ها یک منبع دارند: گوگول شاعر است، شاعر زندگی حقیقی. اولین تأثیری که هر یک از قصه‌های گوگول بر خواننده می‌گذارد این است که با خود بگوید: «چقدر همه این‌ها ساده، عادی، طبیعی، و حقیقی است، و در عین حال چقدر بکر و تازه.» این سادگی قصه‌نویسی، این صراحت لهجه، این پرهیز از نمایش‌پردازی، این پیش‌پاافتادگی و معمولی بودن اتفاقات قصه‌ها، علائم حقیقی و قطعی خلاقیت هستند: این شعری حقیقی است، شعر زندگی خود ماست. تقریباً همه قصه‌های گوگول کمدی‌های سرگرم‌کننده‌ای هستند که با هیچ و پوچ شروع می‌شوند، با هیچ و پوچ ادامه می‌یابند، و به اشک ختم می‌شوند، و در پایان، زندگی نام می‌گیرند. قصه‌هایش همگی همین‌طورند: اولش سرگرم‌کننده، سپس غم! زندگی خود ما هم چنین است: اولش سرگرم کننده، و بعد غم. چقدر شعر، چقدر فلسفه، و چقدر حقیقت در این‌جا نهفته است!» در مقدمه‌ی مترجم آمده است: «بلینسکی او (گوگول) را پدر نثر روس می نامد، تورگینف",
        price: 675200,
        publisher: "نی",
        image_url: "https://bayanbox.ir/view/1480170198130231163/41.jpg",
        created: "2022-04-27T13:55:37Z",
        pdf_url:
          "https://bayanbox.ir/view/7296236966360723742/Yadasht-haye-divaneh.pdf",
        genre_name: "داستانی",
        rate: 2.8333333333333335,
        author: ["نیکلای گوگول"],
      },
      {
        id: 42,
        name: "خنده در تاریکی",
        summary:
          "کتاب روایتگر یک تراژدی است، تراژدی سقوط یک مرد موفق در زندگی خودش، مردی که سال‌هاست به همسر و فرزند خود زندگی شرافتمندانه و شادی را داشته اما به خاطر حسی که او را عشق می‌نامد همسر و زندگی خود را رها می‌کند تا به دختر جوانی که دوستش دارد برسد. دختری که حتی نصف مرد هم سن ندارد!\r\nداستان روایتگر تلخی‌های یک زندگی است.",
        price: 558000,
        publisher: "مروارید",
        image_url: "https://bayanbox.ir/view/4243979726532217584/42.jpg",
        created: "2022-04-27T13:58:36Z",
        pdf_url:
          "https://bayanbox.ir/view/8628728012795144804/Khandeh-dar-tariki.pdf",
        genre_name: "داستانی",
        rate: 3,
        author: ["ولادیمیر ناباکوف"],
      },
    ],
    user_articles: [
      {
        id: 88,
        title: "test",
        image: "https://api.ketabbazan.ml/media/articles/default.jpg",
        book: 41,
        created_jalali: "1402/01/31",
        body: "<p>gygvyvugbihibnin klnilnb gygvyvugbihibnin klnilnb gygvyvugbihibnin klnilnb gygvyvugbihibnin klnilnb gygvyvugbihibnin klnilnb&nbsp;</p>",
        summary: "testtesttestugyufvyfvyfvyvyvyjvyc",
        owner: "امیرحسین",
        owner_id: 29,
        owner_image:
          "https://api.ketabbazan.ml/profile/getimage/?username=u214506",
      },
    ],
    user_comments: [
      {
        book: 39,
        user: 29,
        comment_text: "تستتتتتت",
        created_on: "2023-04-18T08:30:34.201875Z",
      },
      {
        book: 42,
        user: 29,
        comment_text: "interesting",
        created_on: "2023-04-21T11:02:46.668947Z",
      },
      {
        book: 18,
        user: 29,
        comment_text: "oops",
        created_on: "2023-04-22T00:27:41.682338Z",
      },
      {
        book: 18,
        user: 29,
        comment_text: "ymyt",
        created_on: "2023-04-22T00:28:01.164059Z",
      },
      {
        book: 18,
        user: 29,
        comment_text: "opppppp",
        created_on: "2023-04-22T00:28:11.390194Z",
      },
    ],
  },
  status: 200,
  statusText: "OK",
  headers: {
    "content-type": "application/json",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "Token 2458b4a654cf595d19e93bd50efc717a7b4fabfa",
    },
    method: "get",
    url: "http://98521171.pythonanywhere.com/showprofile/?username=u214506",
  },
  request: {},
};

test("Testing render with no error", async () => {
  render(<BasicTabs user={"100"} />);
});

test("Functional test for get profile details", async () => {
  jest.mock("axios");
  axios.get.mockImplementation = () => Promise.resolve(fakeShowProfile);
  render(<BasicTabs user={"100"} />);
  await waitFor(() => setTimeout(() => {}, 2000));

  const res = axios.get("");

  console.log(res)

  const book = await screen.findByText("امیرحسین");
  expect(book).toBeInTheDocument;
});
