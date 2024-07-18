import { DefaultTasks } from "./default";
import { useEffectTasks } from "./useEffect";
import { useStateTasks } from "./useState";

const themes = {
  default: DefaultTasks,
  useState: useStateTasks,
  useEffect: useEffectTasks,
};

export { themes };
