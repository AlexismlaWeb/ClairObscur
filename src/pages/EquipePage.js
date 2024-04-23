import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TeamMember from "../components/TeamMember";

const EquipePage = () => {

  const teamMembers = [
    {
      photoPosition: "right",
      name: "Emilie Durand",
      description: "Emilie possède une passion pour le développement durable et une expertise en gestion de projets environnementaux. Son approche innovante en matière de solutions écologiques inspire l'équipe à adopter des pratiques plus vertes.",
      image: "Item11.png"
    },
    {
      photoPosition: "left",
      name: "Lucas Moreau",
      description: "Avec une expérience significative dans le domaine des technologies de l'information, Lucas apporte une perspective technique essentielle à nos projets. Son engagement envers l'excellence opérationnelle est un pilier de notre succès.",
      image: "Item11.png"
    },
    {
      photoPosition: "right",
      name: "Sophie Petit",
      description: "Sophie, spécialiste en marketing digital, utilise sa créativité pour renforcer notre présence en ligne. Son expertise en stratégies de contenu et médias sociaux est cruciale pour notre communication externe.",
      image: "Item11.png"
    },
    {
      photoPosition: "left",
      name: "Antoine Girard",
      description: "Antoine est un architecte logiciel avec une passion pour le code propre et les architectures évolutives. Son travail est fondamental pour maintenir notre infrastructure technologique agile et performante.",
      image: "Item11.png"
    }
  ];
  

  return (
    <div>
      <Header />
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            photoPosition={member.photoPosition}
            name={member.name}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EquipePage;
