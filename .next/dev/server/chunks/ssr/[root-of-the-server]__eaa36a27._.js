module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductById",
    ()=>getProductById,
    "getProductsByCategory",
    ()=>getProductsByCategory,
    "products",
    ()=>products,
    "productsById",
    ()=>productsById
]);
const defaultSizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
];
const sharedDetails = [
    'Premium natural fibers for breathable comfort',
    'Tailored silhouette with smart pattern work',
    'Double-stitched seams for everyday durability',
    'Designed for effortless transitions from day to night'
];
const sharedDetailsAr = [
    'أقمشة طبيعية فاخرة لراحة قابلة للتنفس',
    'قصة مصممة مع تفاصيل ذكية في النمط',
    'خياطة مزدوجة لتحمل الاستخدام اليومي',
    'تصميم ينتقل بسلاسة من النهار إلى الليل'
];
const baseProducts = [
    {
        id: 1,
        name: 'Classic Oxford Shirt',
        nameAr: 'قميص أكسفورد كلاسيكي',
        price: 89,
        category: 'Shirts',
        categoryAr: 'قمصان',
        image: '/white-oxford-shirt.png',
        description: 'Tailored from long-staple cotton with a soft Oxford weave, this shirt keeps its crisp structure while feeling light against the skin.',
        descriptionAr: 'مصنوع من قطن طويل التيلة بنسيج أكسفورد الناعم ليحافظ على بنية أنيقة مع ملمس خفيف على البشرة.'
    },
    {
        id: 2,
        name: 'Merino Wool Sweater',
        nameAr: 'سترة صوف ميرينو',
        price: 149,
        category: 'Knitwear',
        categoryAr: 'ملابس صوفية',
        image: '/mens-sweater-beige.jpg',
        description: 'A breathable merino knit with a clean crew neckline, finished with rib trims for a modern, elevated layer.',
        descriptionAr: 'حياكة من صوف الميرينو القابل للتنفس مع ياقة مستديرة نظيفة وحواف مضلعة لطبقة عصرية راقية.'
    },
    {
        id: 3,
        name: 'Tailored Chinos',
        nameAr: 'بنطلون تشينو مفصل',
        price: 119,
        category: 'Trousers',
        categoryAr: 'بناطيل',
        image: '/beige-chino-pants.png',
        description: 'Clean front chinos with a tapered leg and hidden stretch waistband that keeps shape throughout the day.',
        descriptionAr: 'بنطلون تشينو بواجهة نظيفة وساق مدببة مع خصر مرن مخفي يحافظ على الشكل طوال اليوم.'
    },
    {
        id: 4,
        name: 'Cotton Polo Shirt',
        nameAr: 'قميص بولو قطني',
        price: 69,
        category: 'Shirts',
        categoryAr: 'قمصان',
        image: '/navy-polo-shirt.jpg',
        description: 'Fine piqué knit polo featuring a concealed button placket and tonal tipping along the collar.',
        descriptionAr: 'قميص بولو من حياكة بيكيه ناعمة مع ياقة بأطراف من نفس اللون وأزرار مخفية.'
    },
    {
        id: 5,
        name: 'Wool Overcoat',
        nameAr: 'معطف صوفي',
        price: 299,
        category: 'Outerwear',
        categoryAr: 'ملابس خارجية',
        image: '/mens-wool-coat-camel.jpg',
        description: 'A double-faced wool blend coat with hand-finished edges and a relaxed tailored drape.',
        descriptionAr: 'معطف من صوف مزدوج الطبقات بحواف منتهية يدويًا وقصة رسمية مريحة.'
    },
    {
        id: 6,
        name: 'Linen Blazer',
        nameAr: 'جاكيت كتان',
        price: 189,
        category: 'Outerwear',
        categoryAr: 'ملابس خارجية',
        image: '/beige-linen-blazer.jpg',
        description: 'Breathable linen blazer with softly structured shoulders and a fluid half lining.',
        descriptionAr: 'جاكيت كتان قابل للتنفس بكتفين منسقين وبطانة نصفية خفيفة.'
    },
    {
        id: 7,
        name: 'Cashmere Cardigan',
        nameAr: 'كارديجان كشمير',
        price: 179,
        category: 'Knitwear',
        categoryAr: 'ملابس صوفية',
        image: '/grey-cashmere-cardigan.jpg',
        description: 'Pure cashmere cardigan with horn buttons and fully fashioned seams for a refined drape.',
        descriptionAr: 'كارديجان من الكشمير الخالص مع أزرار قرن وخياطات مصممة لانسدال أنيق.'
    },
    {
        id: 8,
        name: 'Dress Trousers',
        nameAr: 'بنطلون رسمي',
        price: 129,
        category: 'Trousers',
        categoryAr: 'بناطيل',
        image: '/grey-dress-pants.jpg',
        description: 'Wool-blend trousers with front pleats, French pocketing, and a tailored hem break.',
        descriptionAr: 'بنطلون من مزيج الصوف بثنيات أمامية وجيوب فرنسية وحفاف مصمم بعناية.'
    },
    {
        id: 9,
        name: 'Striped Dress Shirt',
        nameAr: 'قميص رسمي مخطط',
        price: 95,
        category: 'Shirts',
        categoryAr: 'قمصان',
        image: '/striped-dress-shirt.jpg',
        description: 'Business-ready stripes, contrast cuffs, and a wrinkle-resistant finish make this shirt a travel staple.',
        descriptionAr: 'خطوط عملية مع أساور متباينة وتشطيب مقاوم للتجاعيد ليكون القميص المثالي للسفر.'
    },
    {
        id: 10,
        name: 'Cable Knit Sweater',
        nameAr: 'سترة صوفية منسوجة',
        price: 135,
        category: 'Knitwear',
        categoryAr: 'ملابس صوفية',
        image: '/cable-knit-sweater-beige.jpg',
        description: 'Heritage-inspired cable stitches updated with a contemporary relaxed fit.',
        descriptionAr: 'حياكة الحبال التراثية بلمسة عصرية وقصة مريحة.'
    },
    {
        id: 11,
        name: 'Denim Jacket',
        nameAr: 'جاكيت جينز',
        price: 159,
        category: 'Outerwear',
        categoryAr: 'ملابس خارجية',
        image: '/denim-jacket-classic.jpg',
        description: 'Vintage-wash denim with modern tailoring, finished with matte gunmetal hardware.',
        descriptionAr: 'جينز بلمسة عتيقة مع حياكة عصرية ومعدّات معدنية غير لامعة.'
    },
    {
        id: 12,
        name: 'Slim Fit Jeans',
        nameAr: 'جينز بقصة ضيقة',
        price: 99,
        category: 'Trousers',
        categoryAr: 'بناطيل',
        image: '/slim-fit-jeans-dark-blue.jpg',
        description: 'Soft stretch denim with a refined slim profile and clean pocket construction.',
        descriptionAr: 'دينم مرن ناعم بقصة ضيقة مصقولة وجيوب نظيفة التصميم.'
    },
    {
        id: 13,
        name: 'Cozy Fleece Hoodie',
        nameAr: 'كنزة صوفية مريحة بغطاء للرأس',
        price: 75,
        category: 'Hoodies',
        categoryAr: 'الكنزات الثقيلة',
        image: '/black-turtleneck-sweater.png',
        description: 'Ultra-soft fleece hoodie for ultimate comfort and warmth. Perfect for casual wear.',
        descriptionAr: 'كنزة صوفية فائقة النعومة لتوفير أقصى درجات الراحة والدفء. مثالية للارتداء اليومي غير الرسمي.'
    },
    {
        id: 14,
        name: 'Leather Sneakers',
        nameAr: 'أحذية رياضية جلدية',
        price: 130,
        category: 'Shoes',
        categoryAr: 'الأحذية',
        image: '/stylish-man-minimal-fashion-portrait.jpg',
        description: 'Stylish and comfortable leather sneakers for everyday wear. Durable and versatile.',
        descriptionAr: 'أحذية رياضية جلدية أنيقة ومريحة للارتداء اليومي. متينة ومتعددة الاستخدامات.'
    }
];
const colorPalettes = {
    1: [
        {
            name: 'Snow',
            nameAr: 'أبيض ثلجي',
            value: '#f7f7f2'
        },
        {
            name: 'Stone',
            nameAr: 'حجري',
            value: '#d6d0c4'
        }
    ],
    2: [
        {
            name: 'Oat',
            nameAr: 'شوفان',
            value: '#d7c7b5'
        },
        {
            name: 'Charcoal',
            nameAr: 'رمادي داكن',
            value: '#4a4a4a'
        }
    ],
    3: [
        {
            name: 'Khaki',
            nameAr: 'كاكي',
            value: '#b89b74'
        },
        {
            name: 'Sage',
            nameAr: 'ساج',
            value: '#b3b191'
        }
    ],
    4: [
        {
            name: 'Navy',
            nameAr: 'كحلي',
            value: '#112445'
        },
        {
            name: 'Sky',
            nameAr: 'أزرق سماوي',
            value: '#87a9d9'
        }
    ],
    5: [
        {
            name: 'Camel',
            nameAr: 'جملي',
            value: '#c19a6b'
        },
        {
            name: 'Black',
            nameAr: 'أسود',
            value: '#1c1c1c'
        }
    ],
    6: [
        {
            name: 'Linen',
            nameAr: 'كتان طبيعي',
            value: '#e4d6c8'
        },
        {
            name: 'Olive',
            nameAr: 'زيتي',
            value: '#7a7c5b'
        }
    ],
    7: [
        {
            name: 'Fog',
            nameAr: 'ضبابي',
            value: '#b0b6c1'
        },
        {
            name: 'Midnight',
            nameAr: 'ليلي',
            value: '#1f2430'
        }
    ],
    8: [
        {
            name: 'Slate',
            nameAr: 'رمادي صخري',
            value: '#767b86'
        },
        {
            name: 'Coal',
            nameAr: 'فحمي',
            value: '#33363f'
        }
    ],
    9: [
        {
            name: 'Ice Stripe',
            nameAr: 'مخطط جليدي',
            value: '#d4e1ee'
        },
        {
            name: 'Ink Stripe',
            nameAr: 'مخطط حبر',
            value: '#1f2c3d'
        }
    ],
    10: [
        {
            name: 'Sand',
            nameAr: 'رملي',
            value: '#d8c2a5'
        },
        {
            name: 'Forest',
            nameAr: 'أخضر غامق',
            value: '#254734'
        }
    ],
    11: [
        {
            name: 'Indigo',
            nameAr: 'نيلي',
            value: '#1c2a44'
        },
        {
            name: 'Washed Black',
            nameAr: 'أسود باهت',
            value: '#2b2b2b'
        }
    ],
    12: [
        {
            name: 'Deep Blue',
            nameAr: 'أزرق داكن',
            value: '#0f1a2c'
        },
        {
            name: 'Graphite',
            nameAr: 'غرافيت',
            value: '#3b3d45'
        }
    ],
    13: [
        {
            name: 'Black',
            nameAr: 'أسود',
            value: '#1c1c1c'
        },
        {
            name: 'Grey',
            nameAr: 'رمادي',
            value: '#6B6561'
        }
    ],
    14: [
        {
            name: 'White',
            nameAr: 'أبيض',
            value: '#f7f7f2'
        },
        {
            name: 'Black',
            nameAr: 'أسود',
            value: '#1c1c1c'
        }
    ]
};
const galleryMap = {
    1: [
        '/white-oxford-shirt-front.jpg',
        '/white-oxford-shirt-back.jpg',
        '/white-oxford-shirt-detail.jpg'
    ],
    2: [
        '/mens-sweater-beige.jpg',
        '/mens-sweater-minimal.jpg',
        '/mens-sweater-beige.jpg'
    ],
    3: [
        '/beige-chino-pants.png',
        '/mens-trousers-minimal.jpg',
        '/pleated-trousers-beige.jpg'
    ],
    4: [
        '/navy-polo-shirt.jpg',
        '/mens-dress-shirt.jpg',
        '/mens-dress-shirt.jpg'
    ],
    5: [
        '/mens-wool-coat-camel.jpg',
        '/mens-jacket-minimal.jpg',
        '/trench-coat-beige.jpg'
    ],
    6: [
        '/beige-linen-blazer.jpg',
        '/beige-linen-blazer.jpg',
        '/linen-shirt-white.jpg'
    ],
    7: [
        '/grey-cashmere-cardigan.jpg',
        '/mens-sweater-minimal.jpg',
        '/mens-sweater-beige.jpg'
    ],
    8: [
        '/grey-dress-pants.jpg',
        '/mens-trousers-minimal.jpg',
        '/white-oxford-shirt.png'
    ],
    9: [
        '/striped-dress-shirt.jpg',
        '/mens-dress-shirt.jpg',
        '/white-oxford-shirt-front.jpg'
    ],
    10: [
        '/cable-knit-sweater-beige.jpg',
        '/mens-sweater-beige.jpg',
        '/mens-sweater-minimal.jpg'
    ],
    11: [
        '/denim-jacket-classic.jpg',
        '/mens-jacket-minimal.jpg',
        '/bomber-jacket-olive.jpg'
    ],
    12: [
        '/slim-fit-jeans-dark-blue.jpg',
        '/cargo-pants-khaki.jpg',
        '/mens-trousers-minimal.jpg'
    ],
    13: [
        '/black-turtleneck-sweater.png',
        '/black-turtleneck-sweater.png',
        '/black-turtleneck-sweater.png'
    ],
    14: [
        '/stylish-man-minimal-fashion-portrait.jpg',
        '/stylish-man-minimal-fashion-portrait.jpg',
        '/stylish-man-minimal-fashion-portrait.jpg'
    ]
};
const products = baseProducts.map((product)=>({
        ...product,
        slug: product.name.toLowerCase().replace(/\s+/g, '-'),
        sizes: defaultSizes,
        colors: colorPalettes[product.id] || [
            {
                name: 'Classic',
                nameAr: 'تقليدي',
                value: '#444'
            }
        ],
        images: galleryMap[product.id] || [
            product.image,
            product.image,
            product.image
        ],
        details: sharedDetails,
        detailsAr: sharedDetailsAr
    }));
