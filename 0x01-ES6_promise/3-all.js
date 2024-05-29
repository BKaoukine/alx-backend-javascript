import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const Promise1 = uploadPhoto();
  const Promise2 = createUser();

  return Promise.all([Promise1, Promise2])
    .then((value) => {
      console.log(
        `${value[0].body} ${value[1].firstName} ${value[1].lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
