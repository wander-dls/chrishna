"use client"

import { motion as m } from 'framer-motion';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 100, y: 0 }} transition={{type: 'spring', duration: 0.5}}>
        {children}
    </m.div>
     
  );
}