const productsById = products.reduce((acc, product)=>{
    acc[product.id] = product;
    return acc;
}, {});
function getProductById(id) {
    return productsById[id];
}
function getProductsByCategory(category) {
    const lowerCaseCategory = category.toLowerCase();
    return products.filter((product)=>product.category.toLowerCase() === lowerCaseCategory || product.categoryAr.toLowerCase() === lowerCaseCategory);
}
}),
"[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ProductDetailView",
    ()=>ProductDetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetailView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetailView() from the server but ProductDetailView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/products/[id]/product-detail-view.tsx <module evaluation>", "ProductDetailView");
}),
"[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ProductDetailView",
    ()=>ProductDetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetailView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetailView() from the server but ProductDetailView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/products/[id]/product-detail-view.tsx", "ProductDetailView");
}),
"[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f5b$id$5d2f$product$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f5b$id$5d2f$product$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f5b$id$5d2f$product$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/products/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f5b$id$5d2f$product$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/products/[id]/product-detail-view.tsx [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].map((product)=>({
            id: product.id.toString()
        }));
}
async function ProductPage({ params }) {
    const { id } = await params;
    const productId = Number(id);
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"])(productId);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f5b$id$5d2f$product$2d$detail$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductDetailView"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/app/products/[id]/page.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/products/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/products/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eaa36a27._.js.map