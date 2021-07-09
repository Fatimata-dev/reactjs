import { useState } from "react";

export default function useSearch(init='') {
    const [recherche, setRecherche] = useState(init);
    const onSearch = (search) => {
        if (search.startsWith('Av')) {
            setRecherche(search);
            console.log();
        } else {
            console.log('Votre recherche doit commencer par Av')
        }
    }
    return [recherche, onSearch];
}
