import { collatedTasks } from '../constants';

export const collatedTasksExist = selectedProjects => {
  collatedTasks.find(task => task.key === selectedProjects);
};
