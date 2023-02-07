import { motion } from 'framer-motion';
import useRouter from 'next/router';
import { useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import type { TostifyType } from '@/hooks/useTostify';
import { UseTostify } from '@/hooks/useTostify';
import AuthLayout from '@/layouts/AuthLayout';

import LinkButton from '../../components/atoms/LinkButton';
import UserService from '../../service/auth/service';
import { emailValidation, passwordValidation } from '../../utils/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleToast = (label: string, type?: TostifyType) => {
    UseTostify({ label, type });
  };
  const passwordChange = (e: any) => {
    setPasswordInvalid(false);
    setPassword(e.target.value);
  };

  const emailChange = (e: any) => {
    setEmailInvalid(false);
    setEmail(e.target.value);
  };
  const handleLogin = async () => {
    try {
      const response = await UserService.login({ email, password });
      setIsLoading(false);
      if (!response.user) {
        setEmailInvalid(true);
        setPasswordInvalid(true);
        return;
      }
      if (response.user.isEmailVerified === false) {
        handleToast('You must verify your email account.', 'warning');
      } else {
        useRouter.push('/auth/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      handleToast('Oops. Something went wrong', 'error');
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!emailValidation(email)) {
      setEmailInvalid(true);
      setPasswordInvalid(true);
      setIsLoading(false);
      return false;
    }
    if (!passwordValidation(password)) {
      setPasswordInvalid(true);
      setIsLoading(false);
      handleToast(
        'Password must have min 5 and max 20 characters with 1 letter, 1 number and 1 special character',
        'warning'
      );
      return false;
    }
    return handleLogin();
  };
  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card className="fixed bottom-0 mx-auto mt-[100px] rounded-b-none  sm:relative sm:mt-[10vh]  sm:max-w-[380px] sm:rounded-b-3xl">
          <div>
            <form>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Input
                  onChange={emailChange}
                  type={'email'}
                  name={'email'}
                  errorIcon={emailInvalid}
                  placeholder={'Email'}
                  icon={'MdEmail'}
                  iconSize={'md'}
                ></Input>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Input
                  onChange={passwordChange}
                  errorMessage={`Incorrect email or password. Try again.`}
                  errorIcon={passwordInvalid}
                  type={'password'}
                  name={'password'}
                  placeholder={'Password'}
                  required={true}
                  icon={'MdLock'}
                  iconSize={'md'}
                ></Input>
              </motion.div>
            </form>
          </div>
          <div className="flex flex-col gap-4">
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button
                isLoading={isLoading}
                buttonType="pink"
                fullWidth={true}
                title={'Sign In with Google'}
              ></Button>
            </motion.div>
          </div>
          <div className="flex justify-between pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <LinkButton
                href={'/'}
                textSize={'small'}
                textColor={'gray'}
                title={'Forget password'}
              ></LinkButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <LinkButton
                href={'/auth/register'}
                textSize={'small'}
                textColor={'gray'}
                title={'Create account'}
              ></LinkButton>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </AuthLayout>
  );
};

export default LoginPage;
