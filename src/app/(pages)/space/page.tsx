import Navbar from "@/components/navbar";
import SpaceKeyword from "@/components/space/SpaceKeyword";

export default function SpacePage() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
                <p>AI를 통해 추진된 가게</p>
                <SpaceKeyword keyword="의류&패션" />
            </div>
            <Navbar />
        </>
    );
}
