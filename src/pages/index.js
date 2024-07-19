import { DefaultTasks } from "./default";
import { useEffectTasks } from "./useEffect";
import { useStateTasks } from "./useState";
import { useRefTasks } from "./useRef";

const themes = {
  default: DefaultTasks,
  useState: useStateTasks,
  useEffect: useEffectTasks,
  useRef: useRefTasks,
};

export { themes };
