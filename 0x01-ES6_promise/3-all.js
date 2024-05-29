import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((responses) => {
      const [photoResponse, userResponse] = responses;

      console.log(
        photoResponse.body,
        userResponse.firstName,
        userResponse.lastName,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
