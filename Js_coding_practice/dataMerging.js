//Implement a method mergeData, which is used to return a unified view of each user's activities by merging data from each user.

// Sum up the duration fields.
// Combine all the equipment used, de-duplicating the values and sorting alphabetically.

function mergeData(sessions) {
  let result = [];
  const userMap = {};
  for (const session of sessions) {
    const { user, duration, equipment } = session;

    if (!userMap[user]) {
      // first occurence
      const newEntry = { user, duration, equipment };
      result.push(newEntry);
      userMap[user] = newEntry;
    } else {
      const existingEntry = userMap[user];
      existingEntry.duration += duration;
      existingEntry.equipment = Array.from(
        new Set(existingEntry.equipment.concat(equipment))
      ).sort();
    }
  }
  return result;
}

let sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

console.log(mergeData(sessions));
