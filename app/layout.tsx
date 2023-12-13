import Link from 'next/link';
import Eomji from './../public/eomji.jpg';
import Image from 'next/image';
import './output.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='w-screen flex'>
        <div className='max-w-[200px] min-h-screen pt-10 pl-5 pr-5 border-r'>
          <div className='flex flex-col items-center'>
            <Image
              src={Eomji}
              alt='profile img'
              className='w-[150px] rounded-full'
            />
            <span className='mt-2'>Eomji</span>
          </div>
          <ul className='flex flex-col gap-2 mt-5 pl-3 pr-3'>
            <li>
              <Link href='/cs'>CS</Link>
            </li>
            <li>
              <Link href='/algorithm'>Algorithm</Link>
            </li>
          </ul>
        </div>
        <div className='min-h-screen flex-[8] pt-10 pl-10 pr-10'>
          {children}
        </div>
      </body>
    </html>
  );
}

