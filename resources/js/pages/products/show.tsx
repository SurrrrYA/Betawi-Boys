import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Menu,
    ShoppingBag,
    ShieldCheck,
    Truck,
} from 'lucide-react';

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

type Props = {
    product: Product;
};

function formatRupiah(price: string | number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(Number(price));
}

export default function Show({ product }: Props) {
    const { post, processing } = useForm({});

    const addToCart = () => {
        post(`/cart/${product.slug}`, {
            preserveScroll: true,
        });
    };

    const image =
        product.image ||
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85';

    const isAvailable = product.stock > 0;

    return (
        <>
            <Head title={`${product.name} — BetawiBoys`}>
                <meta
                    name="description"
                    content={
                        product.description ||
                        `${product.name} dari koleksi BetawiBoys.`
                    }
                />
            </Head>

            <main className="min-h-screen bg-[#f7f5f0] text-[#151515]">
                {/* Announcement bar */}
                <div className="bg-[#151515] px-4 py-2.5 text-center text-[9px] font-semibold tracking-[0.2em] text-white sm:text-[10px]">
                    IDENTITAS LOKAL. GAYA GLOBAL. — BETAWIBOYS
                </div>

                {/* Header */}
                <header className="sticky top-0 z-30 border-b border-black/[0.08] bg-[#f7f5f0]/95 backdrop-blur-md">
                    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
                        <Link
                            href="/"
                            className="group flex shrink-0 items-center gap-3"
                        >
                            <span className="flex h-10 w-10 items-center justify-center bg-[#d71920] text-xl font-black text-white transition-transform group-hover:-rotate-6">
                                B.
                            </span>

                            <span className="text-lg font-black tracking-[-0.075em] sm:text-xl">
                                BETAWI
                                <span className="text-[#d71920]">BOYS</span>
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-8 md:flex">
                            <Link
                                href="/#collection"
                                className="text-[10px] font-bold tracking-[0.15em] text-black/60 transition-colors hover:text-[#d71920]"
                            >
                                KOLEKSI
                            </Link>

                            <Link
                                href="/one-production"
                                className="text-[10px] font-bold tracking-[0.15em] text-black/60 transition-colors hover:text-[#d71920]"
                            >
                                ONE PRODUCTION
                            </Link>
                        </nav>

                        <div className="flex items-center gap-3 sm:gap-5">
                            <Link
                                href="/cart"
                                aria-label="Buka keranjang"
                                className="group relative flex h-11 items-center justify-center gap-2 border border-black/10 px-3 transition-colors hover:border-[#d71920] hover:text-[#d71920] sm:px-4"
                            >
                                <ShoppingBag size={17} strokeWidth={1.8} />

                                <span className="hidden text-[10px] font-bold tracking-[0.12em] sm:inline">
                                    KERANJANG
                                </span>
                            </Link>

                            <Link
                                href="/"
                                className="hidden items-center gap-2 text-[10px] font-bold tracking-[0.12em] transition-colors hover:text-[#d71920] sm:flex"
                            >
                                KEMBALI KE TOKO
                                <ArrowUpRight size={14} />
                            </Link>

                            <Link
                                href="/cart"
                                aria-label="Keranjang belanja"
                                className="flex h-10 w-10 items-center justify-center border border-black/10 sm:hidden"
                            >
                                <Menu size={19} />
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Breadcrumb */}
                <div className="mx-auto max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-12 lg:pt-10">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium tracking-wide text-black/40">
                        <Link
                            href="/"
                            className="transition-colors hover:text-[#d71920]"
                        >
                            BERANDA
                        </Link>

                        <span>/</span>

                        <Link
                            href="/#collection"
                            className="transition-colors hover:text-[#d71920]"
                        >
                            KOLEKSI
                        </Link>

                        <span>/</span>

                        <span className="max-w-[180px] truncate font-bold text-black/80">
                            {product.name.toUpperCase()}
                        </span>
                    </div>
                </div>

                {/* Product detail */}
                <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-8 sm:pb-24 lg:px-12 lg:pt-8">
                    <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
                        {/* Product image */}
                        <div>
                            <div className="group relative aspect-[4/5] overflow-hidden bg-[#e9e5dd]">
                                <img
                                    src={image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                <div className="absolute left-4 top-4 flex items-center gap-2 bg-[#d71920] px-4 py-3 text-[9px] font-bold tracking-[0.16em] text-white sm:left-6 sm:top-6">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    BETAWIBOYS ORIGINAL
                                </div>

                                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">
                                    <div>
                                        <p className="text-[9px] font-semibold tracking-[0.2em] text-white/75">
                                            AUTHENTIC LOCAL CULTURE
                                        </p>

                                        <p className="mt-2 text-xl font-black tracking-[-0.05em] sm:text-2xl">
                                            Made for the Culture.
                                        </p>
                                    </div>

                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 backdrop-blur-sm">
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-b border-black/10 pb-4">
                                <p className="text-[9px] font-semibold tracking-[0.16em] text-black/40">
                                    BETAWIBOYS / ORIGINAL SERIES
                                </p>

                                <p className="text-[9px] font-semibold tracking-[0.12em] text-black/40">
                                    BB — {String(product.id).padStart(3, '0')}
                                </p>
                            </div>
                        </div>

                        {/* Product information */}
                        <div className="flex flex-col pt-1 lg:pt-8">
                            <div className="flex items-center justify-between gap-4">
                                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#d71920]">
                                    <span className="h-1.5 w-1.5 bg-[#d71920]" />
                                    {(
                                        product.category?.name ??
                                        'KOLEKSI BETAWI'
                                    ).toUpperCase()}
                                </span>

                                <span
                                    className={`flex items-center gap-1.5 text-[10px] font-semibold ${
                                        isAvailable
                                            ? 'text-emerald-700'
                                            : 'text-red-600'
                                    }`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${
                                            isAvailable
                                                ? 'bg-emerald-600'
                                                : 'bg-red-600'
                                        }`}
                                    />

                                    {isAvailable ? 'TERSEDIA' : 'STOK HABIS'}
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.075em] sm:text-5xl lg:mt-8 lg:text-6xl xl:text-7xl">
                                {product.name}
                                <span className="text-[#d71920]">.</span>
                            </h1>

                            <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-7">
                                <div>
                                    <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-black/40">
                                        HARGA PRODUK
                                    </p>

                                    <p className="text-2xl font-black tracking-[-0.055em] sm:text-3xl">
                                        {formatRupiah(product.price)}
                                    </p>
                                </div>

                                <span className="border border-black/10 px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-black/60">
                                    ORIGINAL PRODUCT
                                </span>
                            </div>

                            {/* Description */}
                            <div className="py-7">
                                <p className="text-[10px] font-bold tracking-[0.18em]">
                                    TENTANG PRODUK
                                </p>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-black/60">
                                    {product.description ||
                                        'Terinspirasi oleh identitas dan budaya Betawi, produk ini membawa karakter lokal ke dalam gaya modern. Dibuat untuk kamu yang ingin tampil dengan identitas sendiri.'}
                                </p>
                            </div>

                            {/* Stock */}
                            <div className="border-y border-black/10 py-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center bg-white">
                                            <Check
                                                size={16}
                                                className="text-[#d71920]"
                                            />
                                        </span>

                                        <div>
                                            <p className="text-xs font-bold">
                                                Ketersediaan produk
                                            </p>

                                            <p className="mt-1 text-[10px] text-black/45">
                                                {isAvailable
                                                    ? 'Siap untuk dipesan'
                                                    : 'Produk sedang habis'}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xs font-bold">
                                        {product.stock} unit
                                    </span>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <div className="mt-7">
                                <button
                                    type="button"
                                    onClick={addToCart}
                                    disabled={!isAvailable || processing}
                                    className="group flex min-h-[58px] w-full items-center justify-between gap-4 bg-[#d71920] px-5 text-white transition-colors duration-300 hover:bg-[#151515] disabled:cursor-not-allowed disabled:bg-black/25 sm:px-7"
                                >
                                    <span className="flex items-center gap-3">
                                        <ShoppingBag size={18} />

                                        <span className="text-[10px] font-bold tracking-[0.16em]">
                                            {processing
                                                ? 'MENAMBAHKAN PRODUK...'
                                                : isAvailable
                                                  ? 'TAMBAH KE KERANJANG'
                                                  : 'STOK SEDANG HABIS'}
                                        </span>
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                <p className="mt-3 text-center text-[10px] leading-5 text-black/40">
                                    Produk akan ditambahkan ke keranjang
                                    belanjamu.
                                </p>
                            </div>

                            {/* Service benefits */}
                            <div className="mt-7 grid grid-cols-2 gap-3">
                                <div className="flex items-start gap-3 border border-black/[0.08] bg-white/50 p-4">
                                    <ShieldCheck
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#d71920]"
                                    />

                                    <div>
                                        <p className="text-[10px] font-bold">
                                            Produk Original
                                        </p>

                                        <p className="mt-1 text-[9px] leading-4 text-black/45">
                                            Koleksi resmi BetawiBoys
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 border border-black/[0.08] bg-white/50 p-4">
                                    <Truck
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#d71920]"
                                    />

                                    <div>
                                        <p className="text-[10px] font-bold">
                                            Siap Dikirim
                                        </p>

                                        <p className="mt-1 text-[9px] leading-4 text-black/45">
                                            Pesanan diproses dengan teliti
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Brand statement */}
                            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
                                <p className="text-[9px] font-bold tracking-[0.18em] text-black/50">
                                    IDENTITAS LOKAL. GAYA GLOBAL.
                                </p>

                                <Link
                                    href="/#collection"
                                    className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] transition-colors hover:text-[#d71920]"
                                >
                                    JELAJAHI KOLEKSI
                                    <ArrowUpRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand banner */}
                <section className="overflow-hidden bg-[#151515] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#d71920]">
                                OUR IDENTITY, OUR PRIDE
                            </p>

                            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">
                                Bukan sekadar gaya.
                                <br />
                                Ini soal identitas.
                            </h2>
                        </div>

                        <Link
                            href="/#collection"
                            className="inline-flex min-h-12 w-fit items-center gap-4 border border-white/25 px-5 text-[10px] font-bold tracking-[0.15em] transition-colors hover:border-[#d71920] hover:bg-[#d71920]"
                        >
                            LIHAT KOLEKSI
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-[#151515] px-5 pb-7 text-white sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center">
                        <p>
                            © {new Date().getFullYear()} BetawiBoys. Hak cipta
                            dilindungi.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link
                                href="/"
                                className="transition-colors hover:text-white"
                            >
                                Beranda
                            </Link>

                            <Link
                                href="/cart"
                                className="transition-colors hover:text-white"
                            >
                                Keranjang
                            </Link>

                            <span>Made with pride in Jakarta.</span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}