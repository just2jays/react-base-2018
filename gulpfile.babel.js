import requireDir from 'require-dir';

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./dev/tasks', {
  recurse: true
});