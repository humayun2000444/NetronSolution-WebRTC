import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from "react";
import logo from '../../../styles/images/netron_new_logo_blue.png';
import user from '../../../styles/images/user.png';


const openDialer = () => {
    const dialerWindow = window.open(
        "/dialer",
        "Dialer",
        "width=350,height=720,left=200,top=100"
    );
    if (dialerWindow) {
        dialerWindow.focus();
    }
};

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-white border-b-4">
            <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="/">
                                <img
                                    alt="Netron Solutions"
                                    src={logo}
                                    className="h-12 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-white-800 p-1 m-3 text-gray-800 hover:text-gray-400 "
                        >
                            <span className="absolute -inset-1.5"/>
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6"/>
                        </button>

                        <button
                            type="button"
                            onClick={openDialer}
                            className="text-gray-800 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium border-solid border-2 border-gary-900"
                        >
                            Dialer
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton
                                    className="relative flex rounded-full text-sm focus:outline-none ">
                                    <span className="absolute -inset-1.5"/>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={user}
                                        className="h-8 w-8 rounded-full"
                                    />
                                    {/*<i className="h-8 w-8 rounded-full fas fa-solid fa-phone"></i>*/}
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <button
                                        onClick={() => console.log("Open profile")}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Your Profile
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={() => console.log("Open settings")}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Settings
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={() => console.log("Sign out")}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                    >
                                        Sign out
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
