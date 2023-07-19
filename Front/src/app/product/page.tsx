import NavBarStore from "@/components/ProductPage/NavBarStore";
import FormBuy from "@/components/ProductPage/formBuy";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
};

export default function ProductPage() {
  return (
    <div className="container mx-auto">
      <NavBarStore />

      <section>
        <div className="relative  mx-auto max-w-screen-xl px-4 py-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <div className="grid order-2 grid-cols-1 gap-4 lg:grid-cols-1 ">
              <div className="  h-full  w-full z-10">
                <div className="md:py-8 ">
                  <div className="mb-2 md:mb-3">
                    <h2 className=" font-bold text-gray-800 lg:text-3xl">
                      مجموعة نقل الأثاث عجلات الشرائح
                    </h2>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                      الألوان
                    </span>

                    <div className="flex flex-wrap gap-2 ">
                      <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      ></button>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      ></button>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      ></button>
                    </div>
                  </div>

                  <div className="mb-8 md:mb-10">
                    <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                      مقاس
                    </span>

                    <div className="flex flex-wrap gap-3 ">
                      <button
                        type="button"
                        className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        XS
                      </button>
                      <button
                        type="button"
                        className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        S
                      </button>
                      <span className="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">
                        M
                      </span>
                      <button
                        type="button"
                        className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        L
                      </button>
                      <span className="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">
                        XL
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 ">
                    <div className="flex items-end gap-2 ">
                      <span className="text-xl font-bold text-gray-800 md:text-2xl ">
                        MAD 15.00
                      </span>
                      <span className="mb-0.5 text-red-500 line-through">
                        MAD $30.00
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 flex items-center  gap-2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>

                    <span className="text-sm">2-4 يوم الشحن</span>
                  </div>
                  <div className="flex flex-col gap-2.5 pl-10">
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                    <p>
                      Quincaillerie de meuble Roulette et roue Excellent Outil
                      Pour Vous Aider à Déplacer Les Meubles Et Objets Lourds
                      Matériau de haute qualité : fabriqué avec un corps en
                      acier durable, pas facile à rouiller, une poignée en PVC
                      antidérapante, 4 rouleaux cylindriques en plastique ABS.
                      Facile à utiliser : Facile à assembler, sans outils.
                      Soulevez le meuble d'une main, placez-le, faites-le
                      glisser, ajuster et nivelez vos appareils et meubles.
                      Mobilier à la main, soulever des objets lourds, faciliter
                      les déplacements et réorganiser le bureau, les meubles et
                      les appareils électroménagers. L'embout de protection en
                      caoutchouc n'endommage pas le meuble.
                    </p>
                  </div>
                  <FormBuy />
                </div>
              </div>
            </div>

            <div className=" lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                width={500}
                height={500}
                alt="Picture of the author"
                className=" lg:sticky content-center	  top-0 h-6/4 w-6/4 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
