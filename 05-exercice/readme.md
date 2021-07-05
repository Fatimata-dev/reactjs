# Exercice 1: Création de composants

*Essayez de faire l’exercice sans regarder le cours.*

1. Générer une nouvelle application nommée 05-exercices
2. Inclure Reactjs : 

        <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
   
3. Créer une div avec un id 'root'
4. Inclure JXS (ne pas oublier de passer le type de la balise script sur text/babel). 
5. Inclure Font Awesome

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

6. Créer un composant fonctionnel, qui retournera une balise header 
7. Dans la balise Header on mettra un titre h1
8. Dans la balise Header on mettra et un logo bookmark ou [une autre icone](https://fontawesome.com/icons?d=gallery)
9. Dans la balise Header on mettra une balise p avec n'importe quel chiffre

10. Creer une classe composant **App**, dont la fonction render reverra une div.
11. Dans cette div, on mettra une balise image, qui aura pour url, une chaine de caractere passé en props.
12. Dans cette div, on mettra une balise div avec dedans:

        - Un h2 pour le texte on utilisera les props. (title pour le nom par exemple)
        - Un p  pour le texte on utilisera les props. (overview pour le nom par exemple)
        - une div avec dedans un lien qui contiendra le texte 'voir plus'


13. Inserer le composant Header dans le rendu de **App** , avec les attributs necessaire pour afficher les props
