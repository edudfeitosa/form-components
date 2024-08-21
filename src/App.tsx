import "@/ui/styles/app/styles.scss"

import Home from '@/pages/home/Home';
import Header from "@/ui/components/surfaces/header/Header";

const App = () => (
    <>
        <Header/>
        <main>
            <Home/>
        </main>
    </>
);

export default App
