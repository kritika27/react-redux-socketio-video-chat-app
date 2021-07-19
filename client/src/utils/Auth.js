import { auth } from "./firebase";

export default function Auth() {
  const provider = new auth.GoogleAuthProvider();

  return auth()
    .signInWithPopup(provider)
    .then((result) => {
      //handle if required
    });
}
