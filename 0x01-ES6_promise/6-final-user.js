import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  const promise = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promise.then((outcomes) => {
    for (const item of outcomes) {
      result.push(
        {
          status: item.status,
          value: item.value,
        },
      );
    }
    return result;
  });
}
