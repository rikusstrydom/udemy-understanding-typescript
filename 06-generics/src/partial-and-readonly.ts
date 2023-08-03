// Built in generics

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
) {
  let courseGoal: Partial<CourseGoal> = {}; // Partial makes all properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal;
}

const names2: Readonly<string[]> = ['Rikus', 'Maxi'];
// names2.push('Anna');
// names2.pop();
