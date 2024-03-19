import Typography from '../../components/atoms/Typography'

export default function Terms() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-8/12'>
        <Typography variant='h1' className='text-primary text-center mb-2'>
          Mentions légales
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Éditeur du Site
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Rently, société par actions simplifiée (SAS) au capital de 4000€, dont
          le siège social est situé à 12 Rue des Vignobles, Amiens 80000,
          inscrite au Registre du Commerce et des Sociétés de Amiens sous le
          numéro 86287900034, représentée par Charles Henri, en sa qualité de
          Président.
        </Typography>
        <Typography variant='h3'>
          Numéro de téléphone: 06 00 00 00 00 Adresse email: contact@rently.com
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Directeur de la publication
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Charles Henri, en sa qualité de Directeur Général.
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Hébergement du site
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Le site front-rently.mathieudacheux.fr est hébergé par o2switch, dont
          le siège social est situé à Chemin des Pardiaux, 63000
          Clermont-Ferrand, avec le numéro de téléphone : 04 44 44 60 40.
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Protection des données personnelles
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Conformément à la loi relative à l&rsquo;informatique, aux fichiers et
          aux libertés, ainsi qu&rsquo;au Règlement Général sur la Protection
          des Données (RGPD), toute personne dispose d&rsquo;un droit
          d&rsquo;accès, de rectification, de suppression et d&rsquo;opposition
          aux données personnelles la concernant. Pour exercer ces droits,
          adressez-vous à : privacy@rently.com.
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Propriété intellectuelle
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          L&rsquo;ensemble de ce site relève de la législation française et
          internationale sur le droit d&rsquo;auteur et la propriété
          intellectuelle. Tous les droits de reproduction sont réservés, y
          compris pour les documents téléchargeables et les représentations
          iconographiques et photographiques.
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Limitation de responsabilité
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Rently s’efforce d’assurer au mieux de ses possibilités, l’exactitude
          et la mise à jour des informations diffusées sur ce site, dont elle se
          réserve le droit de corriger, à tout moment et sans préavis, le
          contenu. Toutefois, Rently ne peut garantir l’exactitude, la précision
          ou l’exhaustivité des informations mises à disposition sur ce site.
        </Typography>
        <Typography variant='h1' className='text-primary mb-2'>
          Loi applicable
        </Typography>
        <Typography variant='text' className='text-gray-900 mb-1'>
          Le contenu de ce site est régi par la loi française, et tout litige
          éventuel s&rsquo;y rapportant sera soumis à la compétence des
          tribunaux français.
        </Typography>
      </div>
    </div>
  )
}
