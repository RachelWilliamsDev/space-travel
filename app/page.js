import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative flex w-screen">
      <div className="absolute bg-homepageMobile lg:bg-homepage w-full h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat">
        <NavBar />
      </div>
    </div>
  );
}
