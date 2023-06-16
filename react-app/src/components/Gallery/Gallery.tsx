function Profile() {
  return (
    <img
      src="./art.png"
      alt="Katherine Johnson"
      className="
  galleryImage"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
