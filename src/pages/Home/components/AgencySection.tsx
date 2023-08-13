import BlogCard from '../../../components/organisms/BlogCard.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/atoms/Button.tsx'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { useNavigate } from 'react-router-dom'

export default function AgencySection(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography
        variant='h2'
        className='text-center w-11/12 text-neutral-900 pt-7'
      >
        {t('home.titleAgency')}
      </Typography>
      <div
        className='w-11/12 md:max-w-[1200px] flex flex-col-reverse items-center md:flex-row
        md:justify-between pt-7'
      >
        <div className='h-[810px] w-full md:max-w-[50%] flex justify-center mt-[30px] md:mt-0'>
          <BlogCard
            title='blogCard.title'
            link='blogCard.link'
            description='blogCard.description'
          />
        </div>
        <div className='flex flex-col items-center md:items-end w-full md:1/2'>
          <div className='h-[390px] w-full md:w-[calc(100%-30px)] flex justify-center'>
            <BlogCard
              title='blogCard.title'
              link='blogCard.link'
              description='blogCard.description'
            />
          </div>
          <div className='h-[390px] w-full md:w-[calc(100%-30px)] flex justify-center mt-[30px]'>
            <BlogCard
              title='blogCard.title'
              link='blogCard.link'
              description='blogCard.description'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center pt-7'>
        <Button
          text={t('home.seeMore')}
          onClick={() => navigate(APP_ROUTES.AGENCY)}
        />
      </div>
    </div>
  )
}
