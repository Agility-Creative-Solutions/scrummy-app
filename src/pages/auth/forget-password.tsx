import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Button, Card, Input, LinkButton } from '@/components';
import { UseTostify } from '@/hooks/useTostify';
import AuthLayout from '@/layouts/AuthLayout';
import httpService from '@/service/http.service';

const ForgotPassword: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const emailChange = (e: any) => {
    setEmailInvalid(false);
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsLoading(true);

    if (userEmail === '') {
      setEmailInvalid(true);
    }

    if (!validateEmail(userEmail)) {
      setEmailInvalid(true);
    }

    if (userEmail !== '' && validateEmail(userEmail)) {
      await httpService
        .POST('/auth/forgot-password', { userEmail })
        .then(() => {
          UseTostify({
            type: 'success',
            label: 'Email sent successfully',
          });
          setEmailSent(true);
        })
        .catch(() => {
          setEmailInvalid(true);
        });
    }

    setIsLoading(false);
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
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-bold">I can&apos;t remember!</h2>
              <p className="text-xs font-light">
                No worries. We will send you an email with the instructions to
                create your new password.
              </p>
            </div>
            <form>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Input
                  onChange={emailChange}
                  errorMessage={`Wrong email or doens't existe. Try again.`}
                  type={'email'}
                  name={'email'}
                  errorIcon={emailInvalid}
                  placeholder={'Email'}
                  icon={'MdEmail'}
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
                onClick={handleSubmit}
                buttonType="success"
                fullWidth={true}
                disabled={emailSent}
                title={emailSent ? 'Request sent!' : 'Request new password'}
                isLoading={isLoading}
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

export default ForgotPassword;
