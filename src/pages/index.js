import { DefaultTasks } from "./default";
import { useEffectTasks } from "./useEffect";
import { useStateTasks } from "./useState";
import { useRefTasks } from "./useRef";
import { useMemoTasks } from "./useMemo";

const themes = {
  default: DefaultTasks,
  useState: useStateTasks,
  useEffect: useEffectTasks,
  useRef: useRefTasks,
  useMemo: useMemoTasks,
};

export { themes };
