import { get } from "./functions";

const translations = {
  routes: {
    home: "Головна",
    news: "Новини",
    payment: "Реквізити",
    docs: "Документи"
  },

  payment: {
    tariffs: "Тарифи",
    title: "Реквізити для оплати членских внесків та електроенергії",
    currentAccount: "Поточний рахунок",
    edrpou: "ЄДРПОУ",
    bankCode: "Код установи банку",
    bankName: "Найменування банку",
    recipientOfPayment: "Одержувач платежу",
    purposeOfPayment: "Призначеня латежу",
    dues: "Членські внески",
    electricity: "Електроенергія",
    template: "Шаблон"
  },

  news: {
    newsTitle: "Заголовок",
    date: "Дата публікації",
    reporter: "Автор"
  }
};

export default path => {
  const res = get(translations, path);

  if (!res) {
    console.error("THERE IS NO TRANSLATION: ", path);
  }

  return res || path;
};
