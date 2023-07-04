import { useState } from "react";
import Header from "./components/Header";
import Me from "./components/Me";

function App() {
    const[darkMode, setDarkMode] = useState(false);

    return(
        <div className={darkMode && "dark"}>
           <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

            <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <Me />
            </main>
        </div>
    );
}
export default App;
