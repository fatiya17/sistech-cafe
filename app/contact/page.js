import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

export const metadata = {
  title: 'Contact Us - Sistech Cafe',
  description: 'Punya pertanyaan soal biji kopi, mau ajak kolaborasi, atau sekadar pengen nyapa? Jangan sungkan. Kami siap seduh obrolan hangat bareng kamu.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#F3E9DC,#EBC5DA,#FFEBF7,#F3E9DC)] dark:bg-none pt-10 pb-20">
      <div className="container w-full mx-auto px-4 md:px-8 relative">
        <ContactHero />
        <ContactMain />
      </div>
    </div>
  );
}
