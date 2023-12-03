import { useTranslation } from 'react-i18next'
import Typography from '../../components/atoms/Typography.tsx'

export default function Target(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center w-full p-0 md:p-4'>
      <div className='w-11/12 md:w-[800px]'>
        <Typography variant='h1' className='text-primary text-center mb-4'>
          {t('target.title')}
        </Typography>
        <img
          src='https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2013/12/agent-immobilier-independant.png'
          alt='target'
          className='w-full mb-4'
        />
        <Typography variant='text' className='text-neutral-900'>
          Bienvenue chez Rently, l'agence immobilière qui s'est donnée pour
          mission de vous accompagner dans la quête de votre bien idéal. Notre
          objectif est clair : simplifier et personnaliser votre recherche
          immobilière pour vous offrir une expérience sur-mesure et des
          résultats qui dépassent vos attentes. Avec des agences implantées dans
          les plus grandes villes de France, nous sommes votre partenaire de
          proximité pour découvrir le marché immobilier local et trouver la
          perle rare qui vous correspond.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Compréhension et Personnalisation
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          À l'écoute de vos besoins, nous prenons le temps de comprendre votre
          projet de vie pour vous proposer des biens qui s'alignent parfaitement
          avec vos désirs. Notre première étape consiste à établir un profil
          détaillé de vos critères : situation géographique, type de bien
          (maison, appartement, loft, etc.), proximité des commodités, budget,
          potentiel d'investissement, et bien d'autres aspects essentiels qui
          guideront notre recherche.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Expertise Locale et Sélection Rigoureuse
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Notre présence dans les grandes villes de France nous confère une
          connaissance intime du marché local. Cette expertise nous permet de
          sélectionner rigoureusement des biens qui non seulement répondent à
          vos critères, mais qui sont également des investissements judicieux à
          long terme. Nous analysons les tendances du marché, les évolutions des
          quartiers et les opportunités à venir pour vous conseiller au mieux
          dans votre décision.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Accompagnement Complet et Sur-Mesure
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Chez Rently, notre objectif est de vous offrir un accompagnement
          complet tout au long de votre projet immobilier. De la première visite
          à la signature chez le notaire, nous sommes à vos côtés. Nous vous
          aidons à comprendre les nuances du marché, les aspects juridiques et
          financiers de l'achat immobilier, et nous vous apportons notre
          expertise en négociation pour assurer que vous obteniez le meilleur
          accord possible.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Technologie et Innovation
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Nous utilisons les dernières technologies pour rendre votre recherche
          immobilière plus efficace et agréable. Notre site web présente des
          listings détaillés avec des photos haute résolution et des visites
          virtuelles qui vous permettent d'explorer les propriétés depuis le
          confort de votre foyer. Nous proposons également une application
          mobile qui vous alerte en temps réel des nouvelles propriétés
          correspondant à vos critères.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Technologie et Innovation
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Nous utilisons les dernières technologies pour rendre votre recherche
          immobilière plus efficace et agréable. Notre site web présente des
          listings détaillés avec des photos haute résolution et des visites
          virtuelles qui vous permettent d'explorer les propriétés depuis le
          confort de votre foyer. Nous proposons également une application
          mobile qui vous alerte en temps réel des nouvelles propriétés
          correspondant à vos critères.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Transparence et Intégrité
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Rently s'engage à opérer avec la plus grande transparence et
          intégrité. Nous croyons en une communication honnête et ouverte, et
          nous vous fournirons toutes les informations nécessaires pour vous
          permettre de prendre des décisions éclairées. Aucune question n'est
          trop petite, et nous nous assurons que vous soyez pleinement informé à
          chaque étape du processus. Réseau et Partenariats Notre vaste réseau
          de partenaires est un atout majeur dans la réalisation de notre
          objectif. Que ce soit pour des services de déménagement, de rénovation
          ou de financement, nous avons établi des relations avec des
          professionnels de confiance pour vous aider dans tous les aspects de
          votre achat immobilier.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Satisfaction Client et Suivi Post-Achat
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Votre satisfaction est au cœur de notre objectif. Nous mettons tout en
          œuvre pour que votre expérience avec Rently soit positive et
          mémorable. Même après la conclusion de la vente, nous restons
          disponibles pour répondre à vos questions et vous assister dans les
          premiers pas de votre nouvelle aventure immobilière.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Contribution Sociale et Environnementale
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          Nous sommes conscients de notre rôle dans la communauté et de l'impact
          de l'immobilier sur l'environnement. Rently s'engage à promouvoir des
          pratiques durables et à soutenir des projets qui améliorent la qualité
          de vie dans nos villes tout en respectant l'environnement.
        </Typography>
        <Typography variant='h2' className='text-primary text-center mt-4'>
          Notre Mission
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          L'objectif de Rently est simple : vous aider à trouver le bien
          immobilier parfait, celui qui se fait l'écho de vos rêves et
          aspirations. Notre équipe dévouée, notre approche personnalisée, notre
          connaissance du marché et notre engagement envers la satisfaction
          client sont les piliers de notre agence. Avec Rently, vous n'êtes pas
          seulement à la recherche d'une propriété, vous êtes en quête d'un
          foyer, et nous sommes honorés de vous accompagner dans ce voyage. Nous
          vous invitons à nous contacter pour entamer ensemble la recherche de
          votre bien idéal. Chez Rently, votre projet immobilier devient notre
          mission, et nous mettons tout en œuvre pour que votre expérience soit
          aussi réussie que votre futur chez-vous.
        </Typography>
      </div>
    </div>
  )
}
