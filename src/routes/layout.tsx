import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="/qwik">Made with Qwik</a>
      </footer>
    </>
  );
});
