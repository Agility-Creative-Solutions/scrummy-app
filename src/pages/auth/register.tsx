import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import { AuthContext } from '@/contexts/AuthContext';
import type { TostifyType } from '@/hooks/useTostify';
import { UseTostify } from '@/hooks/useTostify';
import AuthLayout from '@/layouts/AuthLayout';

import LinkButton from '../../components/atoms/LinkButton';
import UserService from '../../service/auth';
import {
  emailValidation,
  passwordValidation,
  userNameValidation,
} from '../../utils/auth';

const Register = () => {
  const { localSignIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password, setPassword] = useState('');

  const userNameChange = (e: any) => {
    setUserNameInvalid(false);
    setName(e.target.value);
  };

  const passwordChange = (e: any) => {
    setPasswordInvalid(false);
    setPassword(e.target.value);
  };

  const emailChange = (e: any) => {
    setEmailInvalid(false);
    setEmail(e.target.value);
  };

  const handleToast = (label: string, type?: TostifyType) =>
    UseTostify({ label, type });

  const handleRegister = async () => {
    try {
      const { user, tokens } = await UserService.register({
        name,
        email,
        password,
      });

      setIsLoading(false);
      if (!user) {
        handleToast('Email already taken.', 'warning');
        return;
      }
      handleToast(`Welcome to scrummy ${user.name}!`, 'success');
      localSignIn({ ...user, tokens });
    } catch (error) {
      setIsLoading(false);
      handleToast('Oops. Something went wrong.', 'error');
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!emailValidation(email)) {
      setIsLoading(false);
      setPasswordInvalid(true);
      setEmailInvalid(true);
      return false;
    }
    if (!passwordValidation(password)) {
      setIsLoading(false);
      setPasswordInvalid(true);
      return false;
    }
    if (!userNameValidation(name)) {
      setIsLoading(false);
      setUserNameInvalid(true);
      return false;
    }
    return handleRegister();
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
                  onChange={userNameChange}
                  errorMessage={`User name should be 2-29 characters without special character!`}
                  type={'text'}
                  required={true}
                  name={'userName'}
                  errorIcon={userNameInvalid}
                  placeholder={'Your name'}
                  icon={'MdPersonOutline'}
                  iconSize={'md'}
                ></Input>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Input
                  onChange={emailChange}
                  errorMessage={`Invalid email or already used.`}
                  required={true}
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
                  errorMessage={`Password must have min 8 characters with 1 letter and 1 number..`}
                  errorIcon={passwordInvalid}
                  type={'password'}
                  name={'password'}
                  iconSize={'md'}
                  placeholder={'Password'}
                  required={true}
                  icon={'MdLock'}
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
                title={'Sign Up'}
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
                title={'Sign Up with Google'}
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

export default Register;
