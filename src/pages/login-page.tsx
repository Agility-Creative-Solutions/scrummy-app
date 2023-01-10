import { motion } from 'framer-motion';
import type { SetStateAction } from 'react';
import { useState } from 'react';

import { Button, Input } from '@/components';
import Card from '@/components/atoms/Card';

import LogoImg from '../../public/assets/images/scrummylogo.png';
import LogoTitle from '../../public/assets/images/scrummytitle.png';
import LinkButton from '../components/atoms/LinkButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password, setPassword] = useState('');

  const testAcount = {
    username: 'test@scrummypoker.com',
    password: 'qwer1234',
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === testAcount.username) {
      setEmailInvalid(false);
    } else {
      setEmailInvalid(true);
    }
    if (password === testAcount.password || password.length <= 5) {
      setPasswordInvalid(false);
    } else {
      setPasswordInvalid(true);
    }
    console.log(`email: ${email}, password: ${password}`);

    if (email === testAcount.username && password === testAcount.password) {
      alert(`Login realizado com sucesso. Bem vindo ${email}!!`);
    }
  };

  return (
    <div className="relative h-[100vh] w-[100vw] overflow-hidden bg-scrummyOrange-500 pt-20">
      <motion.div
        className="absolute left-[-20px] top-[-80px]  h-[80vw] max-h-[1100px] min-h-[700px] w-[80vw] min-w-[700px] max-w-[1100px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.05 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
      <motion.div
        className=" absolute left-[-100px] h-[60vw] max-h-[800px] min-h-[500px] w-[60vw] min-w-[500px] max-w-[800px] rounded-full border-[2px] border-slate-50/50 object-cover"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.05 }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>

      <div className="absolute h-[100vh] w-[100vw]">
        <div className="mx-auto mt-[100px] h-[72px] w-[72px] rounded-xl bg-white">
          <img src={LogoImg.src} alt="Logo-Image" className="m-auto pt-3" />
        </div>
        <div className="m-auto flex items-center justify-center pt-10">
          <img src={LogoTitle.src} alt="Logo-Title" />
        </div>
        <Card className="mx-auto mt-[50px] max-w-[380px] rounded-3xl pb-12">
          <div>
            <form>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
              >
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage={`Wrong email or doens't existe. Try again.`}
                  type={'email'}
                  name={'email'}
                  errorIcon={emailInvalid}
                  placeholder={'Email'}
                  icon={'MdEmail'}
                ></Input>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 1.2 }}
              >
                <Input
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setPassword(e.target.value)}
                  errorMessage={`Wrong password. Try again.`}
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
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <Button
                onClick={handleSubmit}
                buttonType="success"
                fullWidth={true}
                title={'Sign In'}
              ></Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 1.2 }}
            >
              <Button
                buttonType="pink"
                fullWidth={true}
                title={'Sign In with Google'}
              ></Button>
            </motion.div>
          </div>
          <div className="flex justify-between pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
            >
              <LinkButton
                href={'/'}
                target={'_self'}
                bgColor={'none'}
                textSize={'small'}
                textColor={'gray'}
                title={'Forget password'}
              ></LinkButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
            >
              <LinkButton
                href={'/'}
                target={'_self'}
                bgColor={'none'}
                textSize={'small'}
                textColor={'gray'}
                title={'Login account'}
              ></LinkButton>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
