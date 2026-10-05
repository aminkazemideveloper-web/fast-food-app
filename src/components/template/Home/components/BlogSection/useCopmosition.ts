const blogData = [
  {
    id: "1",
    image:
      "https://shilafood.co/Content/images/4418/news/crop/32800/blogpost.jpg",
    title: "برنده‌های کمپین «۹۰ دقیقه با شیلا» معرفی شدند!",
    sub: "کمپین «۹۰ دقیقه با شیلا» که همزمان با رقابت‌های جام جهانی برگزار شد، به پایان رسید و برندگان خوش‌شانس این کمپین مشخص شدند.",
    desc: "در این کمپین، شرکت‌کنندگان با رعایت شرایط جشنواره در قرعه‌کشی شرکت کردند و در نهایت ۳ برنده نهایی بر اساس تعداد فاکتور خرید در مدت زمان جشنواره، انتخاب شدند.",
    price: {
      heading: "جوایز کمپین",
      javayez: [
        { id: "11", magham: "نفر اول", title: "PlayStation 5 (PS5)" },
        { id: "12", magham: "نفر دوم", title: "یک دستگاه گوشی موبایل" },
        { id: "13", magham: "نفر سوم", title: "یک ساعت هوشمند" },
      ],
    },
    winners: [
      {
        id: "111",
        jayz: "یک دستگاه ps5",
        name: "آقای سهیل راستکار",
        img: "https://shilafood.co/Content/images/4418//32801/mceu_93732882111785590205998.jpg",
      },
      {
        id: "112",
        jayz: "یک دستگاه گوشی هوشمند",
        name: "آقای علیرضا مهدوی",
        img: "https://shilafood.co/Content/images/4418//32802/mceu_76475518421785590246606.jpg",
      },
      {
        id: "113",
        jayz: "یک عدد ساعت هوشمند",
        name: "آقای عرفان منادی",
        img: "https://shilafood.co/Content/images/4418//32803/mceu_50613604731785590267779.jpg",
      },
    ],
  },
];

export const useComposition = () => {
  return { blogData };
};
