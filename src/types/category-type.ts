type IconName =
  | "MingcuteHome3Line"
  | "MingcuteChartBarLine"
  | "MingcuteNewdotLine"
  | "MingcuteCalendarTimeAddLine"
  | "MingcuteUserQuestionFill"
  | "MingcutePencil3AiLine";

export type CategoryType = {
  id: string;
  label: string;
  link: string;
  icon: IconName;
};
