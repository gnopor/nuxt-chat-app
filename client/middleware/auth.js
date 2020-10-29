export default function({ store, redirect }) {
  try {
    if (!Object.keys(store.state.user).length) {
      redirect("/?message=noUser");
    }
  } catch (error) {
    console.log(error);
  }
}
