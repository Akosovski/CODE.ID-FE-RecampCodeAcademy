/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Popover, Dialog, Menu, Transition } from '@headlessui/react';
import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    TrendingUpIcon,
    UserGroupIcon,
    UsersIcon,
    SelectorIcon,
    XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useSelector, useDispatch } from 'react-redux';
import { doPushSignoutRequest } from '@/redux-saga/action/userAction';
import CODEID from '@/pages/images/codeid.png';

const solutions = [
    {
        name: 'Company Training',
        description: 'Upgrade your employees skill with latest technology.',
        href: '#',
        icon: TrendingUpIcon,
    },
    {
        name: 'Partner With Us',
        description: 'Work together with many other organizations with us.',
        href: '#',
        icon: UserGroupIcon,
    },
    { name: 'Live Chat', description: "Need information, contact live chat with us", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
];



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function LandingPage(props: { children: any; }) {
    const { children } = props;
    const dispatch = useDispatch();
    const router = useRouter()
    const [user, setUser] = useState({})

    const onSignout = () => {
        dispatch(doPushSignoutRequest());
        router.reload()
    }
    useEffect(() => {
        
    },[])
    console.log(user);
    return (
        <div className='bg-white'>
            <header>
                <Popover className="relative bg-white">
                    {({ open }) => (
                        <>
                            <div className="flex justify-between items-center mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8 border-b-2  border-gray-300">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <Link href="/" className="flex flex-row">
                                        <Image src={CODEID} width={45} height={45} alt="css-icon"/>
                                        <h1 className="pt-2 ps-2 font-medium text-lg">code.id</h1>
                                    </Link>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    {
                                        user ?
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href="#"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 divide-y')}
                                                                    >
                                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Hi, Username</dd>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">               
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href="#"
                                                                        onClick={onSignout}
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Sign out
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>   

                                                    </Menu.Items>
                                                </Transition>
                                            </Menu> :
                                            <>
                                                <Link href="signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                                    Sign in
                                                </Link>
                                                <Link
                                                    href="signup"
                                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                                                >
                                                    Sign up
                                                </Link>
                                            </>

                                    }

                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid grid-cols-1 gap-7">
                                                    {solutions.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Pricing
                                                </a>
                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Partners
                                                </a>
                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Company
                                                </a>
                                            </div>
                                            <div className="mt-6">
                                                <Link
                                                    href="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                                >
                                                    Sign up
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?
                                                    <Link href="signin" className="text-gray-900">
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </header>
            <main>

                {/* display contain page like bootcamp, hiring, talent in <Outlet/>*/}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}