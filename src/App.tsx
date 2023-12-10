import './App.css'

function App() {
    const age: number = 18;
    const score: number = 1;
    const username: string = "";
    const isAdmin: boolean = false;

    for (let i: number = 1; i <= age; i++) ;
/*
    if (score) {
        console.log("Score ist verfügbar.");

        if (score) {
            console.log("Score wird als wahr bewertet.");
        } else {
            console.log("Score wird als falsch bewertet.");
        }

        if (username) {
            console.log("Benutzername ist verfügbar.");
        }

        if (username) {
            console.log("Benutzername wird als wahr bewertet.");
        } else {
            console.log("Benutzername wird als falsch bewertet.");
        }

        if (isAdmin){
            console.log("isAdmin wird als wahr bewertet.");
        } else {
            console.log("isAdmin ist falsch.");
        }
        if (!isAdmin) {
            console.log("isAdmin ist falsch.");
        } else {
            console.log("isAdmin wird als wahr bewertet.");
        }
    }
*/
    return (
        <>
            <h2>{age}</h2>
            <h2>{age > 17 ? "Du bist volljährig." : "Du bist minderjährig."}</h2>
            <h2>{score ? "Score ist verfügbar." : "Score ist NICHT verfügbar."}</h2>
            <h2>{score ? "Score wird als wahr bewertet." : "Score wird als falsch bewertet."}</h2>
            <h2>{username ? "Username ist verfügbar." : "Username ist NICHT verfügbar."}</h2>
            <h2>{username ? "Username wird als wahr bewertet." : "Username wird als falsch bewertet."}</h2>
            <h2>{isAdmin ? "Admin ist verfügbar." : "Admin ist NICHT verfügbar."}</h2>
            <h2>{!isAdmin ? "Admin wird als wahr bewertet." : "Admin wird als falsch bewertet."}</h2>


        </>
    )
}

export default App
