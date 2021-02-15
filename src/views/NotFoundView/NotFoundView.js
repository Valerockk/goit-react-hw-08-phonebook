import style from "./NotFoundView.module.css";

export default function NotFoundView() {
  return (
    <main role="alert" className={style.main}>
      <h1 className={style.title}>Page not found</h1>
    </main>
  );
}
