import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import VeriFyArticles from "../Components/AdminPanel/Pages/VeriFyArticles";
import { baseUrl } from "../Variable";

const fakeArticle = {
  id: 87,
  owner: {
    id: 4,
    username: "username",
  },
  book: {
    id: 35,
    name: "آرزوهای بزرگ",
  },
  created: "2022-05-09T04:43:55.795000Z",
  created_jalali: "1401/02/19",
  title: "ارزوهای بزرگ من..",
  body: "<h2>خلاصه‌ای از داستان آرزوهای بزرگ</h2><p>داستان آرزوهای بزرگ از زبان پسر 7 ساله‌ای به نام «پيپ» روایت&nbsp; می‌شود و تا 35 سالگی او ادامه پیدا می‌کند. پیپ پسری است كه با خواهر و شوهرخواهر آهنگرش زندگي مي‌كند. آن‌ها زندگی محقر و فروتنانه‌ای را در کلبه‌ای روستایی می‌گذرانند.</p><p>مدت زمانی می‌گذرد و زنی میانسال و ثروتمند به نام «خانم هاویشام» از پیپ می‌خواهد تا گاهی برای حرف زدن و همنشینی به او سر بزند. هاویشام زنی بداخلاق است که در عمارتی قدیمی، فرسوده و نامرتب، که در آن غم و اندوه گذشته موج می‌زند زندگی می‌کند. معشوقه‌ی خانم هاویشام در گذشته‌ و درست هنگام مراسم عروسی، او را ظالمانه ترک کرده است. به همین دلیل او از مردها متنفر است و می‌خواهد که از مردها انتقام بگیرد.</p><p>خانم هاویشام دختر خوانده‌ای زیبا، اما مغرور و لجوج به نام «اِستِلا» را به سرپرستی گرفته است تا او را مثل خودش متنفر و کینه‌جو از مردان تربیت کند. پیپ بعد از مدتی رفت و آمد به این خانه دل‌بسته‌ی استلای مغرور می‌شود. اما درست از زمانی که دخترک او را به خاطر شرایط زندگی‌اش تحقیر می‌کند، پیپ آرزوهای بزرگی را در سر می‌پروارند و این آرزو رهایی از زندگی محقر روستایی و زندگی کردن مثل نجیب‌زادگان و اشرافیان است. از این لحظات داستان پیپ پی آرزوهای بزرگ خود می‌رود و با حوادث و اتفاقات و در نهایت پایانی عجیب مواجه می‌شود.</p><h3><strong>زندگی چارلز دیکنز؛ از نشریه تا کتاب</strong></h3><p>چارلز جان هوفام دیکنز، روزنامه‌نگار، رمان‌نویس و فعال اجتماعی متولد 7 فوریه سال 1812 در انگلستان است. پدرش کارمند اداره کارپردازی نیروی دریایی بود اما به علت ولخرجی‌های افراطی باعث فقر خانواده‌اش شد. به همین دلیل دیکنز که در آن زمان ۱۲ سالش بود&nbsp; برای امرار معاش مجبور به کار در کارخانه‌ی واکس‌سازی شد. شاید بتوان گفت تاثیر همین زندگی محقرانه دیکنز در کودکی به شکل‌گیری شخصیت «پیپ» در داستان آرزوهای بزرگ هم کمک کرد.</p><p>دیکنز برای نثر توانمندش و خلق شخصیت‌هایی ماندگار در تاریخ ادبیات محبوبیت جهانی کسب کرده ‌است. از آثار او می‌توان «دیوید کاپرفیلد»، «آرزوهای بزرگ»، «الیور تویست»، «داستان دو شهر» ، «نیکلاس نیکلبی»، «سرود کریسمس»، «دوریت کوچک»،&nbsp; «خانه قانون‌زده» را&nbsp; نام برد.</p><h3><strong>سبک نگارش دیکنز؛ از واقع‌گرایی تا آرمان‌گرایی</strong></h3><p>افرادی به مهارت گزارش‌نویسی دست پیدا می‌کنند و این مهارت را به عنوان شغل انجام می‌دهند، به طبع نگاه دقیق‌تر و متمرکزتری از پیرامون خود پیدا می‌کنند و موفق به روایت تصاویر واقع‌گرایانه‌ای از مردم اجتماع می‌شوند. با نگاه به جنس کلمات، توصیفات، فضاسازی‌ها و شخصیت‌پردازی‌های دیکنز در رمان‌هایش می‌توان متوجه تاثیرپذیری آثار دیکنز از ایامی شد که به عنوان گزارش‌نویس و روزنامه‌نگار فعالیت می‌کرده است.</p><p>دیکنز تمام داستان‌های خود را اوایل به صورت دنباله‌دار در نشریه‌ها منتشر می‌کرد و از بازخورد خوانندگان خود درباره‌ی داستان‌ها استقبال می‌کرد و بعدها همه‌ی داستان‌هایش را در قالب کتاب رمان منتشر کرد.</p><p>دیکنز نویسنده‌ای رئالیست یا به تعبیر امروزی واقع‌گراست. او در عصر ویکتوریایی به طرز شگفت‌انگیزی آثاری برجسته با سبک اجتماعی خلق کرد. او در آثارش با زبانی قدرتمند از دغدغه‌های اجتماعی روز سخن می‌گوید. دیکنز به خوبی قشر فقیر و طبقات پایین اجتماع را می‌شناسد.</p><p>&nbsp;شخصیت پیپ در رمان آرزوهای بزرگ یکی از همین افراد جامعه است که به علت فقر با تحقیر و توهین از طرف ثروتمندان و قدرتمندان جامعه مواجه می‌شود. پیپ برای عقب نماندن از افراد بالا دست به دنبال آرزوهای خود می‌رود. دیكنز زبان نسبتاً دشواری دارد که گاه آن را با طنز آمیخته ‌می‌کند و شخصیت‌هایی ماندگار&nbsp; مثل پیپ در رمان آرزوهای بزرگ خلق می‌کند.</p><p>از جهاتی می‌توان رمان‌های دیكنز را آرمانی هم تلقی کرد. او در عین نشان دادن فقر و اختلاف طبقاتی جامعه تصویری از عشق، تلاش و پشتکار را با پیرنگی ساده نشان می‌دهد. او با آرمان‌گرایی خود مردم را امیدوار می‌کند و شاید بتوان گفت همین علاقه‌ی عموم به آثارش یکی از دلایل موفقیت اوست. دیکنز شخصیت‌هایی آرمانی و با احساس خلق می‌کند که در تضاد با جامعه هستند. داستان‌هایی که نکات اخلاقی را در عین روایت‌های او از وضعیت جامعه نشان می‌دهد. نمونه آرمانگرایی او را می‌توان در کتاب «الیورتوییست» مشاهده کرد. دیکنز در این کتاب تصویری از پسری آرمان‌گرا را نشان می‌دهد که هیچ‌گاه از ارزش‌های خود دست نمی‌کشد.</p><p>نثر و سبک مشخص دیکنز تنها با روایت‌گری از اوضاع سیاسی و اجتماعی و اختلاف طبقات جامعه تعریف نمی‌شود بلکه او برای توصیف آدم‌ها و احساساتشان صنایع ادبی زیبا و تاثیرگذار را به کار می‌گیرد که نشان از نبوغ و تبحر این نویسنده انگلیسی در خلق آثار بی بدیل است.</p><h4><strong>درونمایه داستان آرزوهای بزرگ دیکنز</strong></h4><p>آرزوهای بزرگ&nbsp; Great Expectations جزو بهترین آثار دیکنز است که می‌توان گفت چارلز دیكنز در نگارش این رمان از درونمایه‌های تقابل اشراف و طبقه فرودست، عشق و وحشت، قتل و جنایت می‌گوید. او در این کتاب تضاد تاریکی و روشنایی را برای خواننده به تصویر می‌کشد. پیت با توصیف فضاهای تاریک مثل&nbsp; باغ کثیف و نامرتب خانم هاویشام و جرم و جنایاتی که در رمان اتفاق می‌افتد، حس ترس و سردرگمی خود را به خواننده القا می‌کند این تاریکی نشان از مسیر زندگی پیپ است که او در آن گم شده است. اما آنچه به خواننده حس رضایت می‌دهد، نور امیدی است که این تاریکی را روشن می‌کند.</p><p>آرزوهای بزرگ روایتی از سختی‌ها و رنج‌هایی است که هر انسانی ممکن است در طول زندگی خود با آن‌ها مواجه شود. مشکلاتی که حتی ممکن است انسان را از ارزش‌ها و شرافت وجودی او دور کند. این رمان نشان می‌دهد که مالکیت و ثروت نمی‌توانند درون شخصیت‌ها را تغییر دهند و این که برای رسیدن به خود واقعی و ارزش ذاتی مقدس خودمان باید پای در مسیر درست بگذاریم.</p><p>چارلز دیکنز در کتاب آرزوهای بزرگ به واسطه اعمال و رفتار شخصیت‌ها صفات بد مثل طمع، کینه، سنگدلی و خساست را در مقابل صفات نیکویی مثل قناعت، جوانمردی، بخشش و فداکاری را نشان می‌دهد. این همان تصویر آرمانی و واقع‌گرایانه‌ای است که باعث درخشش آثار دیکنز در جهان شده است.</p><p><strong>چارلز دیکنز در سینما و تلوزیون</strong></p><p>بی‌تردید چرلز دیکنز یکی از محبوب‌ترین نویسنده‌های کشور انگلستان بعد از «ویلیام شکسپیر» است. دیکنز نویسنده‌ی پر کاری بوده است و در اغلب ژانرها مثل رمان، داستان کوتاه، نمایشنامه و متون غیر داستانی مطلب دارد. اما می‌توان گفت که سینما و تئاتر دو قابی بودند که باعث شهرت بیش‌تر او در جهان شدند.احتمالا خیلی از افرادی که حتی از چارلز دیکنز کتابی هم نخواندند او را به واسطه‌ی فیلم‌ها اقتباسی ساخته شده از آثارش می‌شناسند.</p><p>«دیوید لین» کارگردان و فیلمنامه‌نویس مشهور انگلستان در سال 1946 با اقتباس از داستان آرزوهای بزرگ اثر چارلز دیکنز فیلمی با همین نام ساخت. این فیلم به خوبی توانست مردم را با واقعیت‌های اجتماعی و سیاسی که دیکنز در کتاب روایت کرده بود آشنا کند. فیلم دیوید لین در سال 1947 برنده جایزه اسکار بهترین فیلمبرداری فیلم سیاه و سفید شد.</p><p>در سال ۲۰۱۲&nbsp; جدیدترین اقتباس از کتاب «آرزوهای بزرگ» به کارگردانی «مایک نیوول» ساخته شد. این فیلم که در ژانر درام ساخته شده که در آن «رالف فاینس» و «هلنا بونهام کارتر» نقش‌آفرینی کرده‌اند.</p><p><strong>دیکنز و ترجمه‌ی آثار او به زبان فارسی</strong></p><p>خواندن آثار دیکنز به زبان اصلی و ترجمه تفاوت‌هایی دارد. چرا که منتقل کردن سبک زبانی و صنایع ادبی خاص دیکنز به فارسی کمی مشکل است. سبک دیکنز به گونه‌ای است که نباید ترجمه‌ی آن از نظر کیفی بالاتر یا پایین‌تر از متن اصلی باشد. البته این موضوع که غالب مترجمان ایرانی سراغ آثار اسطوره‌های رمان می‌روند خود جای تامل دارد. آثار دیکنز هم از قاعده مستثنی نبوده و ترجمه‌های زیادی از آن‌ها در بازار انتشارات وجود دارد.&nbsp;</p><p>&nbsp;«ابراهیم یونسی» مترجم برجسته‌ای است كه بیش از 40 ترجمه از آثار برجسته ایران را در کارنامه دارد. او با حفظ سبک و لحن دیکنز «آرزوهای بزرگ»، «خانه قانون‌زده» و «داستان دو شهر» را به فارسی برگردانده است. ترجمه «عنایت‌الله شکیباپور» از کتاب آرزوهای بزرگ یکی از ترجمه‌های قدیمی این اثر است. «محمد قاضی» و «رضا عقیلی» هم از مترجمان اثر دیکنز به نام «دوریت كوچك» هستند. از دیگر مترجمان شناخته شده‌ در ایران که از آثار دیکنز ترجمه دارند «مهدی غبرایی»، «مهدی سحابی» و «مینو مشیری» هستند.</p><p>اما باید پذیرفت که زبان ترجمه آثار کلاسیک بعد از گذشت سالیان طولانی باید انعطاف داشته باشد تا بتوان آن را به نسل جدید خوانندگان معرفی کرد.</p><p>«محسن سلیمانی» مترجم دیگری است که کتاب آرزوهای بزرگ را به فارسی برگردانده است. این کتاب را نشر افق منتشر کرده است. ترجمه‌ی این اثر به شکلی صورت گرفته است که مخاطبان نسل جدید را با خود همراه می‌کند.</p><p>&nbsp;از دیگر ترجمه‌های کتاب آرزوهای بزرگ می‌توان به ترجمه‌ی« حميدرضا بلوچ» نشر مجید، ترجمه‌ی «ابراهیم یونسی» نشر دوستان، ترجمه‌ی « پروین ادیب» نشر پارسه، ترجمه‌ی «حامد اشرفی آیدنلو» نشر موسسه اندیشه کامیاب اشاره کرد.</p>",
  summary:
    "آثار ماندگار و بی نظیر چارلز دیکنز باعث شده تا محبوبیت او از محدوده کشور انگلستان فراتر رود و امروزه همه‌ی جهان او را به عنوان رمان‌نویسی با دغدغه‌های اجتماعی بشناسند. «آرزوهای بزرگ» یکی از مشهورترین آثار اوست که در آن اختلاف طبقات کارگری با چاشنی روابط عاشقانه در روزگاری پر جرم و جنایت روایت می‌شود.",
  image: "/media/articles/default.jpg",
  is_verified: false,
};

