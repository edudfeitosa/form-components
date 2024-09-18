import Home from '@/pages/home/Home.tsx';
import Header from '@/components/core/header/Header.tsx';
import Footer from "@/components/core/footer/Footer.tsx";
import styles from '@/components/app.module.scss';

const App = () => (
    <>
        <Header/>
        <main className={styles.content}>
            <Home />
        </main>
        <Footer />
    </>
);

export default App;
