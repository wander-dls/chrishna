import {RiSnapchatFill, RiFacebookFill, RiInstagramFill, RiTwitterXFill, RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from 'react-icons/ri'

import {Smile, Scan, Bird } from 'lucide-react'

export const infoData = [
    {
        icon: RiUserHeartFill,
        text: 'Christian Pimentel'
    },
    {
        icon: RiSendPlaneFill,
        text: '+1 646 204 1067'
    },
    {
        icon: RiVidiconFill,
        text: 'chrishnaphotos@gmail.com'
    },
    {
        icon: RiVipCrown2Fill,
        text: 'Born on 4th April 1994'
    },
    {
        icon: RiStarHalfSLine,
        text: 'Master Degree'
    },
    {
        icon: RiRidingFill,
        text: '219 Whiton st, Jersey City, New Jersey, USA'
    },
]
export const navLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
   
]


export const icons = [
    {
        
        icon: RiInstagramFill,
        path: 'https://www.instagram.com/crishna_'
    },
    {
        icon: RiFacebookFill,
        path: 'https://www.facebook.com/crishnaofficial'
    },
    {
        
        icon: RiTwitterXFill,
        path: 'https://twitter.com/crishna_'
    },
    {
        
        icon: RiSnapchatFill,
        path: 'https://www.snapchat.com/add/crishna_'
    }
]
export const galleryImages = [
  {
    image: '/images/edits/carousel1.jpg',
    category: 'portrait',
  },
  {
    image: '/images/edits/carousel2.jpg',
    category: 'event',
  },
  {
    image: '/images/edits/carousel3.jpg',
    category: 'birthday',
  },
  {
    image: '/images/edits/carousel4.jpg',
    category: 'portrait',
  },
  {
    image: '/images/edits/carousel5.jpg',
    category: 'event',
  },
  {
    image: '/images/edits/carousel6.jpg',
    category: 'birthday',
  },
  {
    image: '/images/edits/carousel7.jpg',
    category: 'portrait',
  },
]


export const services = [
    {
        title: 'Portraiture',
        description: 'Capturing the essence of individuals through stunning portraits. Whether it\'s a professional headshot or a creative personal portrait, I bring out the best in every subject.',
        icon: Smile,
    },
    {
        title: 'Event Photography',
        description: 'From weddings to corporate events, I specialize in capturing the moments that matter most. My goal is to tell your story through beautiful, candid images.',
        icon: Scan,
    },
    {
        title: 'Birthday Photography',
        description: 'Celebrating life\'s milestones with vibrant and joyful birthday photography. I capture the fun, laughter, and special moments of your celebrations.',
        icon: Bird,
    }
]
