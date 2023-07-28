import ForgetPasswordManagement from './ForgetPasswordManagement.tsx'

export default function ForgetPasswordManagementStep(): JSX.Element {
  const forgetPassword = () => Promise.resolve(true)

  return <ForgetPasswordManagement forgetPassword={forgetPassword} />
}