test("Testing render with no error", async () => {
  render(<VeriFyArticles article={fakeArticle} />);
});

test("Testing rendering for small mode with no error", async () => {
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
});

test("Testing show article btn", async () => {
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
  const btn = await screen.findByText("مشاهده مقاله");
  expect(btn).toBeInTheDocument;
});

test("Testing change article status btn", async () => {
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
  const btn = await screen.findByTestId("change-status-of-article");
  expect(btn).toBeInTheDocument;
});

test("Testing static contents", async () => {
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
  const s1 = await screen.findByText(/توسط/);
  const s2 = await screen.findByText(/پیش نمایش/);
  const s3 = await screen.findByText(/در تاریخ/);
  expect(s1).toBeInTheDocument;
  expect(s2).toBeInTheDocument;
  expect(s3).toBeInTheDocument;
});

test("Functional test for show article btn to show dialog after click", async () => {
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
  const btn = await screen.findByText("مشاهده مقاله");
  fireEvent.click(btn);
  const clodeDialogBtn = await screen.findByTestId("icon-btn-close-dialog");
  expect(clodeDialogBtn).toBeInTheDocument;
});

test("Functional test for verify article btn", async () => {
  const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
  global.fetch = mockFetch;
  render(<VeriFyArticles renderSquare={true} article={fakeArticle} />);
  const btn = await screen.findByTestId("change-status-of-article");
  fireEvent.click(btn);
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      baseUrl + "/admin-panel/article/verify/" + fakeArticle.id
    );
  });
});
