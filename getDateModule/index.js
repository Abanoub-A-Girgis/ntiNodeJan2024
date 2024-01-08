function arPostDate(inputDateStr) {
  const monthsArabic = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const daysArabic = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const inputDate = new Date(inputDateStr);

  const dayName = daysArabic[inputDate.getDay()];
  const day = inputDate.getDate();
  const monthName = monthsArabic[inputDate.getMonth()];
  const year = inputDate.getFullYear();

  const arabicDate = `${dayName}، ${day} ${monthName} ${year}`;

  return arabicDate;
}

module.exports = { arPostDate };
