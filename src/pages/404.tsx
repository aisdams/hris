import Image from 'next/image';

import { Button } from '@/components/ui/button';
import ImErr from '../../public/img/err/404.svg';

export default function Custom404() {
  return (
    <div className="mx-auto grid gap-3 justify-center items-center text-center">
      <Image src={ImErr} alt="" />
      <h1 className="text-gray-500 text-6xl my-5 font-semibold">404</h1>
      <p>Sorry! the page you are looking for does not exist</p>
      <Button className="bg-purple-500 w-max justify-center grid mx-auto">Return Home</Button>
    </div>
  );
}
