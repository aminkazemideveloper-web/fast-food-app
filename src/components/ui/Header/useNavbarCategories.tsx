import MingcuteCalendarTimeAddLine from "../../../icons/MingcuteCalendarTimeAddLine";
import MingcuteChartBarLine from "../../../icons/MingcuteChartBarLine";
import MingcuteHome3Line from "../../../icons/MingcuteHome3Line";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";
import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";
import MingcuteUserQuestionFill from "../../../icons/MingcuteUserQuestionFill";

export const useNavbarCategories = () => {
  const navbarsData = [
    { id: 1, label: "صفحه اصلی", link: "/home", icon: <MingcuteHome3Line /> },
    {
      id: 2,
      label: "شعبه ها",
      link: "/branchs",
      icon: <MingcuteChartBarLine />,
    },
    { id: 3, label: "وبلاگ", link: "/blogs", icon: <MingcuteNewdotLine /> },
    {
      id: 4,
      label: "داستان شیلا",
      link: "/shopSotry",
      icon: <MingcuteCalendarTimeAddLine />,
    },
    {
      id: 5,
      label: "ارتباط با ما",
      link: "/contact",
      icon: <MingcuteUserQuestionFill />,
    },
    {
      id: 6,
      label: "فرصت های شغلی",
      link: "/career",
      icon: <MingcuteUserQuestionFill />,
    },
    {
      id: 7,
      label: "سفارش سازمانی",
      link: "/saleB2B",
      icon: <MingcutePencil3AiLine />,
    },
  ];

  return {
    navbarsData,
  };
};
