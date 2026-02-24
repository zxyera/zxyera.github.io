import { harmonyComponent } from "./harmony/harmony_sidebar_component";
import { harmonyAnimation } from "./harmony/harmony_sidebar_animation";

export function harmonySidebar() {
  const baseHarmonyRecord = "/harmonyos/record/";
  return [
    // {
    //   text: "TypeScript",
    //   items: [],
    // },
    // {
    //   text: "ArkTS",
    //   items: [],
    // },
    {
      text: "组件",
      collapsed: true,
      items: harmonyComponent,
    },
    {
      text: "动画",
      items: harmonyAnimation,
    },
  ];
}
