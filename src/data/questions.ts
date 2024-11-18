import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce que l'inscription des électeurs dans le processus électoral ?",
    options: [
      "Un processus de comptage des votes",
      "L'enregistrement officiel des électeurs éligibles",
      "Les activités du jour de l'élection",
      "La planification de la campagne"
    ],
    correctAnswer: 1,
    explanation: "L'inscription des électeurs est le processus par lequel les citoyens éligibles sont officiellement enregistrés dans le système électoral pour participer aux élections."
  },
  {
    id: 2,
    question: "Que signifie le terme 'bulletin de vote' en termes électoraux ?",
    options: [
      "Un travailleur électoral",
      "Une machine à voter",
      "Le document officiel de vote ou formulaire",
      "Un bureau de vote"
    ],
    correctAnswer: 2,
    explanation: "Un bulletin de vote est le document officiel ou l'interface électronique utilisée par les électeurs pour marquer leurs choix électoraux."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'un bureau de vote ?",
    options: [
      "Un lieu où les votes sont comptés",
      "Un lieu désigné où les gens votent",
      "Un bureau de campagne électorale",
      "Un centre d'inscription des électeurs"
    ],
    correctAnswer: 1,
    explanation: "Un bureau de vote est un lieu officiel où les électeurs vont pour voter lors d'une élection."
  },
  {
    id: 4,
    question: "Que signifie 'taux de participation' ?",
    options: [
      "Les résultats des élections",
      "Les événements de campagne",
      "Le pourcentage d'électeurs éligibles qui ont voté",
      "Le processus de comptage des votes"
    ],
    correctAnswer: 2,
    explanation: "Le taux de participation fait référence au pourcentage d'électeurs éligibles qui participent réellement à une élection."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une liste électorale ?",
    options: [
      "Une liste d'électeurs inscrits",
      "Un type de machine à voter",
      "Le calendrier du jour de l'élection",
      "Un rapport de financement de campagne"
    ],
    correctAnswer: 0,
    explanation: "Une liste électorale est une liste officielle de toutes les personnes inscrites et éligibles pour voter dans une zone spécifique."
  },
  {
    id: 6,
    question: "Que signifie 'circonscription' ?",
    options: [
      "Un parti politique",
      "Une zone ou un district électoral",
      "Une méthode de vote",
      "Un officiel de l'élection"
    ],
    correctAnswer: 1,
    explanation: "Une circonscription est une zone géographique dont les résidents votent pour élire un représentant."
  },
  {
    id: 7,
    question: "Qu'est-ce qu'un 'bulletin de vote nul' ?",
    options: [
      "Un vote tardif",
      "Un bulletin de vote mal marqué",
      "Une erreur de vote électronique",
      "Un bulletin de vote inutilisé"
    ],
    correctAnswer: 1,
    explanation: "Un bulletin de vote nul est un bulletin de vote qui a été mal marqué ou endommagé, le rendant invalide."
  },
  {
    id: 8,
    question: "Que signifie 'abstention' en termes de vote ?",
    options: [
      "Voter à l'avance",
      "Choisir de ne pas voter",
      "Voter par courrier",
      "Vote multiple"
    ],
    correctAnswer: 1,
    explanation: "L'abstention fait référence au fait qu'un électeur éligible choisit de ne pas participer à une élection."
  },
  {
    id: 9,
    question: "Qu'est-ce qu'une campagne électorale ?",
    options: [
      "Le processus de comptage des votes",
      "La période d'inscription des électeurs",
      "Un effort organisé pour influencer les électeurs",
      "L'annonce des résultats des élections"
    ],
    correctAnswer: 2,
    explanation: "Une campagne électorale est un effort organisé par les candidats ou les partis pour obtenir le soutien des électeurs avant une élection."
  },
  {
    id: 10,
    question: "Qu'est-ce que la fraude électorale ?",
    options: [
      "Interférence illégale avec le processus électoral",
      "Comptage normal des votes",
      "Activités régulières de campagne",
      "Inscription des électeurs"
    ],
    correctAnswer: 0,
    explanation: "La fraude électorale fait référence à l'interférence illégale avec le processus électoral, y compris la manipulation des votes ou l'intimidation des électeurs."
  }
];
