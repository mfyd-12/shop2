(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/account/addresses/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _s = __turbopack_context__.k.signature();
'use client';
import Link from 'next/link';
import { Header } from '@/components/header';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, Edit, Trash2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useState, useEffect } from 'react';
const LOCAL_STORAGE_KEY = 'user_addresses';
export default function AddressesPage() {
    _s();
    const { t } = useLanguage();
    const [addresses, setAddresses] = useState([]);
    const [currentAddress, setCurrentAddress] = useState({
        id: '',
        fullName: '',
        streetAddress: '',
        city: '',
        postalCode: '',
        country: '',
        phoneNumber: ''
    });
    const [editingId, setEditingId] = useState(null);
    // Load addresses from localStorage on component mount
    useEffect({
        "AddressesPage.useEffect": ()=>{
            if (typeof window !== 'undefined') {
                const storedAddresses = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (storedAddresses) {
                    setAddresses(JSON.parse(storedAddresses));
                }
            }
        }
    }["AddressesPage.useEffect"], []);
    // Save addresses to localStorage whenever addresses state changes
    useEffect({
        "AddressesPage.useEffect": ()=>{
            if (typeof window !== 'undefined') {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addresses));
            }
        }
    }["AddressesPage.useEffect"], [
        addresses
    ]);
    const handleChange = (e)=>{
        const { id, value } = e.target;
        setCurrentAddress((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!currentAddress.fullName || !currentAddress.phoneNumber || !currentAddress.streetAddress || !currentAddress.city || !currentAddress.postalCode || !currentAddress.country) {
            alert(t('fillAllFields')); // Corrected key
            return;
        }
        if (editingId) {
            setAddresses((prev)=>prev.map((addr)=>addr.id === editingId ? {
                        ...currentAddress,
                        id: editingId
                    } : addr));
            setEditingId(null);
        } else {
            setAddresses((prev)=>[
                    ...prev,
                    {
                        ...currentAddress,
                        id: Date.now().toString()
                    }
                ]);
        }
        setCurrentAddress({
            id: '',
            fullName: '',
            streetAddress: '',
            city: '',
            postalCode: '',
            country: '',
            phoneNumber: ''
        });
    };
    const handleEdit = (address)=>{
        setCurrentAddress(address);
        setEditingId(address.id);
    };
    const handleDelete = (id)=>{
        if (confirm(t('confirmDeleteAddress'))) {
            setAddresses((prev)=>prev.filter((addr)=>addr.id !== id));
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-[#F9F8F6] pb-20",
        children: [
            /*#__PURE__*/ _jsxDEV(Header, {}, void 0, false, {
                fileName: "[project]/app/account/addresses/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                className: "px-4 py-8",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Link, {
                                href: "/account",
                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/account/addresses/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/account/addresses/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/account/addresses/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h1", {
                                className: "text-2xl font-bold text-[#2A2723]",
                                children: t('addresses')
                            }, void 0, false, {
                                fileName: "[project]/app/account/addresses/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/account/addresses/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Card, {
                        className: "bg-white rounded-2xl shadow-sm mb-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardHeader, {
                                children: /*#__PURE__*/ _jsxDEV(CardTitle, {
                                    className: "text-lg font-semibold text-[#2A2723]",
                                    children: editingId ? t('editAddress') : t('addNewAddress')
                                }, void 0, false, {
                                    fileName: "[project]/app/account/addresses/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/account/addresses/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                children: /*#__PURE__*/ _jsxDEV("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "fullName",
                                                    children: t('fullName')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "fullName",
                                                    placeholder: t('fullNamePlaceholder'),
                                                    value: currentAddress.fullName,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "phoneNumber",
                                                    children: t('phoneNumber')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "phoneNumber",
                                                    placeholder: t('phoneNumberPlaceholder'),
                                                    value: currentAddress.phoneNumber,
                                                    onChange: handleChange,
                                                    type: "tel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "streetAddress",
                                                    children: t('streetAddress')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "streetAddress",
                                                    placeholder: t('streetAddressPlaceholder'),
                                                    value: currentAddress.streetAddress,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "city",
                                                    children: t('city')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "city",
                                                    placeholder: t('cityPlaceholder'),
                                                    value: currentAddress.city,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "postalCode",
                                                    children: t('postalCode')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "postalCode",
                                                    placeholder: t('postalCodePlaceholder'),
                                                    value: currentAddress.postalCode,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                    htmlFor: "country",
                                                    children: t('country')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                    id: "country",
                                                    placeholder: t('countryPlaceholder'),
                                                    value: currentAddress.country,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            type: "submit",
                                            className: "w-full bg-[#2A2723] text-white hover:bg-[#4A4A4A]",
                                            children: editingId ? t('updateAddress') : t('saveAddress')
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        editingId && /*#__PURE__*/ _jsxDEV(Button, {
                                            variant: "outline",
                                            onClick: ()=>{
                                                setEditingId(null);
                                                setCurrentAddress({
                                                    id: '',
                                                    fullName: '',
                                                    phoneNumber: '',
                                                    streetAddress: '',
                                                    city: '',
                                                    postalCode: '',
                                                    country: ''
                                                });
                                            },
                                            className: "w-full mt-2",
                                            children: t('cancelEdit')
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/account/addresses/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/account/addresses/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/account/addresses/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-xl font-bold text-[#2A2723] mb-4",
                        children: t('yourAddresses')
                    }, void 0, false, {
                        fileName: "[project]/app/account/addresses/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    addresses.length === 0 ? /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-[#6B6561]",
                        children: t('noAddressesSaved')
                    }, void 0, false, {
                        fileName: "[project]/app/account/addresses/page.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ _jsxDEV("div", {
                        className: "space-y-4",
                        children: addresses.map((addr)=>/*#__PURE__*/ _jsxDEV(Card, {
                                className: "bg-white rounded-2xl shadow-sm",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    className: "font-semibold text-[#2A2723]",
                                                    children: addr.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Button, {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>handleEdit(addr),
                                                            children: /*#__PURE__*/ _jsxDEV(Edit, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/account/addresses/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/account/addresses/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(Button, {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>handleDelete(addr.id),
                                                            children: /*#__PURE__*/ _jsxDEV(Trash2, {
                                                                className: "w-4 h-4 text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/account/addresses/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/account/addresses/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/account/addresses/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-[#6B6561]",
                                            children: addr.phoneNumber
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-[#6B6561]",
                                            children: addr.streetAddress
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-[#6B6561]",
                                            children: `${addr.city}, ${addr.postalCode}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-[#6B6561]",
                                            children: addr.country
                                        }, void 0, false, {
                                            fileName: "[project]/app/account/addresses/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/account/addresses/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this)
                            }, addr.id, false, {
                                fileName: "[project]/app/account/addresses/page.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/account/addresses/page.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/account/addresses/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(MobileNav, {}, void 0, false, {
                fileName: "[project]/app/account/addresses/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/account/addresses/page.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(AddressesPage, "3YTHAvPsypVzLUqgz92Gn2Mc8HU=", false, function() {
    return [
        useLanguage
    ];
});
_c = AddressesPage;
var _c;
__turbopack_context__.k.register(_c, "AddressesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_account_addresses_page_tsx_1c2a6cda._.js.map