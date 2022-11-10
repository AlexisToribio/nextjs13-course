import { Counter } from "./posts/Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      <Counter />
      <marquee
        style={{
          background: "gray",
          marginTop: "10px",
          padding: "10px",
          color: "purple",
        }}
      >
        Practicando Next.js 13
      </marquee>
      {children}
    </div>
  );
}
