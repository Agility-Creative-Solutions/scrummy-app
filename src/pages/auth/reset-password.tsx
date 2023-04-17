import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import type { TostifyType } from '@/hooks/useTostify';
import { UseTostify } from '@/hooks/useTostify';
import AuthLayout from '@/layouts/AuthLayout';

import LinkButton from '../../components/atoms/LinkButton';
import UserService from '../../service/auth/service';
import { passwordValidation } from '../../utils/auth';

type Props = {
  token?: string;
};

const ResetPasswordPage = ({ token }: Props) => {
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToast = (label: string, type?: TostifyType) => {
    UseTostify({ label, type });
  };

  const passwordChange = (e: any) => {
    setPasswordInvalid(false);
    setPassword(e.target.value);
  };

  const confirmPasswordChange = (e: any) => {
    setConfirmPasswordInvalid(false);
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await UserService.resetPassword(
        {
          password,
          confirmPassword,
        },
        token as string
      );

      if (response.status === 200) {
        handleToast(
          'Password successfully changed! Redirecting to login...',
          'success'
        );
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      handleToast('Oops. Something went wrong. Please try again', 'error');
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!passwordValidation(password)) {
      setPasswordInvalid(true);
      setConfirmPasswordInvalid(true);
      setIsLoading(false);
      handleToast(
        'Password must have min 8 characters with 1 letter and 1 number',
        'warning'
      );
      return;
    }
    if (password !== '' && password !== confirmPassword) {
      setIsLoading(false);
      setConfirmPasswordInvalid(true);
      handleToast(
        `Passwords doesn't match. Please write both passwords again`,
        'warning'
      );
    }
    if (password !== '' && password === confirmPassword) {
      handleResetPassword();
    }
  };

  useEffect(() => {
    if (!token) {
      handleToast('Token is invalid', 'error');
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    }
  }, [router, token]);

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card className="fixed bottom-0 mx-auto mt-[100px] rounded-b-none  sm:relative sm:mt-[10vh]  sm:max-w-[380px] sm:rounded-b-3xl">
          <div>
            <div>
              <p className="text-base"> Reset Password</p>
              <p className="pt-2 text-sm">
                {`Now it's time to create your new password. We hope you don't
                forget but if you do, we're here for you`}
              </p>
            </div>
            <form>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Input
                  onChange={passwordChange}
                  errorIcon={passwordInvalid}
                  type={'password'}
                  name={'password'}
                  placeholder={'New password'}
                  required={true}
                  icon={'MdLock'}
                  iconSize={'md'}
                ></Input>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Input
                  onChange={confirmPasswordChange}
                  errorIcon={confirmPasswordInvalid}
                  type={'password'}
                  name={'password'}
                  placeholder={'Repeat new password'}
                  required={true}
                  icon={'MdLock'}
                  iconSize={'md'}
                ></Input>
              </motion.div>
            </form>
          </div>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Button
                isLoading={isLoading}
                onClick={handleSubmit}
                buttonType="success"
                fullWidth={true}
                title={'Sign In'}
              ></Button>
            </motion.div>
          </div>
          <div className="flex justify-end pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <LinkButton
                href={'/auth/login'}
                textSize={'small'}
                textColor={'gray'}
                title={'Login account'}
              ></LinkButton>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </AuthLayout>
  );
};

ResetPasswordPage.getInitialProps = async ({ query }: any) => {
  const { token } = query;

  return { token };
};

export default ResetPasswordPage;
