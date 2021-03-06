import { COMBINED_TASKS, THEME_MAP } from "../constants";

export const combinedTasksExist = selectedProject => {
  return COMBINED_TASKS.find(task => task.key === selectedProject);
};

export const getTitle = (projects, projectId) => {
  return projects.find(project => project.projectId === projectId);
};

export const getCombinedTitle = (projects, key) =>
  projects.find(project => project.key === key);

export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateId = (() => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars = [];

  return function() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join("");

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();

export const getThemeByName = theme => {
  return THEME_MAP[theme];
};
