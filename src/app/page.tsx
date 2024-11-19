import { Footer, Main, Sidebar } from "./components";

export default function Home() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
