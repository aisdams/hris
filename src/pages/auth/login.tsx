import React from 'react';
import Image from 'next/image';
import { InferType } from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
// import { IS_DEV } from '@/constants';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// import * as userService from '@/apis/user.api';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import yup from '@/lib/yup';
import InputPassword from '@/components/inputs/input-password';
import InputText from '@/components/inputs/input-text';
import { Button } from '@/components/ui/button';
import { NextPageCustomLayout } from '@/types/_app.type';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
const defaultValues = {
  username: '',
  password: '',
};

const Schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

type LoginSchema = InferType<typeof Schema>;

const Login: NextPageCustomLayout = () => {
  // const { status } = useSession();
  const methods = useForm<LoginSchema>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(Schema),
  });
  const { handleSubmit, watch } = methods;

  const router = useRouter();

  //! Error Message from Query Params
  const [errMsgQS, setErrMsgQS] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // const getUserByEmailMutation = useMutation({
  //   mutationFn: userService.getByEmail,
  //   onSuccess: (res) => {
  //     localStorage.setItem(
  //       process.env.NEXT_PUBLIC_PERMISSIONS_NAME,
  //       res.data.permissions
  //     );
  //     setIsLoading(false);
  //     router.replace('/');
  //   },
  //   onError: () => {
  //     setIsLoading(false);
  //     toast.error('Something went wrong, please retry later.');
  //     signOut({ redirect: false });
  //     // router.replace('/');
  //   },
  // });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setIsLoading(true);
    signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    })
      .then(async (res) => {
        if (res?.error) {
          setIsLoading(false);
          setErrMsgQS("Email or Password that you've entered are incorrect!");
          toast.error('Something went wrong, please retry later.');
        }
        router.replace('/');
        if (res?.ok) {
          console.log('ok');
        }
      })
      .finally(() => setIsLoading(false));
  };

  // useEffect(() => {
  //   if (status === 'authenticated')
  //     getUserByEmailMutation.mutate(watch('email'));
  // }, [status]);

  //! Error Query Params logic
  useEffect(() => {
    setErrMsgQS(router?.query.error as string | null);
  }, [router?.query?.error]);
  return (
    <div className="w-full h-screen relative">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="!w-full grid px-20">
          <h1 className="text-4xl font-bold mb-5 text-center">Login</h1>
          <p className="text-xl font-light mb-5 text-center">HI Welcome</p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              <InputText
                name="username"
                label="Username"
                labelCN="text-sm"
                inputCN="text-sm"
                placeholder="Enter Username"
                containerCN="mb-4"
                mandatory
                uppercase={false}
                // withLabel={false}
              />
              <InputPassword
                name="password"
                labelCN="text-sm"
                mandatory
                inputCN="text-sm"
                containerCN="mb-4"
                // withLabel={false}
              />
              {/* <Button type="submit" className="w-max px-10 bg-gray-500 text-[#fafafa] mt-3" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
              </Button> */}
              <Link className="w-max px-10 bg-gray-500 text-[#fafafa] mt-3 py-2 rounded-md" href="/">
                Login
              </Link>
              {errMsgQS && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" /> {errMsgQS && <p> {errMsgQS}</p>}
                </div>
              )}
            </form>
          </FormProvider>
        </div>
        <div className="bg-gray-500 w-full h-screen"></div>
      </div>
      <div className="absolute bottom-0 text-center bg-[#020817] w-full py-2">
        <h1>2023 ©ghostrider Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      </div>
    </div>
  );
};
Login.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};
export default Login;
