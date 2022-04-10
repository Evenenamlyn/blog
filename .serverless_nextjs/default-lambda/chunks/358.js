"use strict";
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5",
        children: children
    });
};


/***/ }),

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7294);





function CoverImage({ title , src , slug , height , width  }) {
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: src,
        alt: `Cover Image for ${title}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("shadow-sm", {
            "hover:shadow-md transition-shadow duration-200": slug
        }),
        layout: "responsive",
        width: width,
        height: height
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: `/posts/${slug}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    });
};


/***/ }),

/***/ 8296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8299);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);



function Intro() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .WEB_NAME */ .Ey
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "text-center md:text-left text-sm mt-5 md:pl-8",
                children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .TAG_LINE */ .Lt
            })
        ]
    });
};


/***/ }),

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(959);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./components/alert.js





function Alert({ preview  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: classnames_default()("border-b", {
            "bg-accent-7 border-accent-7 text-white": preview,
            "bg-accent-1 border-accent-2": !preview
        }),
        children: /*#__PURE__*/ jsx_runtime.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "py-2 text-center text-sm",
                children: [
                    "Work In Progress - Follow along on\xa0",
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: `${constants/* GITHUB_BLOG */.Ce}`,
                        className: "underline hover:text-success transition-colors",
                        children: "GitHub"
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "bg-accent-1 border-t border-accent-2",
        children: /*#__PURE__*/ jsx_runtime.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    className: "text-center md:text-left text-md mt-5 md:pl-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: `${constants/* GITHUB_LINK */.$t}`,
                            className: "mx-3 font-bold hover:underline",
                            children: "My GitHub"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: `${constants/* TWITTER_LINK */.v}`,
                            className: "mx-3 font-bold hover:underline",
                            children: "My Twitter"
                        })
                    ]
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/meta.js




function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "manifest",
                href: "/favicons/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "mask-icon",
                href: "/favicons/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "shortcut icon",
                href: "/favicons/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-config",
                content: "/favicons/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: `${constants/* TAG_LINE */.Lt}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: constants.HOME_OG_IMAGE_URL
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js





function Layout({ preview , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Meta, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Alert, {
                        preview: preview
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug),
/* harmony export */   "Bd": () => (/* binding */ getAllPosts)
/* harmony export */ });
/* unused harmony export getPostSlugs */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9675);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "_posts");
function getPostSlugs() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields)
    )// sort posts by date in descending order
    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1
    );
    return posts;
}


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ey": () => (/* binding */ WEB_NAME),
/* harmony export */   "Lt": () => (/* binding */ TAG_LINE),
/* harmony export */   "$t": () => (/* binding */ GITHUB_LINK),
/* harmony export */   "v": () => (/* binding */ TWITTER_LINK),
/* harmony export */   "Ce": () => (/* binding */ GITHUB_BLOG)
/* harmony export */ });
const WEB_NAME = "Evelyn Holtzner";
const TAG_LINE = "Sys. Admin. | Cloud | NodeJS | Python";
const GITHUB_LINK = "https://github.com/Evenenamlyn";
const TWITTER_LINK = "https://twitter.com/evelyn_holtzner";
const GITHUB_BLOG = "https://github.com/Evenenamlyn/blog";


/***/ })

};
;