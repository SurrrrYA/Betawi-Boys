import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingBag,
    Trash2,
    Truck,
} from 'lucide-react';
import { useState } from 'react';

type CartItem = {
    product_id: number;
    name: string;
    slug: string;
    price: number;
    image: string | null;
    stock: number;
    quantity: number;
    subtotal: number;
};

type Props = {
    items: CartItem[];
    total: number;
    flash?: {
        success?: string | null;
        error?: string | null;
    };
};

function formatRupiah(price: number): string {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(Number(price));
}

const imageFallback =
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=85';

export default function CartIndex({ items, total, flash }: Props) {
    const [busySlug, setBusySlug] = useState<string | null>(null);

    const totalItems = items.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );

    const submitAction = (slug: string, action: string) => {
        if (busySlug) return;

        setBusySlug(slug);

        router.post(
            `/cart/${slug}/${action}`,
            {},
            {
                preserveScroll: true,
                onFinish: () => setBusySlug(null),
            },
        );
    };

    const removeItem = (slug: string, name: string) => {
        if (busySlug) return;

        const confirmed = window.confirm(
            `Yakin ingin menghapus "${name}" dari keranjang?`,
        );

        if (!confirmed) return;

        setBusySlug(slug);

        router.post(
            `/cart/${slug}/remove`,
            {},
            {
                preserveScroll: true,
                onFinish: () => setBusySlug(null),
            },
        );
    };

    return (
        <>
            <Head title="Keranjang Belanja — BetawiBoys">
                <meta
                    name="description"
                    content="Periksa keranjang belanja dan pilihan koleksi streetwear BetawiBoys."
                />
            </Head>

            <main className="min-h-screen bg-[#f7f6f2] text-[#171717]">
                {/* Announcement bar */}
                <div className="bg-[#171717] px-4 py-2.5 text-center text-[9px] font-semibold tracking-[0.2em] text-white sm:text-[10px]">
                    FREE YOUR STYLE. OWN YOUR IDENTITY.
                    <span className="mx-2 text-[#e3262e]">/</span>
                    BETAWIBOYS ORIGINAL
                </div>

                {/* Header */}
                <header className="sticky top-0 z-30 border-b border-black/[0.07] bg-[#f7f6f2]/90 backdrop-blur-xl">
                    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
                        <Link
                            href="/"
                            className="group flex items-center gap-3"
                        >
                            <span className="flex h-10 w-10 items-center justify-center bg-[#d71920] text-xl font-black text-white transition-transform duration-300 group-hover:-rotate-6">
                                B.
                            </span>

                            <span className="text-lg font-black tracking-[-0.075em] sm:text-xl">
                                BETAWI
                                <span className="text-[#d71920]">BOYS</span>
                            </span>
                        </Link>

                        <div className="hidden items-center gap-8 md:flex">
                            <Link
                                href="/#collection"
                                className="text-[10px] font-bold tracking-[0.15em] text-black/50 transition-colors hover:text-[#d71920]"
                            >
                                KOLEKSI
                            </Link>

                            <Link
                                href="/one-production"
                                className="text-[10px] font-bold tracking-[0.15em] text-black/50 transition-colors hover:text-[#d71920]"
                            >
                                ONE PRODUCTION
                            </Link>
                        </div>

                        <Link
                            href="/#collection"
                            className="group inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] transition-colors hover:text-[#d71920]"
                        >
                            LANJUT BELANJA
                            <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </header>

                {/* Main content */}
                <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.12em] text-black/40">
                        <Link
                            href="/"
                            className="transition-colors hover:text-[#d71920]"
                        >
                            BERANDA
                        </Link>

                        <span>/</span>

                        <span className="text-black">KERANJANG</span>
                    </div>

                    {/* Heading */}
                    <div className="mt-7 flex flex-col justify-between gap-5 border-b border-black/10 pb-7 sm:mt-10 sm:flex-row sm:items-end sm:pb-9">
                        <div>
                            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] text-[#d71920]">
                                <span className="h-1.5 w-1.5 bg-[#d71920]" />
                                YOUR SELECTED PIECES
                            </p>

                            <h1 className="mt-4 text-4xl font-black leading-[0.92] tracking-[-0.08em] sm:text-6xl lg:text-7xl">
                                KERANJANG
                                <span className="text-[#d71920]">.</span>
                            </h1>

                            <p className="mt-4 max-w-md text-xs leading-6 text-black/50 sm:text-sm">
                                Koleksi pilihanmu sudah terkumpul. Periksa
                                kembali sebelum melanjutkan ke tahap berikutnya.
                            </p>
                        </div>

                        <div className="flex w-fit items-center gap-4 border border-black/10 bg-white/60 px-5 py-3">
                            <div className="flex h-10 w-10 items-center justify-center bg-[#171717] text-white">
                                <ShoppingBag size={18} />
                            </div>

                            <div>
                                <p className="text-xl font-black tracking-tight">
                                    {String(totalItems).padStart(2, '0')}
                                </p>

                                <p className="mt-0.5 text-[9px] font-semibold tracking-[0.12em] text-black/45">
                                    TOTAL UNIT
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flash messages */}
                    {flash?.success && (
                        <div
                            role="status"
                            className="mt-6 flex items-start gap-3 border border-emerald-700/15 bg-emerald-50 p-4 text-sm text-emerald-800"
                        >
                            <CheckCircle2
                                size={19}
                                className="mt-0.5 shrink-0"
                            />

                            <p>{flash.success}</p>
                        </div>
                    )}

                    {flash?.error && (
                        <div
                            role="alert"
                            className="mt-6 border border-red-700/20 bg-red-50 p-4 text-sm text-red-700"
                        >
                            {flash.error}
                        </div>
                    )}

                    {items.length === 0 ? (
                        /* Empty cart */
                        <div className="relative mt-10 overflow-hidden border border-black/[0.07] bg-white px-5 py-16 text-center sm:py-24">
                            <span className="pointer-events-none absolute -right-8 -top-12 select-none text-[180px] font-black leading-none tracking-[-0.12em] text-black/[0.025] sm:text-[260px]">
                                B.
                            </span>

                            <div className="relative mx-auto flex h-20 w-20 items-center justify-center bg-[#f7f6f2]">
                                <ShoppingBag
                                    size={30}
                                    strokeWidth={1.4}
                                    className="text-[#d71920]"
                                />
                            </div>

                            <p className="relative mt-7 text-[10px] font-bold tracking-[0.24em] text-[#d71920]">
                                NOTHING HERE YET
                            </p>

                            <h2 className="relative mt-3 text-3xl font-black tracking-[-0.065em] sm:text-5xl">
                                Masih kosong, nih.
                            </h2>

                            <p className="relative mx-auto mt-4 max-w-sm text-sm leading-7 text-black/50">
                                Temukan koleksi favoritmu dan pilih gaya yang
                                paling mencerminkan identitasmu.
                            </p>

                            <Link
                                href="/#collection"
                                className="group relative mt-8 inline-flex min-h-14 items-center gap-8 bg-[#d71920] px-6 text-[10px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-[#171717]"
                            >
                                JELAJAHI KOLEKSI

                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    ) : (
                        <div className="mt-7 grid items-start gap-8 lg:mt-9 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-12">
                            {/* Product list */}
                            <div className="min-w-0">
                                <div className="mb-2 hidden grid-cols-[minmax(0,1fr)_115px_125px] gap-5 border-b border-black/10 px-2 pb-4 text-[9px] font-bold tracking-[0.16em] text-black/40 sm:grid lg:grid-cols-[minmax(0,1fr)_130px_140px]">
                                    <span>PRODUK PILIHAN</span>
                                    <span>HARGA</span>
                                    <span>SUBTOTAL</span>
                                </div>

                                <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
                                    {items.map((item, index) => {
                                        const isBusy = busySlug === item.slug;
                                        const canIncrease =
                                            item.quantity < item.stock;

                                        return (
                                            <article
                                                key={item.product_id}
                                                className={`group grid gap-4 px-2 py-5 transition-all duration-300 hover:bg-white/70 sm:grid-cols-[minmax(0,1fr)_115px_125px] sm:items-center sm:gap-5 sm:py-6 lg:grid-cols-[minmax(0,1fr)_130px_140px] ${
                                                    isBusy
                                                        ? 'opacity-50'
                                                        : ''
                                                }`}
                                            >
                                                {/* Product identity */}
                                                <div className="flex min-w-0 gap-4 sm:gap-5">
                                                    <Link
                                                        href={`/products/${item.slug}`}
                                                        className="relative h-[122px] w-[94px] shrink-0 overflow-hidden bg-[#e9e5dd] sm:h-[132px] sm:w-[102px]"
                                                    >
                                                        <img
                                                            src={
                                                                item.image ||
                                                                imageFallback
                                                            }
                                                            alt={item.name}
                                                            loading="lazy"
                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />

                                                        <span className="absolute bottom-0 left-0 bg-[#d71920] px-2.5 py-1.5 text-[8px] font-bold tracking-widest text-white">
                                                            BB
                                                        </span>
                                                    </Link>

                                                    <div className="flex min-w-0 flex-col items-start justify-center py-1">
                                                        <p className="mb-2 text-[8px] font-bold tracking-[0.17em] text-[#d71920]">
                                                            PIECE{' '}
                                                            {String(
                                                                index + 1,
                                                            ).padStart(2, '0')}
                                                        </p>

                                                        <Link
                                                            href={`/products/${item.slug}`}
                                                            className="break-words text-sm font-bold tracking-tight transition-colors hover:text-[#d71920] sm:text-base"
                                                        >
                                                            {item.name}
                                                        </Link>

                                                        <p className="mt-2 text-[10px] text-black/40">
                                                            Stok tersedia:{' '}
                                                            {item.stock} unit
                                                        </p>

                                                        {/* Quantity controls */}
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <div className="flex h-8 items-center border border-black/10 bg-white">
                                                                <button
                                                                    type="button"
                                                                    aria-label={`Kurangi ${item.name}`}
                                                                    disabled={
                                                                        Boolean(
                                                                            busySlug,
                                                                        ) ||
                                                                        item.quantity <=
                                                                            1
                                                                    }
                                                                    onClick={() =>
                                                                        submitAction(
                                                                            item.slug,
                                                                            'decrease',
                                                                        )
                                                                    }
                                                                    className="flex h-full w-8 items-center justify-center transition-colors hover:bg-[#f7f6f2] hover:text-[#d71920] disabled:cursor-not-allowed disabled:opacity-30"
                                                                >
                                                                    <Minus
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                </button>

                                                                <span
                                                                    aria-live="polite"
                                                                    className="min-w-8 text-center text-[11px] font-bold"
                                                                >
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>

                                                                <button
                                                                    type="button"
                                                                    aria-label={`Tambah ${item.name}`}
                                                                    disabled={
                                                                        Boolean(
                                                                            busySlug,
                                                                        ) ||
                                                                        !canIncrease
                                                                    }
                                                                    onClick={() =>
                                                                        submitAction(
                                                                            item.slug,
                                                                            'increase',
                                                                        )
                                                                    }
                                                                    title={
                                                                        canIncrease
                                                                            ? 'Tambah jumlah'
                                                                            : 'Stok maksimum tercapai'
                                                                    }
                                                                    className="flex h-full w-8 items-center justify-center transition-colors hover:bg-[#f7f6f2] hover:text-[#d71920] disabled:cursor-not-allowed disabled:opacity-30"
                                                                >
                                                                    <Plus
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                </button>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                aria-label={`Hapus ${item.name}`}
                                                                disabled={
                                                                    Boolean(
                                                                        busySlug,
                                                                    )
                                                                }
                                                                onClick={() =>
                                                                    removeItem(
                                                                        item.slug,
                                                                        item.name,
                                                                    )
                                                                }
                                                                className="flex h-8 w-8 items-center justify-center text-black/35 transition-colors hover:bg-red-50 hover:text-[#d71920] disabled:opacity-30"
                                                            >
                                                                <Trash2
                                                                    size={14}
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Unit price */}
                                                <div className="flex items-center justify-between gap-3 text-xs sm:block">
                                                    <span className="text-[10px] text-black/40 sm:hidden">
                                                        Harga satuan
                                                    </span>

                                                    <span className="font-medium">
                                                        {formatRupiah(
                                                            item.price,
                                                        )}
                                                    </span>
                                                </div>

                                                {/* Subtotal */}
                                                <div className="flex items-center justify-between gap-3 text-xs sm:block">
                                                    <span className="text-[10px] text-black/40 sm:hidden">
                                                        Subtotal
                                                    </span>

                                                    <span className="font-black tracking-tight">
                                                        {formatRupiah(
                                                            item.subtotal,
                                                        )}
                                                    </span>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                    <Link
                                        href="/#collection"
                                        className="group inline-flex w-fit items-center gap-2 text-[10px] font-bold tracking-[0.12em] transition-colors hover:text-[#d71920]"
                                    >
                                        <ArrowLeft
                                            size={14}
                                            className="transition-transform group-hover:-translate-x-1"
                                        />
                                        LANJUT BELANJA
                                    </Link>

                                    <p className="text-[10px] text-black/40">
                                        Harga ditampilkan dalam Rupiah (IDR).
                                    </p>
                                </div>
                            </div>

                            {/* Order summary */}
                            <aside className="relative overflow-hidden border border-black/[0.08] bg-white p-5 sm:p-7 lg:sticky lg:top-28">
                                <div className="absolute left-0 top-0 h-1 w-full bg-[#d71920]" />

                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#d71920]">
                                            YOUR ORDER
                                        </p>

                                        <h2 className="mt-2 text-xl font-black tracking-[-0.055em]">
                                            Ringkasan Pesanan
                                        </h2>
                                    </div>

                                    <span className="flex h-10 w-10 items-center justify-center bg-[#f7f6f2]">
                                        <ShoppingBag
                                            size={18}
                                            strokeWidth={1.6}
                                        />
                                    </span>
                                </div>

                                {/* Summary details */}
                                <div className="mt-7 space-y-4 border-b border-dashed border-black/15 pb-6">
                                    <div className="flex items-center justify-between gap-3 text-xs">
                                        <span className="text-black/50">
                                            Jenis produk
                                        </span>

                                        <span className="font-semibold">
                                            {items.length} jenis
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 text-xs">
                                        <span className="text-black/50">
                                            Jumlah barang
                                        </span>

                                        <span className="font-semibold">
                                            {totalItems} unit
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 text-xs">
                                        <span className="text-black/50">
                                            Subtotal produk
                                        </span>

                                        <span className="font-semibold">
                                            {formatRupiah(total)}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 text-xs">
                                        <span className="text-black/50">
                                            Pengiriman
                                        </span>

                                        <span className="font-semibold text-black/40">
                                            Dihitung nanti
                                        </span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="pt-5">
                                    <p className="text-[9px] font-bold tracking-[0.17em] text-black/45">
                                        TOTAL BELANJA
                                    </p>

                                    <p className="mt-2 break-words text-2xl font-black tracking-[-0.065em] sm:text-3xl">
                                        {formatRupiah(total)}
                                    </p>

                                    <p className="mt-2 text-[10px] leading-5 text-black/45">
                                        Belum termasuk ongkos kirim jika
                                        berlaku.
                                    </p>
                                </div>

                                {/* Checkout placeholder */}
                                <button
                                    type="button"
                                    disabled
                                    title="Fitur checkout belum diaktifkan"
                                    className="mt-6 flex min-h-14 w-full cursor-not-allowed items-center justify-between gap-3 bg-[#171717]/15 px-4 text-[#171717]/50"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.12em]">
                                        CHECKOUT SEGERA HADIR
                                    </span>

                                    <ArrowRight size={17} />
                                </button>

                                <p className="mt-3 text-center text-[9px] leading-5 text-black/40">
                                    Checkout akan tersedia setelah proses
                                    pemesanan dan pembayaran diaktifkan.
                                </p>

                                {/* Trust badges */}
                                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/[0.08] pt-5">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck
                                            size={16}
                                            className="shrink-0 text-[#d71920]"
                                        />

                                        <span className="text-[9px] font-semibold text-black/60">
                                            Produk original
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Truck
                                            size={16}
                                            className="shrink-0 text-[#d71920]"
                                        />

                                        <span className="text-[9px] font-semibold text-black/60">
                                            Siap diproses
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 bg-[#f7f6f2] px-4 py-3 text-center">
                                    <p className="text-[8px] font-bold tracking-[0.18em] text-black/45">
                                        IDENTITAS LOKAL.
                                        <span className="text-[#d71920]">
                                            {' '}
                                            GAYA GLOBAL.
                                        </span>
                                    </p>
                                </div>
                            </aside>
                        </div>
                    )}
                </section>

                {/* Brand statement */}
                <section className="overflow-hidden bg-[#171717] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-[9px] font-bold tracking-[0.25em] text-[#e3262e]">
                                OUR IDENTITY, OUR PRIDE
                            </p>

                            <h2 className="mt-4 text-3xl font-black leading-[0.98] tracking-[-0.065em] sm:text-5xl">
                                Bukan sekadar gaya.
                                <br />
                                Ini soal identitas.
                            </h2>
                        </div>

                        <Link
                            href="/#collection"
                            className="group inline-flex min-h-12 w-fit items-center gap-5 border border-white/20 px-5 text-[10px] font-bold tracking-[0.14em] transition-colors hover:border-[#d71920] hover:bg-[#d71920]"
                        >
                            JELAJAHI KOLEKSI

                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-[#171717] px-5 pb-7 text-white sm:px-8 lg:px-12">
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
                                href="/one-production"
                                className="transition-colors hover:text-white"
                            >
                                One Production
                            </Link>

                            <span>Made with pride in Jakarta.</span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
