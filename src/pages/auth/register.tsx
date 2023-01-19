import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';
import AuthLayout from '@/layouts/authLayout';

import LinkButton from '../../components/atoms/LinkButton';
import {
  emailValidation,
  passwordValidation,
  userNameValidation,
} from '../../utils/auth';

const Register = () => {
  const [userName, setuserName] = useState('');
  const [userNameInvalid, setuserNameInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password, setPassword] = useState('');

  const userNameChange = (e: any) => {
    setuserNameInvalid(false);
    setuserName(e.target.value);
  };

  const passwordChange = (e: any) => {
    setPasswordInvalid(false);
    setPassword(e.target.value);
  };

  const emailChange = (e: any) => {
    setEmailInvalid(false);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    emailValidation(email, setEmailInvalid);
    passwordValidation(password, setPasswordInvalid);
    userNameValidation(userName, setuserNameInvalid);
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
                  errorMessage={`userName should be 2-29 characters without number or special character!`}
                  type={'text'}
                  required={true}
                  name={'userName'}
                  errorIcon={userNameInvalid}
                  placeholder={'Your name'}
                  icon={'MdPersonOutline'}
                  errorPadding={'normal'}
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
                  errorPadding={'small'}
                  errorIcon={emailInvalid}
                  placeholder={'Email'}
                  icon={'MdEmail'}
                ></Input>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Input
                  onChange={passwordChange}
                  errorPadding={'large'}
                  errorMessage={`Password must have min 5 and max 20 characters with 1 letter, 1 number and 1 special character.`}
                  errorIcon={passwordInvalid}
                  type={'password'}
                  name={'password'}
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
