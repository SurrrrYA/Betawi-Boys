import { Head, Link } from '@inertiajs/react';
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Menu,
    ShoppingBag,
    X,
} from 'lucide-react';
import { useState } from 'react';

type Product = {
    id: number;
    category_id: number | null;
    name: string;
    slug: string;
    description: string | null;
    price: string | number;
    stock: number;
    image: string | null;
    category: {
        id: number;
        name: string;
    } | null;
};

type EducationArticle = {
    number: string;
    category: string;
    title: string;
    slug: string;
    description: string;
    image: string;
};

type WelcomeProps = {
    products: Product[];
    educationArticles: EducationArticle[];
};

const fallbackProductImage =
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85';

const fallbackEducationImage =
    'https://placehold.co/900x720?text=Edukasi+Betawi';

const productionServices = [
    'Seragam komunitas dan perusahaan',
    'Kaos, hoodie, dan pakaian kustom',
    'Merchandise untuk acara dan organisasi',
];

function formatRupiah(price: string | number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(Number(price));
}

export default function Welcome({
    products,
    educationArticles,
}: WelcomeProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <Head title="BetawiBoys — Kenakan Akar Budayamu">
                <meta
                    name="description"
                    content="BetawiBoys menghadirkan streetwear, layanan produksi pakaian kustom One Production, serta edukasi sejarah, kesenian, tradisi, dan kuliner Betawi."
                />
                <meta name="theme-color" content="#111111" />
            </Head>

            <div className="min-h-screen overflow-hidden bg-[#f5f3ee] text-[#111111]">
                {/* Announcement Bar */}
                <div className="bg-[#d71920] px-4 py-2.5 text-center text-[9px] font-bold tracking-[0.18em] text-white sm:text-[11px] sm:tracking-[0.24em]">
                    BERAKAR PADA BUDAYA. HADIR UNTUK JALANAN.
                </div>

                {/* Navigation */}
                <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f3ee]/95 backdrop-blur-md">
                    <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
                        <Link
                            href="/"
                            className="group flex shrink-0 items-center gap-2.5"
                            aria-label="BetawiBoys home"
                            onClick={closeMenu}
                        >
                            <span className="flex h-9 w-9 items-center justify-center bg-[#d71920] text-xl font-black text-white transition-transform group-hover:-rotate-6">
                                B.
                            </span>

                            <span className="text-lg font-black tracking-[-0.075em] sm:text-2xl">
                                BETAWI
                                <span className="text-[#d71920]">BOYS</span>
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-7 text-[10px] font-bold tracking-[0.12em] xl:flex">
                            <a
                                href="#collection"
                                className="transition-colors hover:text-[#d71920]"
                            >
                                TOKO
                            </a>

                            <Link
                                href="/one-production"
                                className="transition-colors hover:text-[#1769aa]"
                            >
                                ONE PRODUCTION
                            </Link>

                            <a
                                href="#culture"
                                className="transition-colors hover:text-[#d71920]"
                            >
                                BUDAYA
                            </a>

                            <Link
                                href="/edukasi-betawi"
                                className="transition-colors hover:text-[#d71920]"
                            >
                                EDUKASI BETAWI
                            </Link>
                        </nav>

                        <div className="flex items-center gap-2.5">
                            <Link
                                href="/login"
                                className="hidden px-2 py-2 text-[10px] font-bold tracking-[0.14em] transition-colors hover:text-[#d71920] sm:block"
                            >
                                AKUN
                            </Link>

                            <a
                                href="#collection"
                                aria-label="Lihat koleksi"
                                className="flex h-10 w-10 items-center justify-center border border-black/15 transition-colors hover:border-black hover:bg-black hover:text-white"
                            >
                                <ShoppingBag size={17} strokeWidth={1.7} />
                            </a>

                            <button
                                type="button"
                                onClick={() => setMenuOpen((open) => !open)}
                                aria-label={
                                    menuOpen ? 'Tutup menu' : 'Buka menu'
                                }
                                aria-expanded={menuOpen}
                                className="flex h-10 w-10 items-center justify-center border border-black/15 xl:hidden"
                            >
                                {menuOpen ? (
                                    <X size={20} />
                                ) : (
                                    <Menu size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {menuOpen && (
                        <nav className="border-t border-black/10 bg-[#f5f3ee] px-5 py-3 shadow-lg xl:hidden">
                            <a
                                href="#collection"
                                onClick={closeMenu}
                                className="block border-b border-black/10 py-4 text-xs font-bold tracking-widest"
                            >
                                TOKO
                            </a>

                            <Link
                                href="/one-production"
                                onClick={closeMenu}
                                className="block border-b border-black/10 py-4 text-xs font-bold tracking-widest"
                            >
                                ONE PRODUCTION
                            </Link>

                            <a
                                href="#culture"
                                onClick={closeMenu}
                                className="block border-b border-black/10 py-4 text-xs font-bold tracking-widest"
                            >
                                BUDAYA
                            </a>

                            <Link
                                href="/edukasi-betawi"
                                onClick={closeMenu}
                                className="block py-4 text-xs font-bold tracking-widest"
                            >
                                EDUKASI BETAWI
                            </Link>
                        </nav>
                    )}
                </header>

                <main>
                    {/* Hero */}
                    <section className="relative bg-[#111111] text-white">
                        <div className="mx-auto grid max-w-[1600px] lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr]">
                            <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                                <div className="mb-8 flex items-center gap-3">
                                    <span className="h-[2px] w-10 bg-[#d71920]" />

                                    <span className="text-[10px] font-bold tracking-[0.28em] text-white/60 sm:text-xs">
                                        JAKARTA · INDONESIA
                                    </span>
                                </div>

                                <h1 className="max-w-3xl text-[clamp(3.5rem,8.5vw,8rem)] leading-[0.81] font-black tracking-[-0.085em]">
                                    BANGGA
                                    <br />
                                    PADA
                                    <br />
                                    <span className="text-[#d71920]">
                                        AKARMU.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                                    Berakar pada budaya. Bergerak bersama zaman.
                                    Streetwear untuk mereka yang bangga dengan
                                    asalnya dan berani menentukan jalannya sendiri.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <a
                                        href="#collection"
                                        className="group inline-flex min-h-12 items-center gap-5 bg-[#d71920] px-6 text-[10px] font-bold tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-black sm:text-xs"
                                    >
                                        LIHAT KOLEKSI
                                        <ArrowRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>

                                    <Link
                                        href="/one-production"
                                        className="group inline-flex min-h-12 items-center gap-3 border border-white/30 px-5 text-[10px] font-bold tracking-[0.1em] transition-colors hover:border-white hover:bg-white hover:text-black sm:px-6 sm:text-xs"
                                    >
                                        PRODUKSI KUSTOM
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>

                                <div className="mt-14 flex items-center gap-3 text-[9px] font-semibold tracking-[0.2em] text-white/45 sm:mt-16 sm:text-[10px]">
                                    <ArrowDownRight size={16} />
                                    DIBUAT DENGAN KEBANGGAAN LOKAL
                                </div>

                                <div className="absolute top-12 right-8 hidden text-[10px] font-bold tracking-[0.3em] text-white/30 [writing-mode:vertical-rl] lg:block">
                                    EST. IN JAKARTA
                                </div>
                            </div>

                            <div className="relative min-h-[430px] overflow-hidden bg-[#27221f] lg:min-h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=90"
                                    alt="Streetwear editorial fashion"
                                    fetchPriority="high"
                                    className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition-transform duration-1000 hover:scale-[1.03]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
                                <div className="absolute inset-0 border-l border-white/10" />

                                <div className="absolute top-7 right-6 border border-white/50 px-3 py-2 text-[8px] font-bold tracking-[0.2em] text-white sm:top-12 sm:right-12 sm:px-4 sm:text-[9px]">
                                    BUDAYA IN EVERY THREAD
                                </div>

                                <div className="absolute right-6 bottom-8 left-6 sm:right-10 sm:bottom-10 sm:left-10 lg:right-12 lg:bottom-12 lg:left-12">
                                    <div className="mb-4 flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] text-white/70 sm:text-[10px]">
                                        <span className="h-2 w-2 bg-[#d71920]" />
                                        GENERASI BARU
                                    </div>

                                    <p className="max-w-lg text-3xl leading-[0.95] font-black tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                                        JIWA LOKAL.
                                        <br />
                                        <span className="text-[#e52b31]">
                                            GAYA GLOBAL.
                                        </span>
                                    </p>
                                </div>

                                <div className="absolute top-1/2 left-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-[#111111] text-center text-[9px] leading-4 font-bold tracking-widest text-white">
                                        BETAWI
                                        <br />
                                        PRIDE
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 border-t border-white/15 bg-[#d71920] text-white">
                            {[
                                'IDENTITAS LOKAL',
                                'EVERYDAY BUDAYA',
                                'TAMPIL BERBEDA',
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className={`px-2 py-5 text-center sm:py-6 ${
                                        index < 2
                                            ? 'border-r border-white/20'
                                            : ''
                                    }`}
                                >
                                    <p className="text-[8px] font-bold tracking-[0.1em] sm:text-xs sm:tracking-[0.12em]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Collection */}
                    <section
                        id="collection"
                        className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
                    >
                        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#d71920]">
                                    TEMUKAN KOLEKSI
                                </p>

                                <h2 className="text-4xl leading-none font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                                    DIBUAT UNTUK
                                    <br />
                                    <span className="text-[#d71920]">
                                        JALANAN.
                                    </span>
                                </h2>
                            </div>

                            <a
                                href="#collection"
                                className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-[10px] font-bold tracking-[0.16em] transition-colors hover:border-[#d71920] hover:text-[#d71920]"
                            >
                                JELAJAHI SEMUA PRODUK
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.slug}`}
                                        className="group block min-w-0"
                                        aria-label={`Lihat detail ${product.name}`}
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e3dc]">
                                            <img
                                                src={
                                                    product.image ||
                                                    fallbackProductImage
                                                }
                                                alt={product.name}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            {index === 0 && (
                                                <span className="absolute top-4 left-4 bg-[#d71920] px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-white">
                                                    PRODUK TERBARU
                                                </span>
                                            )}

                                            <span className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center bg-[#f5f3ee] transition-colors group-hover:bg-[#d71920] group-hover:text-white">
                                                <ArrowUpRight size={20} />
                                            </span>

                                            <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-widest text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.8)]">
                                                {String(index + 1).padStart(2, '0')}{' '}
                                                / BB
                                            </span>
                                        </div>

                                        <div className="flex items-start justify-between gap-3 pt-5">
                                            <div>
                                                <p className="mb-2 text-[9px] font-bold tracking-[0.2em] text-black/45">
                                                    {product.category?.name ??
                                                        'KOLEKSI BETAWI'}
                                                </p>

                                                <h3 className="text-lg leading-tight font-black tracking-tight transition-colors group-hover:text-[#d71920] sm:text-xl">
                                                    {product.name}
                                                </h3>
                                            </div>

                                            <p className="shrink-0 pt-5 text-xs font-bold sm:text-sm">
                                                {formatRupiah(product.price)}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between gap-3 text-[10px]">
                                            <span className="text-black/45">
                                                Stok: {product.stock}
                                            </span>

                                            <span
                                                className={
                                                    product.stock > 0
                                                        ? 'font-bold text-green-700'
                                                        : 'font-bold text-red-600'
                                                }
                                            >
                                                {product.stock > 0
                                                    ? 'TERSEDIA'
                                                    : 'HABIS'}
                                            </span>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full border border-black/10 px-6 py-12 text-center">
                                    <h3 className="text-xl font-black">
                                        Koleksi sedang dipersiapkan.
                                    </h3>

                                    <p className="mt-3 text-sm text-black/55">
                                        Produk baru akan segera hadir.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* One Production */}
                    <section
                        id="production"
                        className="bg-[#102a43] text-white"
                    >
                        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
                            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px]">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
                                    alt="Suasana kerja dan produksi apparel"
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/90 via-[#102a43]/10 to-[#102a43]/20" />

                                <div className="absolute top-8 left-6 border border-white/40 px-4 py-2 text-[9px] font-bold tracking-[0.2em] sm:left-10 sm:text-[10px]">
                                    ONE PRODUCTION · PAKAIAN KUSTOM
                                </div>

                                <div className="absolute right-6 bottom-8 left-6 sm:right-10 sm:bottom-10 sm:left-10">
                                    <p className="text-5xl leading-[0.88] font-black tracking-[-0.07em] sm:text-7xl">
                                        IDENTITAS IDEA.
                                        <br />
                                        <span className="text-[#8fc8ff]">
                                            JADI NYATA.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                                <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-[#8fc8ff]">
                                    LEBIH DARI KOLEKSI KAMI
                                </p>

                                <h2 className="text-4xl leading-[0.95] font-black tracking-[-0.07em] sm:text-6xl">
                                    ONE
                                    <br />
                                    PRODUCTION
                                    <span className="text-[#8fc8ff]">.</span>
                                </h2>

                                <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                                    Punya ide untuk seragam, komunitas, merek
                                    pakaian, atau merchandise? One Production
                                    membantu mewujudkan kebutuhan pakaian custom
                                    melalui proses yang jelas dari konsultasi
                                    sampai produksi.
                                </p>

                                <div className="mt-8 space-y-4 border-y border-white/15 py-6">
                                    {productionServices.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm text-white/90"
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#1769aa] text-xs">
                                                ✓
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/one-production"
                                    className="group mt-8 inline-flex min-h-12 w-fit items-center gap-5 bg-white px-6 text-[10px] font-bold tracking-[0.15em] text-[#102a43] transition-colors hover:bg-[#8fc8ff]"
                                >
                                    JELAJAHI ONE PRODUCTION
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Culture Introduction */}
                    <section
                        id="culture"
                        className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#d71920]">
                                    MORE THAN WHAT YOU KENAKAN
                                </p>

                                <h2 className="text-4xl leading-[0.95] font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                                    KENALI
                                    <br />
                                    IDENTITAS
                                    <br />
                                    <span className="text-[#d71920]">
                                        AKARMU.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-sm text-sm leading-7 text-black/60">
                                    Budaya bukan hanya sesuatu yang kita kenang.
                                    Ia hidup dalam cerita, kebiasaan, karya, dan
                                    cara generasi baru mengekspresikan dirinya.
                                </p>

                                <Link
                                    href="/edukasi-betawi"
                                    className="group mt-7 inline-flex items-center gap-3 border-b border-black pb-2 text-[10px] font-bold tracking-[0.16em] transition-colors hover:border-[#d71920] hover:text-[#d71920]"
                                >
                                    JELAJAHI EDUKASI BETAWI
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </div>

                            <div className="relative min-h-[300px] overflow-hidden bg-[#e7e3dc] lg:min-h-[470px]">
                                <img
                                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85"
                                    alt="Suasana acara seni dan budaya"
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                <div className="absolute right-6 bottom-6 left-6 text-white sm:right-10 sm:bottom-10 sm:left-10">
                                    <p className="text-[9px] font-bold tracking-[0.25em] text-white/75">
                                        BUDAYA IS A LIVING STORY
                                    </p>

                                    <p className="mt-3 max-w-lg text-3xl leading-none font-black tracking-[-0.05em] sm:text-5xl">
                                        KENALI AKARMU.
                                        <br />
                                        HIDUPKAN BUDAYA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Edukasi Betawi - Data dari database */}
                    <section
                        id="education"
                        className="bg-[#eae7e0] py-20 sm:py-28"
                    >
                        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
                            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                                <div>
                                    <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#d71920]">
                                        SEJARAH, KESENIAN, TRADISI & WARISAN
                                    </p>

                                    <h2 className="text-4xl leading-none font-black tracking-[-0.07em] sm:text-6xl">
                                        EDUKASI{' '}
                                        <span className="text-[#d71920]">
                                            BETAWI.
                                        </span>
                                    </h2>
                                </div>

                                <p className="max-w-md text-sm leading-7 text-black/55">
                                    Kenali sejarah, kesenian, tradisi, bahasa,
                                    dan kuliner Betawi melalui cerita yang dekat
                                    dengan kehidupan generasi masa kini.
                                </p>
                            </div>

                            {educationArticles.length > 0 ? (
                                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                                    {educationArticles.map((article) => (
                                        <article
                                            key={article.slug}
                                            className="group min-w-0"
                                        >
                                            <Link
                                                href={`/edukasi-betawi/${article.slug}`}
                                                className="block"
                                                aria-label={`Baca edukasi ${article.title}`}
                                            >
                                                <div className="relative aspect-[5/4] overflow-hidden bg-[#d8d3ca]">
                                                    <img
                                                        src={
                                                            article.image ||
                                                            fallbackEducationImage
                                                        }
                                                        alt={article.title}
                                                        loading="lazy"
                                                        onError={(event) => {
                                                            event.currentTarget.onerror =
                                                                null;
                                                            event.currentTarget.src =
                                                                fallbackEducationImage;
                                                        }}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />

                                                    <span className="absolute top-4 left-4 bg-[#f5f3ee] px-3 py-2 text-[9px] font-bold tracking-[0.16em]">
                                                        {article.category}
                                                    </span>

                                                    <span className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center bg-[#f5f3ee] transition-colors group-hover:bg-[#d71920] group-hover:text-white">
                                                        <ArrowUpRight size={20} />
                                                    </span>
                                                </div>

                                                <div className="flex gap-5 border-b border-black/15 py-6">
                                                    <span className="pt-1 text-xs font-bold text-[#d71920]">
                                                        {article.number}
                                                    </span>

                                                    <div>
                                                        <h3 className="text-xl leading-tight font-black tracking-tight transition-colors group-hover:text-[#d71920] sm:text-2xl">
                                                            {article.title}
                                                        </h3>

                                                        <p className="mt-3 text-sm leading-6 text-black/55">
                                                            {article.description}
                                                        </p>

                                                        <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] transition-colors group-hover:text-[#d71920]">
                                                            BACA SELENGKAPNYA
                                                            <ArrowUpRight size={14} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="mt-10 border border-black/10 px-6 py-12 text-center lg:mt-14">
                                    <h3 className="text-xl font-black">
                                        Cerita Betawi segera hadir.
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-black/55">
                                        Artikel edukasi akan ditampilkan di sini
                                        setelah dipublikasikan melalui dashboard
                                        admin.
                                    </p>
                                </div>
                            )}

                            <div className="mt-10 flex justify-center">
                                <Link
                                    href="/edukasi-betawi"
                                    className="group inline-flex min-h-12 items-center gap-5 bg-[#111111] px-6 text-[10px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-[#d71920]"
                                >
                                    JELAJAHI SEMUA EDUKASI
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="bg-[#d71920] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
                        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
                            <div>
                                <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-white/70">
                                    JADI BAGIAN DARI CERITA
                                </p>

                                <h2 className="text-4xl leading-[0.95] font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                                    KENAKAN IDENTITAS
                                    <br className="sm:hidden" /> CERITAMU.
                                </h2>
                            </div>

                            <div className="max-w-md">
                                <p className="text-sm leading-7 text-white/85">
                                    Temukan koleksimu, mulai proyek apparel
                                    bersama One Production, atau kenali lebih
                                    dekat cerita dan budaya yang menginspirasi
                                    BetawiBoys.
                                </p>

                                <a
                                    href="#collection"
                                    className="group mt-6 inline-flex min-h-12 items-center gap-6 bg-white px-6 text-[10px] font-bold tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
                                >
                                    TEMUKAN GAYAMU
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-[#111111] px-5 pt-12 pb-8 text-white sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-[1600px]">
                        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
                            <div>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2.5"
                                >
                                    <span className="flex h-9 w-9 items-center justify-center bg-[#d71920] text-xl font-black">
                                        B.
                                    </span>

                                    <span className="text-xl font-black tracking-[-0.07em]">
                                        BETAWI
                                        <span className="text-[#d71920]">
                                            BOYS
                                        </span>
                                    </span>
                                </Link>

                                <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
                                    Busana streetwear yang berakar pada budaya
                                    Betawi dan semangat generasi baru Jakarta.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-5 text-[10px] font-bold tracking-[0.2em] text-white/45">
                                    JELAJAHI
                                </h3>

                                <div className="flex flex-col gap-4 text-sm text-white/75">
                                    <a
                                        href="#collection"
                                        className="transition hover:text-white"
                                    >
                                        The Store
                                    </a>

                                    <Link
                                        href="/one-production"
                                        className="transition hover:text-[#8fc8ff]"
                                    >
                                        One Production
                                    </Link>

                                    <a
                                        href="#culture"
                                        className="transition hover:text-white"
                                    >
                                        Budaya
                                    </a>

                                    <Link
                                        href="/edukasi-betawi"
                                        className="transition hover:text-white"
                                    >
                                        Edukasi Betawi
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-5 text-[10px] font-bold tracking-[0.2em] text-white/45">
                                    IDENTITAS AKUN
                                </h3>

                                <div className="flex flex-col gap-4 text-sm text-white/75">
                                    <Link
                                        href="/login"
                                        className="transition hover:text-white"
                                    >
                                        Masuk
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="transition hover:text-white"
                                    >
                                        Buat Akun
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-5 text-[10px] font-bold tracking-[0.2em] text-white/45">
                                    OUR PHILOSOPHY
                                </h3>

                                <p className="text-2xl leading-tight font-black tracking-[-0.04em]">
                                    ROOTED IN
                                    <br />
                                    BUDAYA.
                                    <br />
                                    <span className="text-[#e52b31]">
                                        BUILT FOR
                                    </span>
                                    <br />
                                    <span className="text-[#e52b31]">
                                        JALANAN.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] tracking-wider text-white/40 sm:flex-row">
                            <p>
                                © {new Date().getFullYear()} BetawiBoys. Hak
                                cipta dilindungi.
                            </p>

                            <p className="flex items-center gap-2">
                                <span aria-hidden="true">✦</span>
                                DIBUAT DENGAN KEBANGGAAN LOKAL.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
